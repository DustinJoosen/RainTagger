import { Injectable } from '@angular/core';
import {Guid} from "guid-typescript";
import { localstorage_key } from "../environment";

export interface Page {
	number: number;
	imageUri: string;
	characters: string[];
}

@Injectable({
  providedIn: 'root'
})
export class PageService {

	constructor() { }

	getPages() {
		let text = localStorage.getItem(localstorage_key);
		if (text == null) {
			localStorage.setItem(localstorage_key, "[]");
			text = "[]";
		}

		return JSON.parse(text) as Page[];
	}

	setPages(data: Page[]) {
		let json = JSON.stringify(data);
		localStorage.setItem(localstorage_key, json);
	}

	addPage(page: Page) {
		let pages = this.getPages();
		pages.push(page);
		this.setPages(pages);
	}

	findPage(pageNumber: number) {
		let pages = this.getPages();
		return pages.find(page => page.number == pageNumber);
	}

	setPage(page: Page) {
		let pages = this.getPages();
		let idx = pages.findIndex(pg => pg.number === page.number);
		pages[idx] = page;
		this.setPages(pages);
	}

	getImageUriFromPageNum(pageNumber: number) {
		return this.findPage(pageNumber)?.imageUri ?? null;
	}

	removePage(pageNumber: number) {
		let pages = this.getPages();
		pages = pages.filter(pg => pg.number !== pageNumber);
		this.setPages(pages);
	}
}
