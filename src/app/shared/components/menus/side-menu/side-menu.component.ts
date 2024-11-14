import {Component, OnInit} from '@angular/core'
import {SideMenuModel} from '../../../../../shared/model/side-menu'

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent implements OnInit {
  content: Array<SideMenuModel> = [
    {
      title: 'Dashboards',
      icon: 'bx-home-smile',
      submenu: [
        {
          title: 'Analytics',
          uri: '/analytics',
        },
        {
          title: 'Logistics',
          uri: '/logistics',
        },
        {
          title: 'CMR',
          uri: '/cmr',
        },
      ],
    },
    {
      title: 'Email',
      uri: '/email',
      icon: 'bx-envelope',
    },
    {
      title: 'Chat',
      uri: '/chat',
      icon: 'bx-chat',
    },
    {
      title: 'Calendar',
      uri: '/calendar',
      icon: 'bx-calendar',
    },
    {
      title: 'Kanban',
      uri: '/kanban',
      icon: 'bx-grid',
    },
    {
      title: 'Front Pages',
      icon: 'bx-store',
      submenu: [
        {
          title: 'Landing',
          uri: '/landing',
        },
        {
          title: 'Princing',
          uri: '/pricing',
        },
        {
          title: 'Payment',
          uri: '/payment',
        },
        {
          title: 'Checkout',
          uri: '/checkout',
        },
        {
          title: 'Help Center',
          uri: '/help-center',
        },
      ],
    }
  ]

  constructor() {}
  ngOnInit() {}

  trackByTitle(index: number, item: SideMenuModel): string {
    return item.title
  }
}
