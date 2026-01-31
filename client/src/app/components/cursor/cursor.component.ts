import { Component, ElementRef, HostListener, OnInit, ViewChild, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
    selector: 'app-cursor',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div #cursor class="cursor-dot fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"></div>
    <div #follower class="cursor-follower fixed top-0 left-0 rounded-full pointer-events-none z-[9998] mix-blend-difference hidden md:block"></div>
  `,
    styles: [`
    .cursor-dot {
      width: 8px;
      height: 8px;
      background-color: white;
    }
    .cursor-follower {
      width: 40px;
      height: 40px;
      border: 1px solid rgba(255, 255, 255, 0.5);
      transition: transform 0.1s ease, width 0.3s ease, height 0.3s ease, background-color 0.3s ease;
    }
    .cursor-follower.active {
      width: 80px;
      height: 80px;
      background-color: rgba(255, 255, 255, 0.1);
      border-color: transparent;
    }
  `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CursorComponent implements OnInit {
    @ViewChild('cursor', { static: true }) cursor!: ElementRef;
    @ViewChild('follower', { static: true }) follower!: ElementRef;

    posX = 0;
    posY = 0;
    mouseX = 0;
    mouseY = 0;

    ngOnInit() {
        gsap.to({}, {
            duration: 0.016,
            repeat: -1,
            onRepeat: () => {
                this.posX += (this.mouseX - this.posX) / 9;
                this.posY += (this.mouseY - this.posY) / 9;

                gsap.set(this.follower.nativeElement, {
                    css: {
                        left: this.posX - 20,
                        top: this.posY - 20 // Center the 40px follower
                    }
                });

                gsap.set(this.cursor.nativeElement, {
                    css: {
                        left: this.mouseX - 4,
                        top: this.mouseY - 4 // Center the 8px dot
                    }
                });
            }
        });

        // Add specific hover logic for links/buttons
        // Using a more robust observer or global event delegation might be better for Angular SPA,
        // but for now, we'll try a simple periodic check or event delegation.
        // Actually, let's use global mouseover to check target.
    }

    @HostListener('document:mousemove', ['$event'])
    onMouseMove(e: MouseEvent) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
    }

    @HostListener('document:mouseover', ['$event'])
    onMouseOver(e: MouseEvent) {
        const target = e.target as HTMLElement;
        if (target.matches('a, button, .cursor-pointer, input, textarea') || target.closest('a, button, .cursor-pointer')) {
            this.follower.nativeElement.classList.add('active');
        } else {
            this.follower.nativeElement.classList.remove('active');
        }
    }
}
