import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

// <appHover></appHover>
// <div appHover>
@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @HostBinding('style.border') border:string = '';

  constructor(private el:ElementRef, private renderer:Renderer2) { }

  @HostListener("mouseover")
  onMouseOver() {
    let part = this.el.nativeElement.querySelector('.img');
    this.renderer.setStyle(part, 'display', 'block');
    this.border = '3px solid red';
  }

  @HostListener("mouseout")
  onMouseOut() {
    let part = this.el.nativeElement.querySelector('.img');
    this.renderer.setStyle(part, 'display', 'none');
    this.border = "";
  }
}
