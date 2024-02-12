import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Response {
	response: any;
	status_code: number;
}

const API_42 = "https://api.xcode.es/api";
const API_XCODE = "https://api.xcode.es/api";
const API_LOCAL = "http://127.0.0.1:8000/api";

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor(private http: HttpClient) { }

	public getTest(): Observable<any> {
		return this.http.get(API_XCODE + "/test");
	}

	public checkUserCode(code: string): Observable<any> {
		let data: any = {
			code: code
		};
		return this.http.post(API_XCODE + "/check_user_code", JSON.stringify(data));
	}

	public login(accessToken: string): Observable<any> {
		let data: any = {
			access_token: accessToken
		};
		return this.http.post(API_XCODE + "/login", JSON.stringify(data));
	}
}
