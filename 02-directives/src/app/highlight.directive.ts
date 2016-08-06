import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

  @HostListener('click', ['$event'])
  onClick(event) {
    console.log("Event Target" + event.target.style);
  }

  @HostListener('mouseenter') mouseover () {
    this.backgroungColor = this.highlightColor;
  };

  @HostListener('mouseleave') mouseleave () {
    this.backgroungColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroungColor;
  };

  @Input() defaultColor = 'white';
  @Input('highlight') highlightColor = 'green';

  private backgroungColor: string;

  constructor() {
    // this.elementRef.nativeElement.style.backgroundColor = 'green';
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'backgroundColor', 'green');
  }

  ngOnInit() {
    this.backgroungColor = this.defaultColor;
  }

}
