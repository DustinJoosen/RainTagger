import {Component, HostListener, Input} from '@angular/core';
import {PageService} from "../../../services/page.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-page-preview',
  standalone: true,
  imports: [],
  templateUrl: './page-preview.component.html',
  styleUrl: './page-preview.component.css'
})
export class PagePreviewComponent {

	@Input()
	public pageNumber: number = 1;


	@HostListener('window:keydown', ['$event'])
	handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Delete') {
			this.router.navigate([`/${this.pageNumber}/delete`]);
		}
	}

	constructor(private page: PageService, private route: ActivatedRoute, private router: Router) {
	}

	get imageUri() {
		let uri = this.page.getImageUriFromPageNum(this.pageNumber);
		if (uri == null) {
			uri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUvFfPPOkbPc_TFDcRBsSysBhmgZWhLGtPw&s';
		}

		return uri;
	}

}
