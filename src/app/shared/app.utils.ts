import { IAgency } from "./models/agency";

const keyLS = 'keyData'
export default class Utils {
 
  static getItemLocalStorage(): any {
    return localStorage.getItem(keyLS);
  }

  static setDataLocalStorage(data: IAgency[]): any {
    localStorage.setItem(keyLS, JSON.stringify(data));

  }

  static removeItemLocalStorage(): any {
    return localStorage.removeItem(keyLS);
  }
}
