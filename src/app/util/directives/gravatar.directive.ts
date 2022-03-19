import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5';

@Directive({
  selector: '[appGravatar]'
})
export class GravatarDirective implements OnInit{
  @Input() set email(value: string) {
    this.emailHash(value);
  }
  public keyword = 'robohash';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {

  }

  public emailHash(email: string): void {
    const hashEmail = Md5.hashStr(email.trim().toLowerCase());
    this.el.nativeElement.src = `//www.gravatar.com/avatar/${hashEmail}?d=${this.keyword}`;
  }
}
