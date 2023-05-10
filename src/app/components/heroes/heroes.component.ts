import { Component, Input, OnInit } from '@angular/core';
import { heroesService } from 'src/app/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  personagens: any;
  img!: any;
  img1!: any;
  heroi: any;

  constructor(private heroes: heroesService) {}

  public get() {
    this.heroes.get().subscribe((res) => {
      this.personagens = res;
      this.img = Array.from(this.personagens.data.results);
    });
  }

  ngOnInit(): void {}
}
