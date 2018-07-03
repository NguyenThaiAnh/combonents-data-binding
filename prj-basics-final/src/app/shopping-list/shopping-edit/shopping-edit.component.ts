import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient }                                                     from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  /*
  * khai báo 2 biến nameInput, amountInput kiểu ViewChild dùng để lấy giá trị
  * */
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  // Khai báo biến này để bắn event ra bên component cha nhận và thêm vào mảng
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    /*
    * Lấy giá trị của 2 biến ở ngoài view
    * */
    const ingname = this.nameInput.nativeElement.value;
    const ingamount = this.amountInput.nativeElement.value;

    const newIngredient = new Ingredient(ingname, ingamount);
    this.ingredientAdded.emit(newIngredient);
  }
}
