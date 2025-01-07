import { Component, Input, output, Output, OutputEmitterRef, signal } from '@angular/core';
import { EventEmitter } from 'stream';
import { ChildComponent } from "./child/child.component";
import { Zippy } from "./zippy/zippy.component";
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'blog-muck-about-area',
  imports: [ChildComponent, Zippy, NgOptimizedImage],
  templateUrl: './muck-about-area.component.html',
  styleUrl: './muck-about-area.component.css'
})
export class MuckAboutAreaComponent {
  @Input() occupation = '';
  hokkaidoImgUrl = "./assets/hokkaido.png"
  hokkaidoAlt = "Mountain range in Hokkaido"

  // Done with annotations
  addOne(one: number) {}
  uponOpen(event: any) {}
  uponClose(event: any) {}

  // Done with signals
  buttonLabel2 = output<string>();
}

