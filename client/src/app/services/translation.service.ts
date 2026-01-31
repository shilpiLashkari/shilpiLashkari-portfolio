import { Injectable, signal } from '@angular/core';
import { TRANSLATIONS, Language } from '../data/translations.data';

@Injectable({
    providedIn: 'root'
})
export class TranslationService {
    currentLang = signal<Language>('en');
    translations = TRANSLATIONS;

    toggleLanguage() {
        this.currentLang.update(lang => lang === 'en' ? 'hi' : 'en');
    }

    get t() {
        return this.translations[this.currentLang()];
    }
}
