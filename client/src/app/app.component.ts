import { ChangeDetectionStrategy, Component, OnInit, signal, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundAnimationComponent } from './components/background-animation/background-animation.component';
import { TranslationService } from './services/translation.service';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ChatWidgetComponent } from './components/chat-widget/chat-widget.component';
import { CursorComponent } from './components/cursor/cursor.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HobbiesComponent } from './components/hobbies/hobbies';
import { TerminalComponent } from './components/terminal/terminal.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectService } from './services/project.service';

@Component({
  selector: 'app-root',
  standalone: true,
  // Removed OnPush for maximum stability during debugging
  imports: [
    CommonModule,
    BackgroundAnimationComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    ChatWidgetComponent,
    LoaderComponent,
    CursorComponent,
    HobbiesComponent,
    TerminalComponent,
    SkillsComponent
  ],
  template: `
    <main class="dark:bg-black bg-white dark:text-white text-gray-900 min-h-screen selection:bg-fuchsia-500 selection:text-black transition-colors duration-300">

      <app-loader *ngIf="isLoading()"></app-loader>
      <app-background-animation></app-background-animation>
      <app-cursor></app-cursor>

      <!-- Navbar -->
      <nav class="fixed top-0 w-full z-50 backdrop-blur-md dark:bg-black/50 bg-white/70 border-b dark:border-white/5 border-gray-200 transition-all duration-300 transform"
        [class.translate-y-[-100%]]="isLoading()" [class.translate-y-0]="!isLoading()" [class.duration-1000]="!isLoading()">
        <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <!-- Logo -->
          <a href="#" class="text-2xl font-bold text-fuchsia-500 tracking-tighter hover:scale-105 transition-transform">
            <span class="dark:text-white text-gray-900">S</span>L.
          </a>

          <!-- Desktop Links -->
          <div class="hidden md:flex gap-10 text-sm font-semibold tracking-wide">
            <a *ngFor="let item of ['about', 'experience', 'projects', 'contact']" [href]="'#' + item"
              (click)="setActiveSection(item)" class="relative py-2 transition-all duration-300"
              [ngClass]="activeSection() === item ? 'text-fuchsia-500' : 'dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-black'">
              {{ ts.t.nav[item] }}
              <span class="absolute bottom-0 left-0 w-full h-0.5 bg-fuchsia-500 transition-transform duration-300 origin-left"
                [ngClass]="activeSection() === item ? 'scale-x-100' : 'scale-x-0'"></span>
            </a>
          </div>

          <div class="flex items-center gap-6">
            <!-- Language Toggle -->
            <button (click)="ts.toggleLanguage()"
              class="relative flex items-center bg-gray-900 border border-gray-800 rounded-full p-1 w-20 h-9 overflow-hidden group hover:border-fuchsia-500/50 transition-colors">
              <div class="absolute inset-y-1 transition-all duration-500 ease-out z-10 w-8 h-7 bg-fuchsia-500 rounded-full shadow-lg shadow-fuchsia-500/20"
                [style.left.px]="ts.currentLang() === 'en' ? 4 : 44"></div>
              <span class="flex-1 text-[10px] font-bold text-center z-20 transition-colors"
                [class.text-white]="ts.currentLang() === 'en'" [class.text-gray-500]="ts.currentLang() !== 'en'">EN</span>
              <span class="flex-1 text-[10px] font-bold text-center z-20 transition-colors"
                [class.text-white]="ts.currentLang() === 'hi'" [class.text-gray-500]="ts.currentLang() !== 'hi'">HI</span>
            </button>

            <!-- Theme Toggle -->
            <button (click)="toggleTheme()"
              class="p-2.5 rounded-xl hover:bg-white/5 transition-all text-yellow-400 border border-transparent hover:border-white/10"
              [title]="isDarkMode() ? 'Light Mode' : 'Dark Mode'">
              <span *ngIf="isDarkMode()" class="text-xl">☀️</span>
              <span *ngIf="!isDarkMode()" class="text-xl">🌙</span>
            </button>
          </div>
        </div>
      </nav>

      <!-- Content -->
      <div class="relative z-10 scroll-smooth transition-all duration-1000 ease-out delay-300"
        [class.opacity-0]="isLoading()" [class.opacity-100]="!isLoading()"
        [style.transform]="isLoading() ? 'translateY(2.5rem)' : 'none'">
        
        <app-hero id="home"></app-hero>

        <div id="about">
          @defer (on viewport) { <app-about></app-about> } 
          @placeholder { <div class="h-screen dark:bg-black bg-white"></div> }
        </div>

        <div id="skills">
          @defer (on viewport) { <app-skills></app-skills> } 
          @placeholder { <div class="h-96 dark:bg-black bg-white"></div> }
        </div>

        <div id="experience">
          @defer (on viewport) { <app-experience></app-experience> } 
          @placeholder { <div class="h-screen dark:bg-black bg-white"></div> }
        </div>

        <div id="projects">
          <app-projects></app-projects>
        </div>

        <div id="hobbies">
          @defer (on viewport) { <app-hobbies></app-hobbies> } 
          @placeholder { <div class="h-64 dark:bg-black bg-white"></div> }
        </div>

        <div id="contact">
          @defer (on viewport) { <app-contact></app-contact> } 
          @placeholder { <div class="h-96 dark:bg-black bg-white"></div> }
        </div>
      </div>

      <app-terminal></app-terminal>

      @defer (on interaction; on timer(5s)) { <app-chat-widget></app-chat-widget> } 
      @placeholder { <div class="fixed bottom-6 right-6 w-16 h-16 bg-fuchsia-600/20 rounded-[2rem] animate-pulse"></div> }

      <!-- Project Detail Modal (Moved to Root for Stacking Context) -->
      <div *ngIf="ps.selectedProjectIndex() !== null" class="fixed inset-0 z-[10000] flex items-center justify-center p-4">

          <!-- Backdrop -->
          <div class="fixed inset-0 bg-black/90 backdrop-blur-xl" (click)="ps.closeAll()"></div>

          <!-- Modal Content Box -->
          <div *ngIf="ps.selectedProject() as project"
              class="relative w-full max-w-5xl h-auto max-h-[90vh] dark:bg-gray-950 bg-white border dark:border-fuchsia-500/20 border-gray-200 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col items-stretch pointer-events-auto">
              
              <!-- Scrollable Body -->
              <div class="overflow-y-auto custom-scrollbar p-6 md:p-12 flex-1">
                  
                  <!-- Header -->
                  <div class="flex justify-between items-start mb-8">
                      <div>
                          <span class="text-fuchsia-400 font-mono text-sm uppercase tracking-[0.2em]">{{
                              project.type }}</span>
                          <h2 class="text-3xl md:text-5xl font-bold dark:text-white text-gray-900 mt-4 leading-tight">{{
                              ts.t.projects.list[ps.selectedProjectIndex()!]?.name || project.name }}</h2>
                      </div>
                      <button (click)="ps.closeAll()"
                          class="p-4 rounded-2xl dark:bg-gray-900 bg-gray-100 border dark:border-gray-800 border-gray-300 dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-gray-900 transition-colors">
                          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M6 18L18 6M6 6l12 12" />
                          </svg>
                      </button>
                  </div>

                  <!-- Image Carousel -->
                  <div
                      class="relative aspect-video rounded-2xl overflow-hidden mb-12 dark:bg-gray-900 bg-gray-200 group/carousel border dark:border-gray-800 border-gray-300">
                      <img [src]="project.images[project.currentImgIndex]"
                          class="w-full h-full object-cover"
                          alt="Project screenshot">

                      <button *ngIf="project.images.length > 1" (click)="ps.prevImage()"
                          class="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-fuchsia-600 transition-colors">
                          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M15 19l-7-7 7-7" />
                          </svg>
                      </button>

                      <button *ngIf="project.images.length > 1" (click)="ps.nextImage()"
                          class="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-fuchsia-600 transition-colors">
                          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M9 5l7 7-7 7" />
                          </svg>
                      </button>

                      <div *ngIf="project.images.length > 1" class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                          <div *ngFor="let img of project.images; let imgIdx = index"
                              class="w-6 h-1 rounded-full transition-colors"
                              [class.bg-fuchsia-500]="imgIdx === project.currentImgIndex"
                              [class.bg-white/20]="imgIdx !== project.currentImgIndex"></div>
                      </div>
                  </div>

                  <div class="grid md:grid-cols-2 gap-12">
                      <div class="space-y-8">
                          <div class="p-8 dark:bg-gray-900/30 bg-gray-50 rounded-3xl border dark:border-gray-800 border-gray-200">
                              <h4 class="text-fuchsia-400 font-mono text-xs uppercase tracking-widest mb-4 font-bold">
                                  {{ ts.t.projects.challenge }}
                              </h4>
                              <p class="dark:text-gray-300 text-gray-700 leading-relaxed">{{
                                  ts.t.projects.list[ps.selectedProjectIndex()!]?.problem || project.problem }}</p>
                          </div>
                          <div class="p-8 dark:bg-gray-900/30 bg-gray-50 rounded-3xl border dark:border-gray-800 border-gray-200">
                              <h4 class="text-fuchsia-400 font-mono text-xs uppercase tracking-widest mb-4 font-bold">
                                  {{ ts.t.projects.solution }}
                              </h4>
                              <p class="dark:text-gray-300 text-gray-700 leading-relaxed">{{
                                  ts.t.projects.list[ps.selectedProjectIndex()!]?.solution || project.solution }}</p>
                          </div>
                      </div>

                      <div class="space-y-8">
                          <div class="p-8 dark:bg-gray-900/30 bg-gray-50 rounded-3xl border dark:border-gray-800 border-gray-200">
                              <h4 class="text-fuchsia-400 font-mono text-xs uppercase tracking-widest mb-4 font-bold">
                                  Technologies
                              </h4>
                              <div class="flex flex-wrap gap-2">
                                  <span *ngFor="let t of project.tech.be"
                                      class="px-3 py-1 bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-[10px] font-mono rounded-full uppercase">{{
                                      t }}</span>
                                  <span *ngFor="let t of project.tech.db"
                                      class="px-3 py-1 dark:bg-white/5 bg-gray-200 border dark:border-white/10 border-gray-300 dark:text-gray-300 text-gray-700 text-[10px] font-mono rounded-full uppercase">{{
                                      t }}</span>
                              </div>
                          </div>
                          <div class="p-8 dark:bg-fuchsia-500/5 bg-fuchsia-50 rounded-3xl border dark:border-fuchsia-500/10 border-fuchsia-200">
                              <h4 class="text-fuchsia-400 font-mono text-xs uppercase tracking-widest mb-4 font-bold">
                                  {{ ts.t.projects.outcome }}
                              </h4>
                              <p class="dark:text-white text-gray-900 leading-relaxed font-semibold italic">
                                  "{{ ts.t.projects.list[ps.selectedProjectIndex()!]?.outcome || project.outcome }}"
                              </p>
                          </div>
                      </div>
                  </div>

                  <!-- Conclusions Section -->
                  <div *ngIf="project.conclusions && project.conclusions.length > 0" class="mt-12 p-8 dark:bg-gray-900/20 bg-gray-50 rounded-3xl border dark:border-gray-800 border-gray-200">
                      <h4 class="text-fuchsia-400 font-mono text-xs uppercase tracking-widest mb-6 border-b dark:border-gray-800 border-gray-200 pb-4 font-bold">
                          {{ ts.t.projects.conclusions || 'Conclusions' }}
                      </h4>
                      <ul class="grid md:grid-cols-2 gap-x-8 gap-y-4">
                          <li *ngFor="let conclusion of project.conclusions" class="flex items-start gap-4">
                              <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.5)]"></div>
                              <p class="dark:text-gray-400 text-gray-600 text-sm leading-relaxed">{{ conclusion }}</p>
                          </li>
                      </ul>
                  </div>

                  <!-- Action Button -->
                  <div *ngIf="project.liveUrl" class="my-12 flex justify-center">
                      <a [href]="project.liveUrl" target="_blank"
                          class="group relative inline-flex items-center gap-3 px-10 py-5 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(192,38,211,0.3)] hover:shadow-[0_0_30px_rgba(192,38,211,0.5)]">
                          <span>Visit Live Site</span>
                          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                      </a>
                  </div>

              </div>
          </div>
      </div>
    </main>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  ts = inject(TranslationService);
  ps = inject(ProjectService);

  title = signal('portfolio-app');
  isDarkMode = signal(true);
  isLoading = signal(true);
  activeSection = signal('home');

  @HostListener('document:keydown.escape')
  handleEscape() {
    if (this.ps.selectedProjectIndex() !== null) {
      this.ps.closeAll();
    }
  }

  @HostListener('document:click')
  playClickSound() {
    if (typeof window === 'undefined') return;

    // Create context if not exists
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;

    const ctx = new AudioContext();

    // Simple high-pitch click
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05); // Short decay

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['home', 'about', 'experience', 'projects', 'contact'];
    const scrollPosition = window.pageYOffset + 150;

    // Active Link Logic
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const top = element.offsetTop;
        const height = element.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          this.activeSection.set(section);
        }
      }
    }

    // Reveal Animation Logic
    const reveals = document.querySelectorAll('.reveal-on-scroll');
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 100;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('is-visible');
      }
    }
  }

  setActiveSection(section: string) {
    this.activeSection.set(section);
  }

  constructor() {
    this.initializeTheme();
  }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      // Force scroll to top on reload
      window.scrollTo(0, 0);
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
    }

    setTimeout(() => {
      this.isLoading.set(false);
    }, 6500);
  }

  initializeTheme() {
    if (typeof localStorage !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light') {
        this.setDark(false);
      } else {
        // Default to dark mode if no preference or explicitly dark
        this.setDark(true);
      }
    } else {
      // Default for SSR / initial load
      this.setDark(true);
    }
  }

  toggleTheme() {
    this.setDark(!this.isDarkMode());
  }

  private setDark(isDark: boolean) {
    this.isDarkMode.set(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
