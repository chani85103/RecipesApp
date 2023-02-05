import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stars'
})
export class StarsPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    var ans=""
    for (let index = 0; index < value; index++) {
     ans+='*'
    }
    return ans;
  }

}
