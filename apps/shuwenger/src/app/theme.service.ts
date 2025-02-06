import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly darkThemeClass = 'dark';

  private readonly isDarkMode = signal<boolean>(false);
  readonly isDarkMode$ = this.isDarkMode.asReadonly();

  constructor() {
    this.initializeTheme();
  }

  private initializeTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Check local storage
      const theme = localStorage.getItem('theme');

      // Set initial value based the local storage preference or system preference
      this.setTheme(theme === 'dark');

    } else {
      // Default theme for server-side rendering
      this.setTheme(false);
    }
  }

  toggleTheme(): void {
    this.setTheme(!this.isDarkMode());
  }

  private setTheme(isDark: boolean): void {
    this.isDarkMode.set(isDark);

    if (isDark) {
      this.document.documentElement.classList.add(this.darkThemeClass);
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('theme', 'dark');
      }
    } else {
      this.document.documentElement.classList.remove(this.darkThemeClass);
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('theme', 'light');
      }
    }

  }
} 