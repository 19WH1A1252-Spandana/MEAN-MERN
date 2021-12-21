import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:any;
  constructor() { }

  ngOnInit(): void {
    this.products = [{id :1,name : 'BonSai Plants',description:'Ficus Bonsai - Plant',price:699,imagePath:'assets/Plant1.jpeg'},
    {id :2,name : 'BonSai Plants',description:'Jade Bonsai - Plant',price:1399,imagePath:'assets/Plant2.jpeg'},
    {id :3,name : 'BonSai Plants',description:'Ficus microcarpa Bonsai- Plant',price:1749,imagePath:'assets/Plant3.jpeg'},
    {id :4,name : 'BonSai Plants',description:'Buxus Bonsai - Plant',price:3049,imagePath:'assets/Plant4.jpeg'},
    {id :5,name : 'BonSai Plants',description:'Ficus Bonsai Vertical Braided Arrangement - Plant',price:9399,imagePath:'assets/Plant5.jpeg'},
    {id :6,name : 'BonSai Plants',description:'Jade Bonsai Formal Upright Style - Plant',price:15999,imagePath:'assets/Plant6.jpeg'}];
  }

}
