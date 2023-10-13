import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-custom-accordian',
  templateUrl: './custom-accordian.component.html',
  styleUrls: ['./custom-accordian.component.scss']
})
export class CustomAccordianComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  // Accordian Title
  @Input() accordianTitle: string = "Example";

  // Accordian Description
  @Input() accordianDescription: string;

  // Accordian Toggle button
  @Input() toggleButton: boolean = false;

  // Accordian Delete button
  @Input() deleteButton: boolean = false;

  // Accordian Expanded content
  @Input() accordianContent: any;

  // Accordian Footer content
  @Input() accordianFooter: any;

  @Output() onDelete = new EventEmitter<any>();

  onDeleteBtn() {
    this.onDelete.emit();
  }
  @Output() onToggle = new EventEmitter<any>();

  onToggleBtn() {
    this.onToggle.emit();
  }

}
