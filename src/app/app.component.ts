import { Component, computed, effect, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PlayingCardComponent } from "./components/playing-card/playing-card.component";
import { Monster } from './models/monster.model';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { MonsterType } from './utils/monster.utils';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayingCardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'playing-cards';
  count: number = 0;
  selectedMonsterIndex = signal(1);
  selectedMonster = computed(()=> {
    return this.monsters[this.selectedMonsterIndex()];
  });



  monsters!: Monster[];
  constructor(){
    effect(()=> {
      console.log(this.selectedMonster());
    })


    this.monsters = [];
    const monster1 = new Monster();
    monster1.name = "Pik";
    monster1.image = "assets/img/P2.png";
    monster1.type = MonsterType.ELECTRIC;
    monster1.hp = 30;
    monster1.figureCaption = "N° 002 Pik";
  
    this.monsters.push(monster1);

    const monster2 = new Monster();
    monster2.name = "Car";
    monster2.image = "assets/img/P3.png";
    monster2.type = MonsterType.WATER;
    monster2.hp = 60;
    monster2.figureCaption = "N° 002 Car";
    
    this.monsters.push(monster2);
  }
  increaseCount(){
    this.count++;
  }
  toggleMonster(){
    this.selectedMonsterIndex.set((this.selectedMonsterIndex() + 1) % this.monsters.length);
  }
}
