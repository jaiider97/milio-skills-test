import {Component} from '@angular/core'

@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrl: './common.layout.component.scss',
})
export class CommonLayoutComponent {
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
