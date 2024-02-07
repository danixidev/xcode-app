import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    user: new FormControl<string>("", Validators.minLength(2)),
    password: new FormControl<string>(""),
    remember_me: new FormControl<boolean>(false),
  });

  public onSubmit(): void {
    // console.log(this.loginForm.value);
    window.location.href = "https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-e7133388f6e30759a17eccb526cb12acc76fb73660b6df914e89e5e6c734d05c&redirect_uri=http%3A%2F%2Fxcode.es%2Flogin&response_type=code";
  }
}