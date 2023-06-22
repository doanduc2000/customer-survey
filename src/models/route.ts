export interface Menu {
  name: string;
  path: string;
  dropdown: Dropdown[];
}
export interface Dropdown {
  name: string;
  path: string;
}
