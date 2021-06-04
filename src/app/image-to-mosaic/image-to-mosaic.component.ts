import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-to-mosaic',
  templateUrl: './image-to-mosaic.component.html',
  styleUrls: ['./image-to-mosaic.component.scss']
})
export class ImageToMosaicComponent implements OnInit {

  @Input() src: string | ArrayBuffer
  
  constructor() { }

  ngOnInit(): void {
  }

}
