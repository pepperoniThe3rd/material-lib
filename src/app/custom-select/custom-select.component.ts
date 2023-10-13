import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent {

  @Input() selectPlaceholder: string = 'Select...';

  isMultiple = true;
  formCtrl = new FormControl([]);
  filteredItems: Observable<string[]>;
  selectedItems: string[] = ['Lemon'];
  allOptions: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('itemInput') itemInput: ElementRef<HTMLInputElement>;

  constructor() { }

  remove(item: string): void {
    const selectedItems = this.formCtrl.value as string[];
    this.removeFirst(selectedItems, item);
    this.formCtrl.setValue(selectedItems);

  }

  private removeFirst(array, toRemove): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

}
