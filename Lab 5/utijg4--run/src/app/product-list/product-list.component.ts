import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];

  incrementLikes(id: number) {
    products.filter(p => p.id === id).map(p => p.likes += 1)
  }

  share(url: string) {
    window.open(url, "_blank");
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }


}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/