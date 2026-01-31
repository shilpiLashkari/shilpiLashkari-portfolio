import { Component, ElementRef, ViewChild, AfterViewChecked, inject, ChangeDetectionStrategy, ChangeDetectorRef, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';

interface Message {
  sender: 'user' | 'ai';
  text: string;
}

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-widget.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: []
})
export class ChatWidgetComponent implements AfterViewChecked {
  ts = inject(TranslationService);
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  isOpen = signal(false);
  userInput = signal('');
  isTyping = signal(false);
  messages = signal<Message[]>([
    { sender: 'ai', text: this.ts.t.chat.greeting }
  ]);

  toggleChat() {
    this.isOpen.update(v => !v);
  }

  sendMessage() {
    const text = this.userInput();
    if (!text.trim()) return;

    this.messages.update(msgs => [...msgs, { sender: 'user', text }]);
    this.userInput.set('');
    this.isTyping.set(true);
    this.scrollToBottom();

    // Simulate AI Response
    setTimeout(() => {
      const response = this.generateResponse(text);
      this.messages.update(msgs => [...msgs, { sender: 'ai', text: response }]);
      this.isTyping.set(false);
      this.scrollToBottom();
    }, 1500);
  }

  generateResponse(query: string): string {
    const q = query.toLowerCase();
    const r = this.ts.t.chat.responses;

    if (q.includes('stack') || q.includes('tech')) return r.stack;
    if (q.includes('experience') || q.includes('work')) return r.experience;
    if (q.includes('project')) return r.project;
    if (q.includes('contact') || q.includes('email')) return r.contact;
    if (q.includes('ai')) return r.ai;
    return r.fallback;
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
}
