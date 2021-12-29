import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
public data=[];
  constructor() {}
ionViewWillEnter(){
this.data=[{

    name: 'pic',
    src:'https://images.pexels.com/photos/1485630/pexels-photo-1485630.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },

  {

    name: 'pic',
    src:'https://images.pexels.com/photos/350784/pexels-photo-350784.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
  },{

    name: 'pic',
    src:'https://images.unsplash.com/photo-1568022858251-cab30daeb996?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1925&q=80'
  },{

    name: 'pic',
    src:'https://images.unsplash.com/photo-1508180588132-ec6ec3d73b3f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
  },{

    name: 'pic',
    src:'https://images.pexels.com/photos/208674/pexels-photo-208674.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
  },{

    nam3: 'pic',
    src:'https://images.pexels.com/photos/2402926/pexels-photo-2402926.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
  },
  {

    name: 'pic',
    src:'https://media.istockphoto.com/photos/history-typed-on-an-vintage-typewriter-old-paper-picture-id1159049987?s=612x612'
  },{

    name: 'pic',
    src:'https://images.pexels.com/photos/36006/renaissance-schallaburg-figures-facade.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },{

    name: 'pic',
    src:'https://images.pexels.com/photos/697662/pexels-photo-697662.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
  },{

    nam3: 'pic',
    src:'https://images.pexels.com/photos/672630/pexels-photo-672630.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
  },
   {

     name: 'pic',
     src:'https://images.unsplash.com/photo-1601182269298-bff90988d6ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80'
   },

   {

     name: 'pic',
     src:'https://images.pexels.com/photos/161959/prehistoric-times-urtier-museum-exhibit-161959.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
   },
   {

     name: 'pic',
     src:'https://images.unsplash.com/photo-1575223970966-76ae61ee7838?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
   },
   {

     name: 'pic',
     src:'https://images.pexels.com/photos/3933541/pexels-photo-3933541.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
   },
 
];
}
}