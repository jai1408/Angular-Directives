import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
	selector: '[appBetterHighlightHostListener]'
})
export class BetterHighlightHostListenerDirective implements OnInit {
	constructor(private elRef: ElementRef, private renderer: Renderer2) {}

	ngOnInit() {
		//this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
	}

	@HostListener('mouseenter')
	mouseover(eventData: Event) {
		this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
	}

	@HostListener('mouseleave')
	mouseleave(eventData: Event) {
		this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
	}
}
