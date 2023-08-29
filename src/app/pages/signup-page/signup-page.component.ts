import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// import auth service
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-signup-page',
	templateUrl: './signup-page.component.html',
	styleUrls: ['./signup-page.component.scss'],
})
export class SignupComponent {
	//   inject the router and form builder and auth service
	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private authService: AuthService
	) {}

	// create the signup form
	signupForm = this.formBuilder.group({
		email: ['', Validators.required],
		password: ['', Validators.required],
	});

	// create user with email and password
	createUserWithEmailAndPassword() {
		this.authService
			.CreateUserWithEmailAndPassword(
				this.signupForm.value.email!,
				this.signupForm.value.password!
			)
			.then(() => {
				// navigates user to the main page
				this.router.navigateByUrl('/');
			})
			.catch((error) => {
				window.alert(error.message);
			});
	}
}
