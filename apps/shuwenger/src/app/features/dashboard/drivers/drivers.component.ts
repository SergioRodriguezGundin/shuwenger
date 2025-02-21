import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  imports: [],
})
export class DriversComponent {}
