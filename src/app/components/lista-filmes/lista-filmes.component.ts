import { Component, OnInit, signal } from '@angular/core';
import { FilmesService } from '../../services/filmes.service';
import { Filme } from '../../models/filme';
import { FilmeComponent } from '../filme/filme.component';

@Component({
  selector: 'app-lista-filmes',
  imports: [FilmeComponent],
  templateUrl: './lista-filmes.component.html',
  styleUrl: './lista-filmes.component.scss'
})
export class ListaFilmesComponent implements OnInit {
  filmes = signal<Filme[]>([]);
   
  constructor(private filmesService: FilmesService){}
  
  ngOnInit(): void {
    this.filmesService.getFilmes().subscribe(response => {
      this.filmes.set(response);
    });
  }
}
