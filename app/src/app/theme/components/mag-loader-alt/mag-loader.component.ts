import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'mag-loading-alt',
  templateUrl: './mag-loader.component.html',
  styleUrls: ['./mag-loader.component.scss']
})
export class MagLoaderAltComponent {

	@Input() extraClass: string = "";
	// extra class:
	// inline, small, white

  constructor() { }

}
