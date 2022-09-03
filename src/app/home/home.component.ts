import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, 
DoCheck, OnDestroy  {

 cani = [
  {nome: 'shiro', razza: 'meticcio',
  descrizione: 'nero e bellissimo'}
 ];

 persone = [
  {nome: 'pippo', tipo: 'smart',
descrizione: 'simpatico e zelante', hobbies: ['calcio','pittura','televisione']}
 ];


  constructor() {
    console.log("costruttore");
   }
  ngAfterContentChecked(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterContentInit(): void {
      throw new Error('metodo errato');
  }

  ngDoCheck(): void {
    console.log("costruttore"); 
  }

  ngOnDestroy(): void {
      
    console.log("costruttore");
  }

  ngAfterViewChecked(): void {
    console.log("costruttore");
  }

  ngAfterViewInit(): void {
    console.log("costruttore");
  }


  ngOnInit(): void {
    console.log("ngOnInit");
  }

}
