import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideCalendar,
  lucideCar,
  lucideHouse,
  lucideUser,
} from '@ng-icons/lucide';
import { BrnCommandImports } from '@spartan-ng/brain/command';
import { HlmCommandImports } from '@spartan-ng/ui-command-helm';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-side-menu',
  templateUrl: './sideMenu.component.html',
  imports: [HlmCommandImports, BrnCommandImports, NgIcon],
  providers: [
    provideIcons({ lucideCalendar, lucideHouse, lucideCar, lucideUser }),
  ],
})
export class SideMenuComponent {
  protected readonly router = inject(Router);
  protected readonly route = inject(ActivatedRoute);
  navigateTo(route: string) {
    this.router.navigate([route], { relativeTo: this.route });
  }
}
