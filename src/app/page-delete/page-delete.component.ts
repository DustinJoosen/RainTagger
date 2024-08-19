import {Component, OnInit} from '@angular/core';
import {PageService} from "../../services/page.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-page-delete',
  standalone: true,
  imports: [],
  template: '<p>You will be automatically redirected</p>'
})
export class PageDeleteComponent implements OnInit {

	constructor(private page: PageService, private router: Router, private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.route.params.subscribe((params: any) => {
			let pageNumber = +params["pageNumber"];

			this.page.removePage(pageNumber);
			this.router.navigate([`/${pageNumber}`]);
		});
	}
}
