import { Pipe, PipeTransform } from '@angular/core';
import {Pet} from "./model/Pet";

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(items: Pet[], searchText: string): any[] {
    if (searchText === undefined) {
      return items;
    }
    return items.filter(items => items.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
  }

}
