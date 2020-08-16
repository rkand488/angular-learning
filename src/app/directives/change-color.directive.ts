import { Directive, OnInit, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements OnInit {

  @Input('appChangeColor') color: string = "";
  defaulttxt: string;
  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.defaulttxt = this.el.nativeElement.innerText;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
    this.el.nativeElement.innerText = this.defaulttxt;
  }
  @HostListener('click') onClick() {
    this.el.nativeElement.innerText = this.color;
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
