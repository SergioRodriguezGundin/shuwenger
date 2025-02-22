import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideCalendar,
  lucideCar,
  lucideHouse,
  lucideSettings,
  lucideUser,
} from '@ng-icons/lucide';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-side-menu',
  templateUrl: './sideMenu.component.html',
  imports: [NgIcon, RouterLink, RouterLinkActive],
  providers: [
    provideIcons({
      lucideCalendar,
      lucideHouse,
      lucideCar,
      lucideUser,
      lucideSettings,
    }),
  ],
})
export class SideMenuComponent {
  protected readonly router = inject(Router);
  protected readonly route = inject(ActivatedRoute);
}
