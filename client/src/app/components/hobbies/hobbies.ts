import { Component, HostListener, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-hobbies',
  template: `
    <section class="py-24 px-6 dark:bg-gray-950 bg-gray-50 border-t dark:border-gray-900 border-gray-200 relative overflow-hidden group transition-colors duration-300">
      <!-- Background Glow -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-fuchsia-500/10 transition-colors duration-700"></div>

      <div class="max-w-5xl mx-auto relative z-10">
        <h2 class="text-3xl md:text-5xl font-bold text-center dark:text-white text-gray-900 mb-16 tracking-tight reveal-on-scroll">
          {{ ts.t.hobbies.title }} <span class="text-fuchsia-500">.</span>
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 reveal-on-scroll [transition-delay:200ms]">
          
          <!-- Books -->
          <div class="hobby-card group/card" (mouseenter)="playSound('book')">
            <span class="text-4xl mb-4 block group-hover/card:scale-125 group-hover/card:rotate-[-10deg] transition-transform duration-300">📚</span>
            <h3 class="text-lg font-bold dark:text-white text-gray-900 mb-1 group-hover/card:text-fuchsia-400 transition-colors">{{ ts.t.hobbies.cards.books.title }}</h3>
            <p class="text-xs dark:text-gray-500 text-gray-600 font-mono dark:group-hover/card:text-white group-hover/card:text-gray-900 transition-colors">{{ ts.t.hobbies.cards.books.subtitle }}</p>
          </div>

          <!-- Music -->
          <div class="hobby-card group/card" (mouseenter)="playSound('music')">
            <span class="text-4xl mb-4 block group-hover/card:scale-125 group-hover/card:rotate-12 transition-transform duration-300">🎵</span>
            <h3 class="text-lg font-bold dark:text-white text-gray-900 mb-1 group-hover/card:text-fuchsia-400 transition-colors">{{ ts.t.hobbies.cards.music.title }}</h3>
            <p class="text-xs dark:text-gray-500 text-gray-600 font-mono dark:group-hover/card:text-white group-hover/card:text-gray-900 transition-colors">{{ ts.t.hobbies.cards.music.subtitle }}</p>
          </div>

          <!-- Gaming -->
          <div class="hobby-card group/card" (mouseenter)="playSound('game')">
            <span class="text-4xl mb-4 block group-hover/card:scale-125 group-hover/card:-translate-y-2 transition-transform duration-300">🎮</span>
            <h3 class="text-lg font-bold dark:text-white text-gray-900 mb-1 group-hover/card:text-fuchsia-400 transition-colors">{{ ts.t.hobbies.cards.games.title }}</h3>
            <p class="text-xs dark:text-gray-500 text-gray-600 font-mono dark:group-hover/card:text-white group-hover/card:text-gray-900 transition-colors">{{ ts.t.hobbies.cards.games.subtitle }}</p>
          </div>

          <!-- Tech -->
          <div class="hobby-card group/card" (mouseenter)="playSound('tech')">
            <span class="text-4xl mb-4 block group-hover/card:scale-125 group-hover/card:rotate-[360deg] transition-transform duration-500">🚀</span>
            <h3 class="text-lg font-bold dark:text-white text-gray-900 mb-1 group-hover/card:text-fuchsia-400 transition-colors">{{ ts.t.hobbies.cards.tech.title }}</h3>
            <p class="text-xs dark:text-gray-500 text-gray-600 font-mono dark:group-hover/card:text-white group-hover/card:text-gray-900 transition-colors">{{ ts.t.hobbies.cards.tech.subtitle }}</p>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    .hobby-card {
      @apply dark:bg-gray-900/50 bg-white backdrop-blur-sm border dark:border-gray-800 border-gray-200 rounded-3xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-2 hover:border-fuchsia-500/50 dark:hover:bg-gray-900 hover:bg-gray-50 hover:shadow-[0_0_40px_rgba(217,70,239,0.15)] cursor-pointer shadow-sm;
    }
  `],
  standalone: true
})
export class HobbiesComponent {
  ts = inject(TranslationService);
  private audioCtx: AudioContext | null = null;
  private isAudioUnlocked = false;

  constructor() {
    // Lazy init is fine, but we need to unlock it.
  }

  // Browser Policy: AudioContext must be resumed after a user gesture (click).
  @HostListener('document:click')
  unlockAudio() {
    if (!this.audioCtx) {
      this.audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume().then(() => {
        this.isAudioUnlocked = true;
      });
    }
  }

  playSound(type: 'book' | 'music' | 'game' | 'tech') {
    if (typeof window !== 'undefined' && !this.audioCtx) {
      this.audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    if (!this.audioCtx) return;

    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    const ctx = this.audioCtx;
    const now = ctx.currentTime;

    switch (type) {
      case 'book': // Page Flip (Quick noise burst with filter sweep)
        this.playFlip(ctx, now);
        break;
      case 'music': // Flute (Sine + Vibrato + Breath)
        this.playFlute(ctx, now, 523.25); // C5
        setTimeout(() => this.playFlute(ctx, now + 0.15, 659.25), 150); // E5
        break;
      case 'game': // Retro Game (Coin/Pickup sound)
        this.playCoin(ctx, now);
        break;
      case 'tech': // Futuristic Data Noise
        this.playSciFi(ctx, now);
        break;
    }
  }

  private playFlip(ctx: AudioContext, time: number) {
    const bufferSize = ctx.sampleRate * 0.1; // 100ms
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2000, time);
    filter.frequency.exponentialRampToValueAtTime(500, time + 0.1);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.5, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.1);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    noise.start(time);
  }

  private playFlute(ctx: AudioContext, time: number, freq: number) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    // Vibrato
    const vibOsc = ctx.createOscillator();
    const vibGain = ctx.createGain();
    vibOsc.frequency.value = 6; // 6Hz vibrato
    vibGain.gain.value = 3; // Depth
    vibOsc.connect(vibGain);
    vibGain.connect(osc.frequency);
    vibOsc.start(time);

    // ADSR Envelope for "breath" feel
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.2, time + 0.05); // Attack
    gain.gain.linearRampToValueAtTime(0.15, time + 0.2); // Decay
    gain.gain.linearRampToValueAtTime(0, time + 0.4); // Release

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(time);
    osc.stop(time + 0.5);
    vibOsc.stop(time + 0.5);
  }

  private playCoin(ctx: AudioContext, time: number) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(900, time);
    osc.frequency.setValueAtTime(1400, time + 0.08); // Jump pitch

    gain.gain.setValueAtTime(0.1, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.4);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(time);
    osc.stop(time + 0.4);
  }

  private playSciFi(ctx: AudioContext, time: number) {
    // FM Synthesis for "Tech" sound
    const carrier = ctx.createOscillator();
    const modulator = ctx.createOscillator();
    const modGain = ctx.createGain();
    const mainGain = ctx.createGain();

    carrier.type = 'sine';
    carrier.frequency.setValueAtTime(440, time);
    carrier.frequency.exponentialRampToValueAtTime(880, time + 0.2);

    modulator.type = 'sawtooth';
    modulator.frequency.setValueAtTime(50, time);

    modGain.gain.setValueAtTime(200, time);
    modGain.gain.exponentialRampToValueAtTime(10, time + 0.2);

    modulator.connect(modGain);
    modGain.connect(carrier.frequency);

    mainGain.gain.setValueAtTime(0.15, time);
    mainGain.gain.exponentialRampToValueAtTime(0.01, time + 0.3);

    carrier.connect(mainGain);
    mainGain.connect(ctx.destination);

    carrier.start(time);
    modulator.start(time);
    carrier.stop(time + 0.3);
    modulator.stop(time + 0.3);
  }
}
