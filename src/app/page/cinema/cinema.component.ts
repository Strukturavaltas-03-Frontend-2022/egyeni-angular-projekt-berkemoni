import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cinema } from 'src/app/model/cinema';
import { CinemaService } from 'src/app/service/cinema.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {

  cinemaList$: Observable<Cinema[]> = this.cinemaService.getAll();

  constructor(
    private cinemaService: CinemaService,
  ) { }
    
  ngOnInit(): void {
  }

}
