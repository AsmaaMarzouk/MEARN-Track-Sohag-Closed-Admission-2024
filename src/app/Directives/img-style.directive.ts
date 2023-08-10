import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ImgStyle]'
})
export class ImgStyleDirective {
// document.getElementBy........
// border-radius => borderRadius
// property decorator
@Input() radius1:string="50px";
@Input('ImgStyle') radius2:string="10px";
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.borderRadius="40px";
   }

  //  method decorator
@HostListener('mouseover') func1(){

  // this.elementRef.nativeElement.style.borderRadius="60px";
  this.elementRef.nativeElement.style.borderRadius=`${this.radius1}`;
  this.elementRef.nativeElement.style.opacity=".7";

}
@HostListener('mouseout') func2(){
  // this.elementRef.nativeElement.style.borderRadius="20px";
  this.elementRef.nativeElement.style.borderRadius=`${this.radius2}`;
  this.elementRef.nativeElement.style.opacity="1";

}
}
