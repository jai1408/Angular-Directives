import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
	selector: '[appBetterHighlightHostBinding]'
})
export class BetterHighlightHostBindingDirective implements OnInit {
	@HostBinding('style.backgroundColor') backgroundColor: string;

	constructor(private elRef: ElementRef, private renderer: Renderer2) {}

	ngOnInit() {
		this.backgroundColor = 'transparent';
	}

	@HostListener('mouseenter')
	mouseover(eventData: Event) {
		this.backgroundColor = 'blue';
	}

	@HostListener('mouseleave')
	mouseleave(eventData: Event) {
		this.backgroundColor = 'transparent';
	}
}
