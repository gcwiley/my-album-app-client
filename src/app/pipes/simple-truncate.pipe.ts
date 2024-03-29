import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'simpletruncate' })
export class SimpleTruncatePipe implements PipeTransform {
  transform(value: string) {
    return value.split(' ').slice(0, 2).join(' ') + '...';
  }
}
