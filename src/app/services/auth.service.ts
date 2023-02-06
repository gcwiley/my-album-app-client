import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	constructor(private auth: AngularFireAuth) {}

	// creates a new user account associated with the specified email address and password
	SignUpUser(
		email: string,
		password: string
	): Promise<firebase.auth.UserCredential> {
		return this.auth.createUserWithEmailAndPassword(email, password);
	}

	// sign in with Google Auth using firebase auth service and popup window for login
	SigninWithGoogleAuth(): Promise<firebase.auth.UserCredential> {
		return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
	}

	// sign in with Facebook Auth using firebase auth service and popup window for login
	SigninUserwithFacebookAuth(): Promise<firebase.auth.UserCredential> {
		// Authenticates a Firebase client using a popup-based OAuth authentication flow.
		// If succeeds, returns the signed in user along with the provider's credential.
		return this.auth.signInWithPopup(
			new firebase.auth.FacebookAuthProvider()
		);
	}

	// sign in with Twitter Auth using firebase auth service and popup window for login
	SigninUserwithTwitterAuth(): Promise<firebase.auth.UserCredential> {
		// Authenticates a Firebase client using a popup-based OAuth authentication flow.
		// If succeeds, returns the signed in user along with the provider's credential.
		return this.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
	}

	// sign in with Github Auth using firebase auth service and popup window for login
	SigninUserwithGithubAuth(): Promise<firebase.auth.UserCredential> {
		// Authenticates a Firebase client using a popup-based OAuth authentication flow.
		// If succeeds, returns the signed in user along with the provider's credential.
		return this.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
	}

	// Sign in a user with an email address and password with firebase auth service and observable
	// returns a promise that resolves when the user is signed in
	SigninUserwithEmailAndPassword(
		email: string,
		password: string
	): Promise<firebase.auth.UserCredential> {
		return this.auth.signInWithEmailAndPassword(email, password);
	}

	// signs out the current user with firebase auth service
	SignOutUser(): Promise<void> {
		return this.auth.signOut();
	}

	// sends a password reset e-mail to the specified email address
	// returns a promise that resolves when the email is sent
	SendPasswordResetEmail(email: string): Promise<void> {
		return this.auth.sendPasswordResetEmail(email);
	}

	// sends a verification email to the current user
	// returns a promise that resolves when the email us sent
	SendEmailVerification(): Promise<void> {
		return this.auth.currentUser.then((user) => {
			if (user) {
				// send email verification to the user if the user is logged in
				user.sendEmailVerification();
			}
		});
	}
}
