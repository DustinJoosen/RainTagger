import { Routes } from '@angular/router';
import {PagePreviewComponent} from "./page/page-preview/page-preview.component";
import {PageComponent} from "./page/page.component";
import {PageSliderComponent} from "./page-slider/page-slider.component";
import {PageDeleteComponent} from "./page-delete/page-delete.component";

export const routes: Routes = [
	{
		path: ':pageNumber',
		component: PageSliderComponent
	},
	{
		path: ':pageNumber/delete',
		component: PageDeleteComponent
	}
];
