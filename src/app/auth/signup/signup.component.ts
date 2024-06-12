import { Component } from '@angular/core';
import { IUser } from '../../interfaces/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  users: IUser[] = [];
  constructor(private authSerVice: AuthService) {}
  signupForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  onSubmit = async () => {
    try {
      const userData = this.signupForm.value as IUser;
      this.authSerVice.Sign_Up(userData).subscribe((user) => {
        console.log(user);

        alert('Đăng ký thành công !');
        localStorage.setItem('token', JSON.stringify(user));
        window.location.href = '/sign-in';
      });
    } catch (error: any) {
      console.log(error);
    }
  };
}
