import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ImgStyle]'
})
export class ImgStyleDirective implements OnChanges,OnInit {
// document.getElementBy........
// border-radius => borderRadius
// property decorator
// @Input() radius1:string="50px";
// @Input('ImgStyle') radius2:string="80px";

@Input() radius1:string="10px";
@Input('ImgStyle') radius2:string="5px";
  constructor(private elementRef: ElementRef) {
    // this.elementRef.nativeElement.style.border="2px dashed red";
    // console.log("constructor");
  // this.elementRef.nativeElement.style.borderRadius=`${this.radius2}`;

   }
  ngOnInit(): void {
    // console.log("on init");

  }
  ngOnChanges(): void {

  this.elementRef.nativeElement.style.borderRadius=`${this.radius2}`;
  // this.elementRef.nativeElement.style.border=`${this.radius2} dotted yellow`;


  // console.log("on changes");

  }

  //  method decorator
@HostListener('mouseover') func1(){

  // this.elementRef.nativeElement.style.borderRadius="60px";
  this.elementRef.nativeElement.style.borderRadius=`${this.radius1}`;
  this.elementRef.nativeElement.style.opacity=".7";

  // this.elementRef.nativeElement.style.border=`${this.radius1} solid blue`;


}
@HostListener('mouseout') func2(){
  // this.elementRef.nativeElement.style.borderRadius="20px";
  this.elementRef.nativeElement.style.borderRadius=`${this.radius2}`;
  this.elementRef.nativeElement.style.opacity="1";
  // this.elementRef.nativeElement.style.border=`${this.radius2} dotted yellow`;


}
}
