import { Component, input } from '@angular/core';
import { Filme } from '../../models/filme';

@Component({
  selector: 'app-filme',
  imports: [],
  templateUrl: './filme.component.html',
  styleUrl: './filme.component.scss'
})
export class FilmeComponent {
  filme = input.required<Filme>();
}
