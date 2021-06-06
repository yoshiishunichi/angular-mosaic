import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-mosaic';

  file: File = null
  imgSrc: string | ArrayBuffer = "";

  intensity = 0
  divisors = [1, 2, 4, 5, 8, 10, 20, 25, 40, 50, 100, 200]
  alert = false
  isMosaic = false
  constructor(){}
  
  ngOnInit(){
    let slider = document.getElementById("input-range") as HTMLInputElement
    this.intensity = this.divisors[Number(slider.value) - 1]
  }

  onChangeSlider(){
    let slider = document.getElementById("input-range") as HTMLInputElement
    this.intensity = this.divisors[Number(slider.value) - 1]
  }

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
    let slider = document.getElementById("input-range") as HTMLInputElement
    slider.value = "6"
  }
}
