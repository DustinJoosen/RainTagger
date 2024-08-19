import {AfterViewInit, Component, ElementRef, HostListener, Input, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";
import {PageService} from "../../../services/page.service";

@Component({
  selector: 'app-page-creator',
  standalone: true,
	imports: [
		MatFormField,
		MatLabel,
		MatInput,
		CommonModule,
		MatInputModule,
	],
  templateUrl: './page-creator.component.html',
  styleUrl: './page-creator.component.css',
encapsulation: ViewEncapsulation.None
})
export class PageCreatorComponent implements AfterViewInit {
	@ViewChild("image") myInputField?: ElementRef;

	@HostListener('window:keydown', ['$event'])
	handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			this.save();
		}
	}

	@Input()
	public pageNumber: number = 1;

	constructor(private page: PageService) {
	}

	ngAfterViewInit() {
	}

	save() {
		this.page.addPage({
			number: this.pageNumber,
			imageUri: this.myInputField?.nativeElement.value,
			characters: []
		});
	}
}

