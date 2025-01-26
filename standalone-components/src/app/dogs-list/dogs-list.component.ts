import { Component } from '@angular/core';
import { DogsService } from '../dogs.service';
import { DogsListCardComponent } from '../dogs-list-card/dogs-list-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dogs-list',
  imports: [DogsListCardComponent, CommonModule],
  templateUrl: './dogs-list.component.html',
  styleUrl: './dogs-list.component.css',
  standalone: true
})
export class DogsListComponent {
  constructor(readonly dogService: DogsService) {
    console.log(dogService.dogs);
  }
}
