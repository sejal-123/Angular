import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dogs-list-card',
  imports: [RouterModule],
  templateUrl: './dogs-list-card.component.html',
  styleUrl: './dogs-list-card.component.css'
})
export class DogsListCardComponent {
  @Input() dog!: any;
  @Input() index!: Number;
}
