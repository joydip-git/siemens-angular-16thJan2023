import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../models/post';

@Pipe({
  name: 'postFilter'
})
export class PostFilterPipe implements PipeTransform {

  constructor() { }
  transform(value: Post[], ...args: string[]) {
    return value && value.length > 0 && args && args[0] !== '' ?
      value.filter(
        (p: Post) => p.title.toLocaleLowerCase().indexOf(args[0].toLocaleLowerCase()) !== -1) : value;

  }
}