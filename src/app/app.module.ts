import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { BetterHighlightHostListenerDirective } from './better-highlight/better-highlight-HostListener.directive';
import { BetterHighlightHostBindingDirective } from './better-highlight/better-highlight-HostBinding.directive';
import { BetterHighlightCustomHostBindingDirective } from './better-highlight/better-highlight-CustomHostBinding.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
	declarations: [
		AppComponent,
		BasicHighlightDirective,
		BetterHighlightDirective,
		UnlessDirective,
		BetterHighlightHostListenerDirective,
		BetterHighlightHostBindingDirective,
		BetterHighlightCustomHostBindingDirective
	],
	imports: [ BrowserModule, FormsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
