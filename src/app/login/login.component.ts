import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Response, ApiService } from '../../shared/api.service';

const UID: string = "u-s4t2ud-e7133388f6e30759a17eccb526cb12acc76fb73660b6df914e89e5e6c734d05c";

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [CommonModule, FormsModule, ReactiveFormsModule],
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
	code: string | null = null;

	loginForm: FormGroup = new FormGroup({
		user: new FormControl<string>("", Validators.minLength(2)),
		password: new FormControl<string>(""),
		remember_me: new FormControl<boolean>(false),
	});

	constructor(
		private route: ActivatedRoute,
		private api: ApiService
	) { }

	ngOnInit(): void {
		if (this.route.snapshot.queryParamMap.has("code")) {
			this.code = this.route.snapshot.queryParamMap.get("code");
			console.log(this.code);
			this.api.checkUserCode(this.code!).subscribe((response: Response) => {
				if (response.status_code === 200) {
					this.api.login(response.response.access_token).subscribe((response: Response) => {
						console.log(response);
					})
				}
			});
		}
	}

	public onSubmit(): void {
		window.location.href = "https://api.intra.42.fr/oauth/authorize?client_id=" + UID + "&redirect_uri=http%3A%2F%2Fxcode.es%2Flogin&response_type=code";
		// window.location.href = "https://api.intra.42.fr/oauth/authorize?client_id=" + UID + "&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Flogin&response_type=code";
		
	}
}