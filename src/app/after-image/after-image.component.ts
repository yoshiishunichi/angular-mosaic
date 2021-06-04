import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-after-image',
  templateUrl: './after-image.component.html',
  styleUrls: ['./after-image.component.scss']
})
export class AfterImageComponent implements OnInit {
  
  @Input() src: string | ArrayBuffer

  constructor() { }

  ngOnInit(): void {
  }

}
