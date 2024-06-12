import { Component } from '@angular/core';
import { IUser } from '../../interfaces/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  users: IUser[] = [];
  constructor(private authSerVice: AuthService) {}
  signinForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  onSubmit = async () => {
    try {
      const userData = this.signinForm.value as IUser;
      this.authSerVice.Sign_In(userData).subscribe((user) => {
        console.log(user);

        alert('Đăng nhập thành công !');
        window.location.href = '';
      });
    } catch (error) {}
  };
}
