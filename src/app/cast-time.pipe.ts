import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'castTime'
})
export class CastTimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    var ans=""
   if(value>60)
   ans+=Math.round(value/60)+" hours "+' : ';
  ans+=value%60 +" minutes "
    return ans;
  }

}
