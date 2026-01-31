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
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  ts = inject(TranslationService);

  title = signal('portfolio-app');
  isDarkMode = signal(true);
  isLoading = signal(true);
  activeSection = signal('home');

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
      if (savedTheme === 'dark' || (!savedTheme && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        this.setDark(true);
      } else {
        this.setDark(false);
      }
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
