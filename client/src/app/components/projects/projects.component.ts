import { Component, AfterViewInit, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TranslationService } from '../../services/translation.service';

gsap.registerPlugin(ScrollTrigger);

import { Project, PROJECTS } from '../../data/projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: []
})
export class ProjectsComponent {
  ts = inject(TranslationService);
  projects: Project[] = JSON.parse(JSON.stringify(PROJECTS)); // Deep clone to maintain state per session if needed, or just PROJECTS if you want shared state. Let's use deep clone to allow isOpen toggling without mutating the source.

  toggleProject(index: number) {
    const currentState = this.projects[index].isOpen;
    this.projects.forEach(p => p.isOpen = false);
    this.projects[index].isOpen = !currentState;
  }

  isAnyProjectOpen(): boolean {
    return this.projects.some(p => p.isOpen);
  }

  closeAll() {
    this.projects.forEach(p => p.isOpen = false);
  }

  nextImage(index: number, event: Event) {
    event.stopPropagation();
    const p = this.projects[index];
    p.currentImgIndex = (p.currentImgIndex + 1) % p.images.length;
  }

  prevImage(index: number, event: Event) {
    event.stopPropagation();
    const p = this.projects[index];
    p.currentImgIndex = (p.currentImgIndex - 1 + p.images.length) % p.images.length;
  }

  trackByIndex(index: number): number {
    return index;
  }
}
