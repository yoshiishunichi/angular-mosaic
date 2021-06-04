import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-after-image',
  templateUrl: './after-image.component.html',
  styleUrls: ['./after-image.component.scss']
})
export class AfterImageComponent implements OnInit {
  
  @Input() src: string | ArrayBuffer

  afterSrc = ""

  param = 2

  constructor() { }

  ngOnInit(): void {
    let size = 200
    let canvas = document.getElementById("canvas") as HTMLCanvasElement
    let ctx = canvas.getContext("2d")
    ctx.fillStyle = "green"
    ctx.fillRect(0,0,10,10)
    let img = new Image()
    img.src = this.src as string
    ctx.drawImage(img, 0,0, size, size)
    this.afterSrc = canvas.toDataURL()
  }
}
