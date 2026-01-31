import { Component, AfterViewInit, inject, ViewChild, ElementRef, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TranslationService } from '../../services/translation.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './experience.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: []
})
export class ExperienceComponent implements AfterViewInit, OnDestroy {
    ts = inject(TranslationService);
    @ViewChild('scrollLine') scrollLine!: ElementRef;

    ngOnDestroy() {
        ScrollTrigger.getAll().filter(st => st.vars.trigger === '.experience-item' || st.vars.trigger === this.scrollLine?.nativeElement).forEach(t => t.kill());
    }

    ngAfterViewInit() {
        // Timeline line growth animation
        gsap.to(this.scrollLine.nativeElement, {
            scrollTrigger: {
                trigger: '.experience-item',
                start: 'top center',
                end: 'bottom center',
                scrub: true,
            },
            height: '100%',
            ease: 'none'
        });

        gsap.utils.toArray('.experience-item').forEach((item: any) => {
            gsap.fromTo(item,
                { opacity: 0, x: -20 },
                {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                    },
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power2.out'
                }
            );
        });
    }
}
