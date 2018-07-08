import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { Ingredient }                                             from '../../shared/ingredient.model';
import { ShoppingListService }                                    from '../shopping-list.service';

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


  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  onAddItem() {
    /*
    * Lấy giá trị của 2 biến ở ngoài view
    * */
    const ingname = this.nameInput.nativeElement.value;
    const ingamount = this.amountInput.nativeElement.value;

    const newIngredient = new Ingredient(ingname, ingamount);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
