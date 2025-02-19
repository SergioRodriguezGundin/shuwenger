import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-dashboard-layout',
  imports: [CommonModule, RouterModule, HlmButtonDirective],
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLayoutComponent {
  protected readonly themeService = inject(ThemeService);
  protected readonly isDarkMode = this.themeService.isDarkMode$;
}
