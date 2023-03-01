import { Component } from '@angular/core';
import { Product } from '../products';
import { DELETEDITEMS } from 'src/globals';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  currentCategory!: string; 

  products = [...products];

  incLikes = (itemId : number) => {
    const updatedItemsList = this.products.map((product) => {
      if(itemId === product.id){
        return {...product, likes: product.likes + 1}
      }else{
        return product;
      }
    })
    this.products = updatedItemsList;
    console.log(this.currentCategory)
  }

  deleteItem = (item: Product) => {
    DELETEDITEMS.push(item)
    const updatedItemsList = this.products.filter((product) => {
      if (DELETEDITEMS.includes(product)) {
        return false
      }
      else 
        return true
    })
    this.products = updatedItemsList;
  }

  share(url: string) {
    window.open(url, "_blank");
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  setCategory(category: string) {
    this.currentCategory = category

    const updatedItemsList = products.filter((product) => {
      if (product.category === this.currentCategory) {
        return true
      }
      else 
        return false
    })
    this.products = updatedItemsList;
  }

}