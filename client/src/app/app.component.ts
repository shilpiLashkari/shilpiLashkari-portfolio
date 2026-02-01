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

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
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
        [class.opacity-0]="isLoading()" [class.translate-y-10]="isLoading()" [class.opacity-100]="!isLoading()"
        [class.translate-y-0]="!isLoading()">
        
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
          @defer (on viewport) { <app-projects></app-projects> } 
          @placeholder { <div class="h-[800px] dark:bg-black bg-white"></div> }
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
    </main>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  ts = inject(TranslationService);

  title = signal('portfolio-app');
  isDarkMode = signal(true);
  isLoading = signal(true);
  activeSection = signal('home');

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
