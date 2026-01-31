import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, HostListener, NgZone, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as THREE from 'three';

@Component({
    selector: 'app-tech-cloud',
    standalone: true,
    template: `
    <section class="py-24 px-6 bg-gray-950 relative overflow-hidden">
      <!-- Background Glow -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div class="max-w-6xl mx-auto relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent">
          Technical Arsenal
        </h2>

        <div #canvasContainer class="w-full h-[400px] md:h-[600px] flex items-center justify-center relative cursor-grab active:cursor-grabbing">
          @if (loading) {
            <div class="text-fuchsia-500 font-mono animate-pulse absolute">Initializing Core...</div>
          }
        </div>
        
        <p class="text-center text-gray-500 text-sm mt-4 font-mono">
          <span class="text-fuchsia-500">>></span> Drag to explore the cloud
        </p>
      </div>
    </section>
  `,
    styles: []
})
export class TechCloudComponent implements AfterViewInit, OnDestroy {
    @ViewChild('canvasContainer') containerRef!: ElementRef;

    loading = true;
    private scene!: THREE.Scene;
    private camera!: THREE.PerspectiveCamera;
    private renderer!: THREE.WebGLRenderer;
    private tags: THREE.Group = new THREE.Group();
    private mouseX = 0;
    private mouseY = 0;
    private frameId: number | null = null;
    private isBrowser: boolean;

    private techList = [
        'Angular', 'React', 'Node.js', 'TypeScript', 'MongoDB',
        'Express', 'Tailwind', 'Three.js', 'AWS', 'Python',
        'Django', 'Docker', 'Git', 'Redis', 'GraphQL', 'Next.js'
    ];

    constructor(private zone: NgZone, @Inject(PLATFORM_ID) platformId: Object) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    ngAfterViewInit() {
        if (this.isBrowser) {
            this.initThree();
        }
    }

    initThree() {
        // Basic Setup
        const container = this.containerRef.nativeElement;
        const width = container.clientWidth;
        const height = container.clientHeight;

        this.scene = new THREE.Scene();
        // this.scene.fog = new THREE.FogExp2(0x000000, 0.001); // Optional fog

        this.camera = new THREE.PerspectiveCamera(50, width / height, 1, 2000);
        this.camera.position.z = 800;

        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(this.renderer.domElement);

        // Create Text Sprites
        this.createTags();

        this.scene.add(this.tags);
        this.loading = false;

        // Start Animation Loop outside Angular Zone for performance
        this.zone.runOutsideAngular(() => {
            this.animate();
        });
    }

    createTags() {
        const radius = 300;

        // Golden Angle approximation
        const phi = Math.PI * (3 - Math.sqrt(5));

        for (let i = 0; i < this.techList.length; i++) {
            const y = 1 - (i / (this.techList.length - 1)) * 2; // y goes from 1 to -1
            const radiusAtY = Math.sqrt(1 - y * y); // radius at y

            const theta = phi * i; // golden angle increment

            const x = Math.cos(theta) * radiusAtY;
            const z = Math.sin(theta) * radiusAtY;

            const vector = new THREE.Vector3(x * radius, y * radius, z * radius);

            const sprite = this.createTextSprite(this.techList[i]);
            sprite.position.copy(vector);

            // Look at center? No, look at camera usually, but for a cloud we want them "fixed" in the sphere
            // Actually sprites always face camera by default.
            this.tags.add(sprite);
        }
    }

    createTextSprite(message: string) {
        const fontface = "Inter, sans-serif";
        const fontsize = 40;
        const borderThickness = 0;

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d')!;
        context.font = `bold ${fontsize}px ${fontface}`;

        // Measure text
        const metrics = context.measureText(message);
        const textWidth = metrics.width;

        canvas.width = textWidth + 20;
        canvas.height = fontsize + 20; // Padding

        // Check context again after resize (sometimes needed)
        context.font = `bold ${fontsize}px ${fontface}`;
        context.fillStyle = 'rgba(232, 121, 249, 1)'; // Fuchsia color
        context.textAlign = 'center';
        context.textBaseline = 'middle';

        context.fillText(message, canvas.width / 2, canvas.height / 2);

        const texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;
        // texture.minFilter = THREE.LinearFilter; // Can be clearer

        const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
        const sprite = new THREE.Sprite(spriteMaterial);

        // Scale sprite to be reasonable size
        const scaleFactor = 2;
        sprite.scale.set(canvas.width / scaleFactor, canvas.height / scaleFactor, 1);

        return sprite;
    }

    animate() {
        this.frameId = requestAnimationFrame(() => this.animate());

        // Rotation logic
        // Add some base rotation plus mouse influence
        const baseSpeed = 0.002;
        const mouseInfluence = 0.0001;

        this.tags.rotation.y += baseSpeed + (this.mouseX * mouseInfluence);
        this.tags.rotation.x += (this.mouseY * mouseInfluence);

        this.renderer.render(this.scene, this.camera);
    }

    @HostListener('document:mousemove', ['$event'])
    onDocumentMouseMove(event: MouseEvent) {
        // Normalize mouse position from center of screen (-width/2 to width/2)
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        this.mouseX = (event.clientX - windowHalfX);
        this.mouseY = (event.clientY - windowHalfY);
    }

    @HostListener('window:resize')
    onWindowResize() {
        if (!this.camera || !this.renderer) return;

        const container = this.containerRef.nativeElement;
        const width = container.clientWidth;
        const height = container.clientHeight;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }

    ngOnDestroy() {
        if (this.frameId) {
            cancelAnimationFrame(this.frameId);
        }
        if (this.renderer) {
            this.renderer.dispose();
        }
    }
}
