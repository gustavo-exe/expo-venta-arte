import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from '../data.types';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  artistDetail!:UserProfile;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ){

    this.route.paramMap
    .subscribe(params => {
      this.artistDetail = this.dataService.getById(params.get('id') ?? '')[0];
    });

    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });

  }


}
