import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
})
export class SearchBoxComponent {
  @Input()
  public placeholderText: string = '';

  @Output()
  public onChange = new EventEmitter<string>()

  emitValue(value:string):void{
    this.onChange.emit(value)
  }
}
