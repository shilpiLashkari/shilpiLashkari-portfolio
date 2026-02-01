import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
    <section class="h-screen flex items-center justify-center relative overflow-hidden px-6 pt-16 transition-colors duration-300">

    <!-- Background Elements -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow">
    </div>

    <!-- Fixed Socials - Left -->
    <div class="fixed bottom-0 left-10 hidden md:flex flex-col gap-6 items-center z-20 animate-fade-in-up delay-1000">
        <a href="https://github.com/shilpilashkari" target="_blank"
            class="text-gray-400 hover:text-fuchsia-400 hover:-translate-y-1 transition-all duration-300">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.05-.015-2.055-3.33.72-4.035-1.605-4.035-1.605-.54-1.38-1.335-1.755-1.335-1.755-1.085-.735.09-.72.09-.72 1.2.09 1.83 1.245 1.83 1.245 1.065 1.83 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.225 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.295-1.56 3.3-1.23 3.3-1.23.66 1.695.24 2.925.12 3.225.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
        </a>
        <a href="https://linkedin.com/in/shilpilashkari" target="_blank"
            class="text-gray-400 hover:text-fuchsia-400 hover:-translate-y-1 transition-all duration-300">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 21.227.792 22 1.771 22h20.451C23.2 22 24 21.227 24 20.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
        </a>
        <div class="h-24 w-px bg-gray-600"></div>
    </div>

    <!-- Fixed Socials - Right -->
    <div class="fixed bottom-0 right-10 hidden md:flex flex-col gap-6 items-center z-20 animate-fade-in-up delay-1000">
        <a href="mailto:shilpilashkari@gmail.com"
            class="text-gray-400 hover:text-fuchsia-400 hover:-translate-y-1 transition-all duration-300 writing-vertical font-mono text-sm tracking-widest">
            shilpilashkari@gmail.com
        </a>
        <div class="h-24 w-px bg-gray-600"></div>
    </div>

    <!-- Main Content -->
    <div class="max-w-4xl w-full flex flex-col items-start z-10 space-y-4">
        <div class="overflow-hidden">
            <p class="text-fuchsia-400 font-mono text-lg mb-2 animate-slide-up delay-200">
                {{ ts.t.hero.greeting }}
            </p>
        </div>

        <div class="overflow-hidden">
            <h1 class="text-6xl md:text-8xl font-bold dark:text-white text-gray-900 tracking-tight animate-slide-up delay-400">
                {{ ts.t.hero.name }}
            </h1>
        </div>

        <div class="overflow-hidden">
            <h2 class="text-4xl md:text-6xl font-bold dark:text-gray-400 text-gray-600 tracking-tight flex items-center gap-2 animate-slide-up delay-600">
                {{ ts.t.hero.role }}<span class="cursor-blink text-fuchsia-400">|</span>
            </h2>
        </div>

        <p class="dark:text-gray-400 text-gray-600 text-lg md:text-xl max-w-xl mt-8 leading-relaxed animate-fade-in delay-800">
            {{ ts.t.hero.description }}
        </p>

        <div class="pt-10 animate-fade-in delay-1000">
            <a href="mailto:shilpilashkari@gmail.com"
                class="relative px-8 py-4 bg-transparent overflow-hidden rounded group border border-fuchsia-500/30">
                <div class="absolute inset-0 w-0 bg-fuchsia-600 transition-all duration-[250ms] ease-out group-hover:w-full opacity-10">
                </div>
                <span class="relative text-fuchsia-400 group-hover:text-fuchsia-300 font-mono tracking-wider">{{ ts.t.hero.sayHi }}</span>
            </a>
        </div>
    </div>
    </section>
  `,
  styles: [`
    .writing-vertical {
      writing-mode: vertical-rl;
      text-orientation: mixed;
    }
  `]
})
export class HeroComponent {
  ts = inject(TranslationService);
}
