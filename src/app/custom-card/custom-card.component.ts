import { Component, Input, ContentChild, TemplateRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss']
})
export class CustomCardComponent {

  @Input() customWidth:string='300px'
  @Input() cardButtonText:string=null;
  @Input() cardFooterTemplate: TemplateRef<any>;
  @Input() cardMenuTemplate: TemplateRef<any>;
  @Input() cardIconTemplate: TemplateRef<any>;
  @Output() cardClicked= new EventEmitter<boolean>();

  // If button text is null, then card active functionality enables
  isCardActive:boolean=false;
  cardClick(){
    this.isCardActive=!this.isCardActive;
    this.cardClicked.emit(this.isCardActive);
  }
}
