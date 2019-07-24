import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/auth/auth.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent implements OnInit {
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
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['card']);
    }
    this.onFormInit();
  }

  onFormInit(): any {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  onSubmit($event: Event) {
    $event.preventDefault();
    this.submited = true;
    const login = this.authService.signinUser(this.form.get('email').value, this.form.get('password').value);
    if (this.form.valid && login) {
      this.router.navigate(['card']);
    } else {
      this.toastrService.error('Ops, os dados parecem estar inválidos.')
    }
  }
}
