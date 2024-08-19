import {Component, Input} from '@angular/core';
import {CharacterComponent} from "./character/character.component";
import {NgForOf} from "@angular/common";
import {Page, PageService} from "../../services/page.service";

@Component({
  selector: 'app-character-grid',
  standalone: true,
	imports: [
		CharacterComponent,
		NgForOf
	],
  templateUrl: './character-grid.component.html',
  styleUrl: './character-grid.component.css'
})
export class CharacterGridComponent {

	@Input()
	public pageNumber: number = 1;

	constructor(private page: PageService) {
	}

	ngOnInit() {

	}

	public characters: string[] = [
		'rain',
		'emily',
		'maria',
		'chanel',
		'rudy',
		'ryan',
		'gavin',
		'ana',
		'ky',
		'allison',
		'fara',
		'vincent',
		'blair',
		'isaac',
		'debbie',
		'holly',
		'heather',
		'jessica',
		'kellen',
		'aiken',
		'devon',
		'drew',
		'robert',
		'randy',
	];

	toggleCharacter(char: string) {
		let page = this.page.findPage(this.pageNumber);
		if (page == null) {
			return;
		}

		if (this.characterIncluded(char)) {
			page.characters = page.characters.filter(c => c !== char);
		} else {
			page.characters.push(char);
		}

		this.page.setPage(page);
	}

	characterIncluded(char: string) {
		let page = this.page.findPage(this.pageNumber);
		if (page == null) {
			return;
		}

		return page.characters.includes(char);
	}
}
