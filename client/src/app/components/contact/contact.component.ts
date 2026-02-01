import { ChangeDetectionStrategy } from '@angular/core';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-32 px-6 dark:bg-black bg-white border-t dark:border-gray-900 border-gray-200 text-center relative overflow-hidden transition-colors duration-300">
    <!-- Background Decor -->
    <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-500/5 rounded-full blur-[120px] pointer-events-none">
    </div>

    <div class="max-w-6xl mx-auto relative z-10">
        <div class="grid md:grid-cols-2 gap-12 items-start text-left">

            <!-- Left: AI Opinions -->
            <div class="space-y-6 reveal-on-scroll delay-200">
                <h3 class="text-2xl font-bold text-fuchsia-400 flex items-center gap-3 mb-8">
                    <span class="text-3xl">🤖</span>
                    {{ ts.t.terminal.title }}
                </h3>
                <div class="prose prose-invert dark:text-gray-400 text-gray-600 leading-relaxed" [innerHTML]="ts.t.terminal.content">
                </div>
            </div>

            <!-- Right: Contact Actions -->
            <div class="space-y-8 reveal-on-scroll delay-400 flex flex-col items-center md:items-start">

                <!-- Heading moved here -->
                <h2 class="text-4xl md:text-5xl font-bold dark:text-white text-gray-900 tracking-tighter mb-4">
                    {{ ts.t.contact.title }}
                </h2>

                <p class="text-xl dark:text-gray-400 text-gray-600 leading-relaxed">
                    {{ ts.t.contact.desc }}
                </p>

                <div class="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                    <a href="mailto:shilpilashkari@gmail.com"
                        class="group relative px-8 py-4 dark:bg-white bg-black dark:text-black text-white font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                        <div
                            class="absolute inset-0 bg-fuchsia-100 translate-y-full group-hover:translate-y-0 transition-transform">
                        </div>
                        <span class="relative z-10 flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {{ ts.t.contact.btn }}
                        </span>
                    </a>


                </div>
            </div>
        </div>

        <div class="pt-32 pb-8 text-xs font-mono text-gray-600 uppercase tracking-widest">
            <p>© 2026 Crafted with ❤️ using Angular</p>
        </div>
    </div>
    </section>
  `,
  styles: []
})
export class ContactComponent {
  ts = inject(TranslationService);
}
