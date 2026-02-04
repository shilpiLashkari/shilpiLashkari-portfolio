import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TranslationService } from '../../services/translation.service';
import { ProjectService } from '../../services/project.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section id="projects" class="py-24 px-6 dark:bg-black bg-gray-50 relative transition-colors duration-300">
    <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-5xl font-bold mb-16 text-center dark:text-white text-gray-900 reveal-on-scroll">
            {{ ts.t.projects.title }}
        </h2>

        <!-- Horizontal Carousel -->
        <div class="flex overflow-x-auto gap-8 pb-12 snap-x hide-scrollbar reveal-on-scroll">
            <div *ngFor="let project of ps.projects(); let i = index; trackBy: trackByIndex" (click)="ps.openProject(i)"
                class="min-w-[300px] md:min-w-[450px] snap-center dark:bg-gray-900/50 bg-white border-2 dark:border-gray-800 border-gray-300 rounded-3xl p-8 hover:border-fuchsia-500/50 transition-all cursor-pointer group relative overflow-hidden shadow-xl hover:shadow-2xl">

                <div class="absolute inset-0 z-0">
                    <img *ngIf="project.videoUrl" [src]="project.videoUrl" alt="Preview"
                        class="w-full h-full object-cover opacity-0 group-hover:opacity-40 transition-opacity duration-500">
                    <div
                        class="absolute inset-0 dark:bg-gradient-to-t dark:from-gray-900 dark:via-gray-900/80 dark:to-transparent bg-gradient-to-t from-gray-100 via-gray-50/80 to-transparent">
                    </div>
                </div>

                <div
                    class="absolute inset-0 dark:bg-gradient-to-br dark:from-fuchsia-500/10 dark:to-transparent bg-gradient-to-br from-fuchsia-500/5 to-fuchsia-500/0 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                </div>

                <div class="relative z-10">
                    <span class="text-xs font-mono text-fuchsia-400 uppercase tracking-widest">{{ project.type }}</span>
                    <h3
                        class="text-2xl font-bold dark:text-white text-gray-900 mt-4 mb-4 group-hover:text-fuchsia-400 transition-colors">
                        {{ ts.t.projects.list[i]?.name || project.name }}
                    </h3>
                    <p class="dark:text-gray-400 text-gray-600 leading-relaxed line-clamp-3">
                        {{ ts.t.projects.list[i]?.summary || project.summary }}
                    </p>

                    <div
                        class="mt-8 flex items-center text-fuchsia-400 font-mono text-sm group-hover:gap-2 transition-all">
                        <span>{{ ts.t.projects.viewCaseStudy }}</span>
                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    `,
    styles: [`
    .hide-scrollbar::-webkit-scrollbar {
        display: none;
    }

    .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
    ts = inject(TranslationService);
    ps = inject(ProjectService);

    trackByIndex(index: number): number {
        return index;
    }
}
