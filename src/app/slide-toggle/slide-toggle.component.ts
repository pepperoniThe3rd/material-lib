import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss']
})
export class SlideToggleComponent {

  // Slider change event
  @Output() onSliderChange= new EventEmitter<boolean>();

  onChange(value){
    this.onSliderChange.emit(value)
  }
}
