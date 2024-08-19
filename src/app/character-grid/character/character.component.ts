import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {

	@Input({required: true})
	public name: string = 'rain';
}
