import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-after-image',
  templateUrl: './after-image.component.html',
  styleUrls: ['./after-image.component.scss']
})
export class AfterImageComponent implements OnInit {
  
  @Input() src: string | ArrayBuffer
  @Input() intensity: number

  afterSrc = ""

  param = 2

  constructor() { }

  ngOnChanges(changes:SimpleChanges){
    this.setMosaic()
  }

  ngOnInit(): void {
    this.setMosaic()
  }

  setMosaic(){
    let size = 200
    let canvas = document.getElementById(`canvas`) as HTMLCanvasElement
    let ctx = canvas.getContext("2d")

    let mosaicCanvas = document.getElementById("mosaic-canvas") as HTMLCanvasElement
    let mosaicCtx = mosaicCanvas.getContext("2d")

    let img = new Image()
    img.src = this.src as string
    let imgWidth = img.width
    let imgHeight = img.height

    if (imgWidth > imgHeight){
      ctx.drawImage(img, (imgWidth-imgHeight)/2,0, imgHeight, imgHeight, 0, 0, size, size)
    }

    else {
      ctx.drawImage(img, 0, (imgHeight-imgWidth)/2, imgWidth, imgWidth, 0, 0, size, size)
    }

    if (this.intensity > 1){
      for (let x=0; x<size; x+=this.intensity){
        for (let y=0; y<size; y+=this.intensity){
          let imageData = ctx.getImageData(x,y,1,1)
          let r = imageData.data[0]
          let g = imageData.data[1]
          let b = imageData.data[2]
          let a = imageData.data[3]
          mosaicCtx.fillStyle = "rgba(" + String(r) + "," + String(g) + "," + String(b) + "," + String(a) + ")"
          mosaicCtx.fillRect(x,y,this.intensity,this.intensity)
        }
      }
    }
    else{
      if (imgWidth > imgHeight){
        mosaicCtx.drawImage(img, (imgWidth-imgHeight)/2,0, imgHeight, imgHeight, 0, 0, size, size)
      }
  
      else {
        mosaicCtx.drawImage(img, 0, (imgHeight-imgWidth)/2, imgWidth, imgWidth, 0, 0, size, size)
      }
    }
    this.afterSrc = mosaicCanvas.toDataURL()
  }
}
