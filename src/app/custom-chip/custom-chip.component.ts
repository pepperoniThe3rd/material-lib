import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-chip',
  templateUrl: './custom-chip.component.html',
  styleUrls: ['./custom-chip.component.scss']
})
export class CustomChipComponent {
  @Input()  basicChipTemplate: any;
  @Input()  groupChipTemplateOne: any;
  @Input()  groupChipTemplateTwo: any;
  @Input()  sufixIcon: string;
  @Input()  prefixIcon: string;
  @Input()  chipText: string;
  @Input()  chipLabel: string;

  @Input() chipType: string= 'secondary';
  @Input() primaryChipType: string= 'round';
  @Input() primaryChipAction: string= 'cancel';
  @Input() secondaryChipColor:string = 'primary';
}
