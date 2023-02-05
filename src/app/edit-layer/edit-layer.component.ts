import { Component, Input, OnInit } from '@angular/core';
import Layer from 'src/models/layer';

@Component({
  selector: 'app-edit-layer',
  templateUrl: './edit-layer.component.html',
  styleUrls: ['./edit-layer.component.scss']
})
export class EditLayerComponent implements OnInit {

  constructor() { }
@Input()
layer:Layer
  ngOnInit(): void {
  }

}
