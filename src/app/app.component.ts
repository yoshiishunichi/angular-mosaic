import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-mosaic';

  file: File = null
  imgSrc: string | ArrayBuffer = "";

  alert = false
  isMosaic = false
  constructor(){}

  onChangeFileInput(event: any){
    this.isMosaic = false
    if (event.target.files.length === 0){
      this.file = null;
      this.imgSrc = ""
      return;
    }
    
    this.alert = false
    let render = new FileReader();
    this.file = event.target.files[0]
    render.onload = () => {
      this.imgSrc = render.result
    }
    render.readAsDataURL(this.file)
  }
  mozsaic(){
    if (this.imgSrc){
      this.isMosaic = true
    }
    else{
      this.alert = true
      this.isMosaic = false
    }
    console.log(this.isMosaic)
  }
  reset(){
    this.imgSrc = ""
    this.alert = false
    this.isMosaic = false
    console.log(this.isMosaic)
  }
}
