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

  constructor(){}

  onChangeFileInput(event: any){

    if (event.target.files.length === 0){
      this.file = null;
      this.imgSrc = ""
      return;
    }

    let render = new FileReader();
    this.file = event.target.files[0]
    render.onload = () => {
      this.imgSrc = render.result
    }
    render.readAsDataURL(this.file)
  }
}
