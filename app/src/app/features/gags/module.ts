import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './routes';

import { GagsComponent } from './components/gags.component';
import { GagItemComponent } from './components/gag-item/gag-item.component';
import { GagListComponent } from './components/gag-list/gag-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

import { GagsService } from './service';

import { SharedModule } from '@app/shared.module';

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		SharedModule,
	],
	declarations: [
		GagsComponent,
		GagItemComponent,
		GagListComponent,
		SearchBarComponent,
	],
	providers: [
		GagsService,
	]
})
export class GagsModule { }
