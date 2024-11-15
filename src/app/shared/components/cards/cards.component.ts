import {Component, Input, ViewEncapsulation} from '@angular/core'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  cardList = [
    {
      title: 'Card 1',
      description: 'This is a description for Card 1',
      icon: 'bx-book-reader',
      color: 'primary',
    },
    {
      title: 'Card 2',
    },
    {
      title: 'Card 3',
    },
    {
      title: 'Card 4',
    },
    {
      title: 'Card 5',
    },
    {
      title: 'Card 6',
    },
  ]

  constructor() {}
}
