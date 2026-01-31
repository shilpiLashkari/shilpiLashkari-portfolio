import { Component, signal, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';

interface Log {
  type: 'command' | 'response' | 'error';
  text: string;
}

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="fixed top-24 right-6 z-50 flex flex-col items-end font-mono text-sm" 
         [class.hidden]="!isOpen()"
         (mouseenter)="isHovered.set(true)"
         (mouseleave)="isHovered.set(false)">
      <!-- Terminal Window -->
      <div class="bg-gray-900/90 backdrop-blur-md border border-gray-700 rounded-lg shadow-2xl overflow-hidden flex flex-col transition-all duration-300 transform origin-top-right"
           [class.scale-0]="!isOpen()"
           [class.scale-100]="isOpen()"
           [class.w-[350px]]="isHovered()"
           [class.md:w-[450px]]="isHovered()"
           [class.h-[300px]]="isHovered()"
           [class.w-[200px]]="!isHovered()"
           [class.h-[45px]]="!isHovered()"
           [class.opacity-100]="isHovered()"
           [class.opacity-60]="!isHovered()">
        
        <!-- Header -->
        <div class="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700 drag-handle cursor-move h-[45px]">
          <div class="flex gap-2">
            <div class="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer" (click)="toggle()"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span class="text-gray-400 text-xs truncate ml-2">guest@portfolio:~/</span>
        </div>

        <!-- Body -->
        <div #scrollContainer class="flex-1 p-4 overflow-y-auto custom-scrollbar text-fuchsia-400"
             [class.invisible]="!isHovered()">
          <div *ngFor="let log of logs()" class="mb-2">
            <ng-container *ngIf="log.type === 'command'">
              <span class="text-green-400">➜</span> <span class="text-cyan-400"> ~ </span> {{ log.text }}
            </ng-container>
            <ng-container *ngIf="log.type === 'response'">
              <div class="text-gray-300 ml-4 whitespace-pre-wrap" [innerHTML]="log.text"></div>
            </ng-container>
          </div>

          <!-- Input Line -->
          <div class="flex items-center gap-2 mt-2">
            <span class="text-green-400">➜</span>
            <span class="text-cyan-400">~</span>
            <input #cmdInput
                   type="text" 
                   [(ngModel)]="currentCommand" 
                   (keydown.enter)="executeCommand()"
                   class="bg-transparent border-0 outline-none text-white flex-1 focus:ring-0 p-0"
                   autofocus
                   autocomplete="off" 
                   spellcheck="false">
          </div>
        </div>
      </div>
      <!-- Helper Text when shrunk -->
      <div *ngIf="!isHovered() && isOpen()" class="text-xs text-gray-500 mt-2 bg-black/50 px-2 py-1 rounded">
        Hover to expand
      </div>
    </div>

    <!-- Toggle Button (Term Icon) -->
    <button *ngIf="!isOpen()" 
            (click)="toggle()" 
            class="fixed top-24 right-6 z-50 bg-gray-900 border border-gray-700 p-3 rounded-full text-green-400 shadow-lg hover:shadow-green-500/20 transition-all hover:translate-y-1 group">
      <span class="material-icons font-mono text-xl">>_</span>
    </button>
  `,
  styles: [`
    .custom-scrollbar::-webkit-scrollbar { width: 6px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: #4b5563; border-radius: 3px; }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #6b7280; }
  `]
})
export class TerminalComponent implements AfterViewChecked {
  isOpen = signal(false);
  isHovered = signal(false);
  currentCommand = '';
  logs = signal<Log[]>([
    { type: 'response', text: 'Welcome directly to the kernel. 🤖\nType "help" to see available commands.' }
  ]);

  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;
  @ViewChild('cmdInput') private cmdInput!: ElementRef;

  toggle() {
    this.isOpen.update(v => !v);
    if (this.isOpen()) {
      setTimeout(() => this.cmdInput.nativeElement.focus(), 100);
    }
  }

  executeCommand() {
    const cmd = this.currentCommand.trim().toLowerCase();
    if (!cmd) return;

    // Add command to log
    this.logs.update(l => [...l, { type: 'command', text: cmd }]);

    // Process response
    let response = '';
    switch (cmd) {
      case 'help':
        response = 'Available commands:\n  about     - Who am I?\n  skills    - My tech stack\n  contact   - Get functionality\n  clear     - Clear terminal\n  sudo      - ???';
        break;
      case 'about':
        response = 'Full-Stack Developer | AI Enthusiast | Builder.\nI craft digital experiences with Angular, Node.js, and a touch of magic.';
        break;
      case 'skills':
        response = 'Frontend: Angular, React, Tailwind\nBackend: Node.js, Express, MongoDB\nExtras: AI Integration, Three.js, GSAP';
        break;
      case 'contact':
        response = 'Email: shilpilashkari@gmail.com\nLinkedIn: /in/shilpilashkari';
        break;
      case 'clear':
        this.logs.set([]);
        this.currentCommand = '';
        return;
      case 'sudo':
        response = 'Nice try. Permission denied. 😉';
        break;
      case 'whoami':
        response = 'guest@portfolio';
        break;
      default:
        response = `Command not found: ${cmd}. Type "help" for a list of commands.`;
    }

    this.logs.update(l => [...l, { type: 'response', text: response }]);
    this.currentCommand = '';
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
}
