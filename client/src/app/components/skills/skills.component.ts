import { Component, ElementRef, ViewChildren, AfterViewInit, QueryList, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
   selector: 'app-skills',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './skills.component.html',
   changeDetection: ChangeDetectionStrategy.OnPush,
   styles: []
})
export class SkillsComponent implements AfterViewInit, OnDestroy {
   @ViewChildren('skillCard') skillCards!: QueryList<ElementRef>;

   ngOnDestroy() {
      ScrollTrigger.getAll().filter(st => st.vars.trigger === '.skill-card').forEach(t => t.kill());
   }

   ngAfterViewInit() {
      gsap.utils.toArray('.skill-card').forEach((card: any, index) => {
         gsap.fromTo(card,
            { opacity: 0, y: 50 },
            {
               scrollTrigger: {
                  trigger: card,
                  start: 'top 90%',
               },
               opacity: 1,
               y: 0,
               duration: 0.8,
               delay: index * 0.1, // Stagger effect
               ease: 'power2.out'
            }
         );
      });
   }
}
