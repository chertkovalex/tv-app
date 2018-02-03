import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchText'
})
export class SearchTextPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
