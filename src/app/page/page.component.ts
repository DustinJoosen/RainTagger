import {Component, Input, OnInit} from '@angular/core';
import {PagePreviewComponent} from "./page-preview/page-preview.component";
import {PageService} from "../../services/page.service";
import {ActivatedRoute} from "@angular/router";
import {NgIf} from "@angular/common";
import {PageCreatorComponent} from "./page-creator/page-creator.component";

@Component({
  selector: 'app-page',
  standalone: true,
	imports: [
		PagePreviewComponent,
		NgIf,
		PageCreatorComponent
	],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent implements OnInit {

	@Input()
	public pageNumber: number = 1;

	constructor(private page: PageService) {
	}

	ngOnInit() {

	}

	get isPageCreated() {
		return this.page.findPage(this.pageNumber) != null;
	}
}
