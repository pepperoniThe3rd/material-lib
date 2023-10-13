import { Component, Input, ContentChild, TemplateRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent {
  // Button Text
  @Input() buttonText: string = 'Example';

  // Button Active types 1, 2, 3
  @Input() activeType: string = '1';

  // Type - dark, light
  @Input() flatType: string = 'dark';

  // Type - stroke, flat, basic
  @Input() buttonType: string = '';

  // Custom Sufix Template
  @Input() sufixTemplate: any;

  // Custom Prefix Template
  @Input() prefixTemplate: any;

  // Custom Sufix Icon
  @Input() sufixIcon: string;

  // Custom Prefix Icon
  @Input() prefixIcon: string;

  @Output() buttonClicked = new EventEmitter<void>();
  isActive: boolean = false;
  onClick() {
    this.isActive = !this.isActive;
    this.buttonClicked.emit();
  }
}
