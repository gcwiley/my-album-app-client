import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import shared component
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { NavBarComponent } from './navbar/navbar.component';
// add new shared components here

@NgModule({
	imports: [CommonModule],
	declarations: [
		FooterComponent,
		HeaderComponent,
		HeroComponent,
		NavBarComponent,
	],
	exports: [FooterComponent, HeaderComponent, HeroComponent, NavBarComponent],
})
export class SharedComponentsModule {}
