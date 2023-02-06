import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

// import the auth service
import { AuthService } from "src/app/services/auth.service";

@Component({
	selector: "app-signin",
	templateUrl: "./signin-page.component.html",
	styleUrls: ["./signin-page.component.scss"],
})
export class SigninComponent {
	// inject the router, form builder, and auth service
	constructor(
		private router: Router,
		private formBuilder: FormBuilder,
		private authService: AuthService
	) {}

	// create the signin form
	signinForm = this.formBuilder.group({
		email: ["", Validators.required],
		password: ["", Validators.required],
	});

	// sign in with email and password
	// if successful, navigate to the home page
	onSubmitSignIn() {
		this.authService
			.SigninUserwithEmailAndPassword(
				this.signinForm.value.email!,
				this.signinForm.value.password!
			)
			.then(() => {
				// navigates user to the main page
				this.router.navigateByUrl("/");
			})
			// if error, log the error message
			.catch((error) => {
				window.alert(error.message);
			});
	}
}
