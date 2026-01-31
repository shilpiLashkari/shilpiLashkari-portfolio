import { Component, Input, ChangeDetectionStrategy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-loader',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './loader.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent implements OnInit {
    @Input() isLoading = true;

    terminalLines = signal<string[]>([]);

    private readonly lines = [
        '> INITIALIZING SYSTEM...',
        '> LOADING ASSETS...',
        '> ESTABLISHING CONNECTION...',
        '> ACCESS GRANTED',
        '> WELCOME, BUDDY.'
    ];

    ngOnInit() {
        this.runTypingSequence();
    }

    private async runTypingSequence() {
        for (let i = 0; i < this.lines.length; i++) {
            await this.typeLine(this.lines[i]);
            if (i === this.lines.length - 1) {
                await new Promise(resolve => setTimeout(resolve, 3000)); // 3s pause after last line
            } else {
                await new Promise(resolve => setTimeout(resolve, 300)); // Normal pause between lines
            }
        }
    }

    private typeLine(line: string): Promise<void> {
        return new Promise(resolve => {
            const currentLines = this.terminalLines();
            // Start with empty line
            this.terminalLines.set([...currentLines, '']);

            let charIndex = 0;
            const interval = setInterval(() => {
                if (charIndex < line.length) {
                    this.terminalLines.update(lines => {
                        const newLines = [...lines];
                        newLines[newLines.length - 1] = line.substring(0, charIndex + 1);
                        return newLines;
                    });
                    charIndex++;
                } else {
                    clearInterval(interval);
                    resolve();
                }
            }, 30); // Typing speed
        });
    }
}
