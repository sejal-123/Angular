import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Dog, DogsService } from '../dogs.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dog-view',
  imports: [CommonModule],
  templateUrl: './dog-view.component.html',
  styleUrl: './dog-view.component.css',
  standalone: true
})
export class DogViewComponent implements OnInit {
  dog$!: Observable<Dog | undefined>;

  constructor(readonly dogService: DogsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.dog$ = this.route.paramMap.pipe(map(param => {
      console.log(this.dogService.dogs[Number(param.get('index'))])
      return this.dogService.dogs[Number(param.get('index'))];
    }));
  }
}
