import { Component, ElementRef, ViewChild, AfterViewInit, inject, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TranslationService } from '../../services/translation.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: []
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  ts = inject(TranslationService);
  @ViewChild('textBlock') textBlock!: ElementRef;
  @ViewChild('imageBlock') imageBlock!: ElementRef;

  ngOnDestroy() {
    ScrollTrigger.getAll().filter(st => st.vars.trigger === this.textBlock?.nativeElement || st.vars.trigger === this.imageBlock?.nativeElement).forEach(t => t.kill());
  }

  ngAfterViewInit() {
    gsap.to(this.textBlock.nativeElement, {
      scrollTrigger: {
        trigger: this.textBlock.nativeElement,
        start: 'top 80%',
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.to(this.imageBlock.nativeElement, {
      scrollTrigger: {
        trigger: this.imageBlock.nativeElement,
        start: 'top 80%',
      },
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 0.2,
      ease: 'power3.out'
    });
  }
}
