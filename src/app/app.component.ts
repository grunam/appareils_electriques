import { Component, OnInit, OnDestroy } from '@angular/core';
//import { AppareilService } from './services/appareil.service';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';

//import { Subscription } from 'rxjs-compat/subscription';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  
  //constructor() { }

  secondes : number;
  counterSubscription: Subscription;  

  ngOnInit() {
    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );
  }
  
  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
  
  
  /*
  isAuth = false;
  
  
  appareils: any[];
  
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  
  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  
  ngOnInit() {
    this.appareils = this.appareilService.appareils;
}

  onAllumer() {
    this.appareilService.switchOnAll();
  }
  
  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }
  */
}
