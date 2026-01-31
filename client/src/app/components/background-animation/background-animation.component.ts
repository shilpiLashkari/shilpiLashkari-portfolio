import { Component, ElementRef, ViewChild, HostListener, AfterViewInit, OnDestroy, inject, NgZone, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-background-animation',
    standalone: true,
    template: '<canvas #canvas class="fixed inset-0 w-full h-full pointer-events-none z-0"></canvas>',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackgroundAnimationComponent implements AfterViewInit, OnDestroy {
    @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
    private zone = inject(NgZone);
    private ctx!: CanvasRenderingContext2D;
    private particles: Particle[] = [];
    private animationFrameId!: number;
    private width = 0;
    private height = 0;

    ngAfterViewInit() {
        this.zone.runOutsideAngular(() => {
            this.initCanvas();
            this.animate();
        });
    }

    ngOnDestroy() {
        if (typeof window !== 'undefined') {
            cancelAnimationFrame(this.animationFrameId);
        }
    }

    @HostListener('window:resize')
    onResize() {
        this.zone.runOutsideAngular(() => {
            this.initCanvas();
        });
    }

    initCanvas() {
        if (typeof window === 'undefined') return;

        const canvas = this.canvasRef.nativeElement;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        canvas.width = this.width;
        canvas.height = this.height;
        this.ctx = canvas.getContext('2d')!;

        this.createParticles();
    }

    createParticles() {
        this.particles = [];
        const particleCount = Math.floor((this.width * this.height) / 15000);

        for (let i = 0; i < particleCount; i++) {
            this.particles.push(new Particle(this.width, this.height));
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        this.particles.forEach(p => {
            p.update(this.width, this.height);
            p.draw(this.ctx);
        });

        this.connectParticles();
        this.animationFrameId = requestAnimationFrame(() => this.animate());
    }

    connectParticles() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(217, 70, 239, ${1 - distance / 150})`; // Fuchsia 500
                    this.ctx.lineWidth = 0.5;
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }
    }
}

class Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;

    constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2;
    }

    update(w: number, h: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = '#d946ef'; // Fuchsia 500
        ctx.fill();
    }
}
