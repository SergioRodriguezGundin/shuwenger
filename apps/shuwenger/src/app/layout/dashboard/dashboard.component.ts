import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';
import { SideMenuComponent } from '../../features/dashboard/components/side-menu/sideMenu.component';

@Component({
  selector: 'app-dashboard-layout',
  imports: [CommonModule, RouterModule, SideMenuComponent],
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLayoutComponent {
  protected readonly themeService = inject(ThemeService);
  protected readonly isDarkMode = this.themeService.isDarkMode$;
}
