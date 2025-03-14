import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-side-menu',
  templateUrl: './sideMenu.component.html',
  //imports: [RouterLink, RouterLinkActive],
})
export class SideMenuComponent {
  protected readonly router = inject(Router);
  protected readonly route = inject(ActivatedRoute);
}
