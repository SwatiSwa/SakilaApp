import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector    : 'home',
  templateUrl : 'public/ts/home/home.component.html',
  styleUrls   : ['public/ts/home/home.component.css'],
  providers   : [HomeService]
})

export class HomeComponent implements OnInit {
  actors:any;
  
  constructor(private homeService: HomeService) { }

  ngOnInit() { 
    this.homeService.getActors().then( actors => {
        this.actors = actors;
    });
  }
}