import { Component, Input, OnInit } from '@angular/core';
import Layer from 'src/models/layer';

@Component({
  selector: 'app-one-layer',
  templateUrl: './one-layer.component.html',
  styleUrls: ['./one-layer.component.scss']
})
export class OneLayerComponent implements OnInit {

  constructor() { }
@Input() 
layer:Layer
  ngOnInit(): void {
  }

}
