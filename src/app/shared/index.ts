import { NgModule } from "@angular/core";

// shared components
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { HeroComponent } from "./hero/hero.component";
import { NavBarComponent } from "./navbar/navbar.component";
// NOTE: Add new pages here

@NgModule({
	declarations: [
		FooterComponent,
		HeaderComponent,
		HeroComponent,
		NavBarComponent,
	],
	exports: [FooterComponent, HeaderComponent, HeroComponent, NavBarComponent],
})
export class SharedComponents {}
