import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-list',
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.scss']
})
export class CustomListComponent {
  items: string[] = ['Item 1', 'Item 2', 'Item 3']; // Initial list items

  addItem(): void {
    this.items.push(this.value);
  }

  @Input() width: string = '200px'
  value: string = null;
  isOpen: boolean = false;

  selectedItems: string[] = [];

  toggleItem(item: string): void {
    // Check if the item is already in the selectedItems array
    const index = this.selectedItems.indexOf(item);

    if (index === -1) {
      // If not, add it
      this.selectedItems.push(item);
    } else {
      // If it's already in the array, remove it
      this.selectedItems.splice(index, 1);
    }
  }
}
