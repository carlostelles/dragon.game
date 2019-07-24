import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/auth/auth.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {
  form: FormGroup;
  submited = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.onFormInit();
  }

  onFormInit(): any {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  onSubmit($event: Event) {
    $event.preventDefault();
    this.submited = true;
    if (this.form.valid && this.authService.signupUser(this.form.value)) {
      this.authService.signinUser(this.form.get('email').value, this.form.get('password').value);
      this.router.navigate(['']);
    } else {
      this.toastrService.error('Ops, este e-mail já está ocupado.')
    }
  }
}
