import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  
  value: string = '';
  @Output() searchBoutonClicked = new EventEmitter();
  searchClick() {
    this.searchBoutonClicked.emit();
  }

  constructor(){

  }
}
