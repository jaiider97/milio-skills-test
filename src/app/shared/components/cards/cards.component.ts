import {Component, Input, ViewEncapsulation} from '@angular/core'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  cardList = [
    {
      title: 'Camisas',
      description: 'This is a description for Card 1',
      icon: 'bx-book-reader',
      color: 'primary',
      value:300
    },
    {
      title: 'Adidas',
      value:300
    },
    {
      title: 'Nike',
      value:300
    },
    {
      title: 'Correas',
      value:300
    },
    {
      title: 'Adidas',
      value:300
    },
    {
      title: 'Medias',
      value:300
    },
    {
      title: 'Balon',
      value:300
    },
    {
      title: 'Guantes',
      value:300
    },
  ]

  

  constructor() {}
}
