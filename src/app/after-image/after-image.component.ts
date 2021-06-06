import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-after-image',
  templateUrl: './after-image.component.html',
  styleUrls: ['./after-image.component.scss']
})
export class AfterImageComponent implements OnInit {
  
  @Input() src: string | ArrayBuffer
  @Input() concentration: number

  afterSrc = ""

  param = 2

  constructor() { }

  ngOnChanges(changes:SimpleChanges){
    console.log(changes["concentration"].currentValue)
    this.setMosaic()
  }

  ngOnInit(): void {
    this.setMosaic()
  }

  setMosaic(){
    let size = 200
    let canvas = document.getElementById(`canvas`) as HTMLCanvasElement
    console.log(canvas)
    let ctx = canvas.getContext("2d")

    let mosaicCanvas = document.getElementById("mosaic-canvas") as HTMLCanvasElement
    let mosaicCtx = mosaicCanvas.getContext("2d")

    let img = new Image()
    img.src = this.src as string
    ctx.drawImage(img, 0,0, size, size)

    for (let x=0; x<size; x+=this.concentration){
      for (let y=0; y<size; y+=this.concentration){
        let imageData = ctx.getImageData(x,y,1,1)
        let r = imageData.data[0]
        let g = imageData.data[1]
        let b = imageData.data[2]
        let a = imageData.data[3]
        mosaicCtx.fillStyle = "rgb(" + String(r) + "," + String(g) + "," + String(b) + ")"
        mosaicCtx.fillRect(x,y,this.concentration,this.concentration)
      }
    }
    this.afterSrc = mosaicCanvas.toDataURL()
  }
}
