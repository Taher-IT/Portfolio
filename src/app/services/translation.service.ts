import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { TRANSLATIONS, Lang } from '../data/translate-text';

@Injectable({ providedIn: 'root' })

export class TranslationService {
    private lang$ = new BehaviorSubject<Lang>('en');

    switch(lang: Lang) { this.lang$.next(lang); }

    get(keyPath: string) {
        return this.lang$.pipe(
            map(selectedLanguage =>
                keyPath.split('.').reduce<any>((currentObject, propertyKey) =>
                    currentObject?.[propertyKey], TRANSLATIONS[selectedLanguage]))
        );
    }

    current() { return this.lang$.value; }
}
