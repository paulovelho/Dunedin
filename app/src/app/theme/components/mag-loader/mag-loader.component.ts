import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'mag-loading',
  templateUrl: './mag-loader.component.html',
  styleUrls: ['./mag-loader.component.scss']
})
export class MagLoaderComponent {

	@Input() extraClass: string = "";
	// extra class:
	// inline, small, white

  constructor() { }

}
