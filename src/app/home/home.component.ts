import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: true
  }
   
    slides = [
      {id: "1", 
          img: "assets/img/hero-carousel/1.jpg" , 
          title:"IT PARTNER" ,
          desc:"Tout ce dont vous avez besoin pour faire évoluerng votre entreprise avec un partenaire de confiance." ,
          btn :'Espace Client',
          url :''
        },
      {
        id: "2", 
        img: "assets/img/hero-carousel/2.jpg",
        title:'IT PARTNER',
        desc:'Tout ce dont vous avez besoin pour faire évoluerng votre entreprise avec un partenaire de confiance.',
        btn:'Get Started',
        url:'about'
      },
      {
        id: "3", 
        img: "assets/img/hero-carousel/3.jpg",
        title:'IT PARTNER',
        desc:'Tout ce dont vous avez besoin pour faire évoluerng votre entreprise avec un partenaire de confiance.',
        btn:'Get Started',
        url:'about'
    },
    ];
}
