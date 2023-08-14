import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';
import { Location } from '@angular/common'
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
// Day5
export class ProductDetailsComponent implements OnInit {
// ! => non null assertion operator => 12
// ? => safe navigation operator
// product?:Iproduct;
// product:Iproduct|null=null;
product:Iproduct|undefined=undefined;
prdID:number=0;
productsIDSList:number[]=[];
currentPrdIndex:number=0;
constructor(private prdService:ProductsService,private activatedRoute:ActivatedRoute,private router:Router,private location:Location) {}
ngOnInit(): void {
  //ways of convert from string to number => Number() , parseInt() , +Value
// this.prdID=(this.activatedRoute.snapshot.paramMap.get('pId'))?Number(this.activatedRoute.snapshot.paramMap.get('pId')):0;
// console.log(this.prdID);

// this.product = this.prdService.getPrdByID(this.prdID);
// console.log(this.product);

this.productsIDSList=this.prdService.getPrdIDSList();
// console.log(this.productsIDSList);

this.activatedRoute.paramMap.subscribe(paramMap=>{
  // success
this.prdID=(paramMap.get('pId'))?Number(paramMap.get('pId')):0;
let x=this.prdService.getPrdByID(this.prdID);
if(x){
  this.product=x;
}
else{
  alert("Not Found Product");
  this.location.back();
}
})

}
goBackToPrds(){
this.router.navigate(['/Products']);
}

previousPrd(){
// this.currentPrdIndex=this.productsIDSList.findIndex(item=>item==this.prdID);
this.currentPrdIndex=this.productsIDSList.indexOf(this.prdID);
// console.log(this.currentPrdIndex);
this.router.navigate(['/prdDetails',this.productsIDSList[--this.currentPrdIndex]])

}

// arr=[3,4,8]; //arr[1]=4
//
nextPrd(){
  this.currentPrdIndex=this.productsIDSList.indexOf(this.prdID);
this.router.navigate(['/prdDetails',this.productsIDSList[++this.currentPrdIndex]])
}
}
