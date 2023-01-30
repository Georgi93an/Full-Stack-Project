import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: Array<any>,args:string|null=null,sort:string='asc'): any {
    if(args==null){
      return value;
    }
    else {
      const listTemp= value.sort((a,b)=>{
        if(a[args]<b[args]){
          return -1;
        }
        else if(a[args]>b[args]){
          return 1;
        }
        else if(a[args]===b[args]){
          return 0;
        }
        return 1;
      })
      return(sort==='asc')?listTemp:listTemp.reverse()
    }
  }

}
