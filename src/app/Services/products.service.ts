import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productsList: Iproduct[];

  constructor() {
    this.productsList = [
      {
        id: 1,
        name: 'Meadow Wooden Top Coffee Table',
        quantity: 0,
        price: 1200,
        categoryID: 1,
        Material: 'Wood',
        PrdImgURL:
          'https://media.homecentre.com/i/homecentre/163906877-163906877-HC13042022_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',

details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis quasi assumenda nisi, consectetur quo nihil provident rem libero laborum dolore explicabo nobis ipsam non adipisci blanditiis mollitia reiciendis? Ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis quasi assumenda nisi, consectetur quo nihil provident rem libero laborum dolore explicabo nobis ipsam non adipisci blanditiis mollitia reiciendis? Ad!"
      },
      {
        id: 5,
        name: 'Trixia 4-Seater Glass Top Dining Table',
        price: 30000,
        quantity: 8,
        PrdImgURL:
          'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 1,
        Material: 'Metal',
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis quasi assumenda nisi, consectetur quo nihil provident rem libero laborum dolore explicabo nobis ipsam non adipisci blanditiis mollitia reiciendis? Ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis quasi assumenda nisi, consectetur quo nihil provident rem libero laborum dolore explicabo nobis ipsam non adipisci blanditiis mollitia reiciendis? Ad!"
      },
      {
        id: 25,
        name: 'Gasha Marble Top Side Table',
        price: 14000,
        quantity: 10,
        PrdImgURL:
          'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 1,
        Material: 'Metal',
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis quasi assumenda nisi, consectetur quo nihil provident rem libero laborum dolore explicabo nobis ipsam non adipisci blanditiis mollitia reiciendis? Ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis quasi assumenda nisi, consectetur quo nihil provident rem libero laborum dolore explicabo nobis ipsam non adipisci blanditiis mollitia reiciendis? Ad!"
      },
      {
        id: 7,
        name: 'Ventura Fabric Dining Chair',
        price: 1500,
        quantity: 2,
        PrdImgURL:
          'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 2,
        Material: 'Upholstered Seating',
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis quasi assumenda nisi, consectetur quo nihil provident rem libero laborum dolore explicabo nobis ipsam non adipisci blanditiis mollitia reiciendis? Ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis quasi assumenda nisi, consectetur quo nihil provident rem libero laborum dolore explicabo nobis ipsam non adipisci blanditiis mollitia reiciendis? Ad!"
      },
      {
        id: 17,
        name: 'Ventura Fabric Dining Chair',
        price: 1500,
        quantity: 1,
        PrdImgURL:
          'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 2,
        Material: 'Upholstered Seating',
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis quasi assumenda nisi, consectetur quo nihil provident rem libero laborum dolore explicabo nobis ipsam non adipisci blanditiis mollitia reiciendis? Ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis quasi assumenda nisi, consectetur quo nihil provident rem libero laborum dolore explicabo nobis ipsam non adipisci blanditiis mollitia reiciendis? Ad!"
      },
      {
        id: 9,
        name: 'Boston Study Chair',
        price: 1000,
        quantity: 10,
        PrdImgURL:
          'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 2,
        Material: 'Upholstered Seating',
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis quasi assumenda nisi, consectetur quo nihil provident rem libero laborum dolore explicabo nobis ipsam non adipisci blanditiis mollitia reiciendis? Ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis quasi assumenda nisi, consectetur quo nihil provident rem libero laborum dolore explicabo nobis ipsam non adipisci blanditiis mollitia reiciendis? Ad!"
      },
      {
        id: 10,
        name: 'Coby Extendable TV Unit',
        price: 13000,
        quantity: 0,
        PrdImgURL:
          'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 3,
        Material: 'Wood',
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis quasi assumenda nisi, consectetur quo nihil provident rem libero laborum dolore explicabo nobis ipsam non adipisci blanditiis mollitia reiciendis? Ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis quasi assumenda nisi, consectetur quo nihil provident rem libero laborum dolore explicabo nobis ipsam non adipisci blanditiis mollitia reiciendis? Ad!"
      },
      {
        id: 15,
        name: 'Accent TV Unit',
        price: 36999,
        quantity: 4,
        PrdImgURL:
          'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 3,
        Material: 'MDF',
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis quasi assumenda nisi, consectetur quo nihil provident rem libero laborum dolore explicabo nobis ipsam non adipisci blanditiis mollitia reiciendis? Ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis quasi assumenda nisi, consectetur quo nihil provident rem libero laborum dolore explicabo nobis ipsam non adipisci blanditiis mollitia reiciendis? Ad!"
      },
      {
        id: 55,
        name: 'Plymouth TV Unit',
        price: 36999,
        quantity: 3,
        PrdImgURL:
          'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 3,
        Material: 'wood',
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis quasi assumenda nisi, consectetur quo nihil provident rem libero laborum dolore explicabo nobis ipsam non adipisci blanditiis mollitia reiciendis? Ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis quasi assumenda nisi, consectetur quo nihil provident rem libero laborum dolore explicabo nobis ipsam non adipisci blanditiis mollitia reiciendis? Ad!"
      },
    ];
  }
  getAllProds():Iproduct[] {
    return this.productsList;
  }
  performFilter(filterValue:string):Iproduct[]{

    filterValue = filterValue.toLowerCase();
    return this.productsList.filter((prd:Iproduct)=>prd.name.toLowerCase().includes(filterValue));
  }

getPrdByID(prdID:number):Iproduct|undefined{
  return this.productsList.find(prd=>prd.id==prdID);
}

// get array of products ids
getPrdIDSList():number[]{
  return this.productsList.map(prd=>prd.id)
}
}
