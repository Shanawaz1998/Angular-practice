import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedEl]'
})
export class RedElDirective {

  constructor(value:ElementRef) {
    value.nativeElement.innerText="THis is from directives"
   }

}
