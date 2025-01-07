import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'spacedtext',
})
export class SpacedText implements PipeTransform {
  transform(value: string): string {
    return value.split("").join(" ");
  }
}