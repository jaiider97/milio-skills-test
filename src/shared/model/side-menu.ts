
interface SubMenu {
  title: string,
  uri?: string,
}


export interface SideMenuModel {
  title: string,
  icon?: string,
  uri?: string,
  submenu?: Array<SubMenu>,
}
