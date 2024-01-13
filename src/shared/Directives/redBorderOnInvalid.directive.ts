import { Directive, ElementRef, Renderer2, OnInit, HostBinding, DoCheck } from '@angular/core';


@Directive({
  selector: '[appRedBorderOnInvalid]'
})
export class RedBorderOnInvalidDirective implements DoCheck {

constructor(private el: ElementRef, private renderer: Renderer2) {}
ngDoCheck(): void {
  const classList = this.el.nativeElement.classList;
  const hasInvalidAndTouched = classList.contains('ng-invalid') && classList.contains('ng-touched');
  if (hasInvalidAndTouched) {
    this.renderer.addClass(this.el.nativeElement, 'bg-red-500');
  } else {
    this.renderer.removeClass(this.el.nativeElement, 'bg-red-500');
  }

}
  
}
