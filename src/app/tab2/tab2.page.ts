import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
public data=[];
  constructor() {}
  ionViewWillEnter(){
    this.data=[{

        name: 'Brooklyn Museum',
        src:'https://images.pexels.com/photos/1485630/pexels-photo-1485630.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info:"In the early 1930s, wealthy New York businessman Colonel Michael Friedsam kindly bequeathed over 900 artworks and artefacts to the Brooklyn Museum"
      },{

        name: 'Schallaburg Castle',
       src:'https://images.pexels.com/photos/208674/pexels-photo-208674.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
       info:"In 1242, the castle appears in a document for the first time mentioned as fortress Schala. From the 13th to the 15th century the castle was owned by the lords of Jelqing (German: von Milking). From 1456 until 1614, castle Salzburg was in the possession of the family von Losenstein. In the 16th century Hans Wilhelm von Losenstein renovated it into a Renaissance style, and rebuilt the church of Loosdorf into a Renaissance Lutheran church."
      },{

        name: 'monalisa',
        src:'https://images.unsplash.com/photo-1568022858251-cab30daeb996?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1925&q=80',
        info:"The Mona Lisa is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world. The painting's novel qualities include the subject's enigmatic expression, the monumentality of the composition, the subtle modelling of forms, and the atmospheric illusionism."
      },{

        name: 'Dianasour Skeletan',
        src:'https://images.unsplash.com/photo-1508180588132-ec6ec3d73b3f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
        info:"The London cast of Dippy is a plaster cast replica of the fossilised bones of a Diplodocus carnegii skeleton, the original of which – also known as Dippy – is on display at Pittsburgh's Carnegie Museum of Natural History. The 21.3-metre (70 ft) long cast was displayed between 1905 and 2017 in the Natural History Museum in London, becoming an iconic representation of the museum. It began a national tour of British museums in February 2018."
      },{

        name: 'Egyptian Mummy',
        src:'https://images.unsplash.com/photo-1601182269298-bff90988d6ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80',
        info:"A mummy is a dead human or an animal whose soft tissues and organs have been preserved by either intentional or accidental exposure to chemicals, extreme cold, very low humidity, or lack of air, so that the recovered body does not decay further if kept in cool and dry conditions. Some authorities restrict the use of the term to bodies deliberately embalmed with chemicals, but the use of the word to cover accidentally desiccated bodies goes back to at least 1615 AD."
      },{

        name: 'Museo Canova',
        src:'https://images.unsplash.com/photo-1575223970966-76ae61ee7838?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
        info:"The Museo Canova is a museum established in 1833 at the birthplace of the Italian sculptor Antonio Canova (1757-1822) in Possagno in the province of Treviso in the Veneto, Italy. The museum is dedicated to the life and work of the sculptor and is composed of several parts."
      }];
    }
}