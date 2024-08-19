import {Component, HostListener} from '@angular/core';
import {PageComponent} from "../page/page.component";
import {PageService} from "../../services/page.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CharacterGridComponent} from "../character-grid/character-grid.component";

@Component({
  selector: 'app-page-slider',
  standalone: true,
	imports: [
		PageComponent,
		CharacterGridComponent
	],
  templateUrl: './page-slider.component.html',
  styleUrl: './page-slider.component.css'
})
export class PageSliderComponent {
	public currentPage: number = 1;

	constructor(private page: PageService, private router: Router, private route: ActivatedRoute) {
	}

	@HostListener('window:keydown', ['$event'])
	handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'ArrowRight') {
			this.navigateTo((this.currentPage as number) + 1);
		} else if (event.key === 'ArrowLeft') {
			this.navigateTo((this.currentPage as number) - 1);
		}
	}

	navigateTo(pageNumber: number): void {
		this.router.navigate([`/${pageNumber}`]);
	}

	ngOnInit() {
		this.route.params.subscribe((params: any) => {
			this.currentPage = +params["pageNumber"];
			console.log(this.currentPage);
		});
	}
}
