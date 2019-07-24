import {ToastrService} from 'ngx-toastr';
import {Component, OnInit} from '@angular/core';
import {Dragon} from '../../shared/models/dragon';
import {finalize, first} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {DragonsService} from '../../shared/services/dragons.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  dragon: Dragon;
  submited = false;
  form: FormGroup;
  currentRating = 0;

  constructor(
    private dragonsService: DragonsService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(data => {
        // tslint:disable-next-line:radix
        const id = Number.parseInt(data.get('id'));
        if (!isNaN(id)) {
          this.getItem(id);
        } else {
          this.onInitForm();
        }
      });
  }

  onInitForm() {
    this.form = this.formBuilder.group({
      name: [this.dragon ? this.dragon.name : '', [Validators.required]],
      type: [this.dragon ? this.dragon.type : '', [Validators.required]],
      histories: [this.dragon ? this.transformHistories(this.dragon.histories) : '']
    });
  }

  transformHistories(histories: string | string[], revert = false): any {
    if (!revert) {
      let history = '';
      Array.of(histories).forEach(value => {
        history += value + '\n';
      });

      return history;
    } else {
      return histories.toString().split('\n');
    }
  }

  getItem(id: number) {
    this.dragonsService.get(id)
      .pipe(first())
      .subscribe(data => {
        this.dragon = data;
        this.currentRating = this.dragon.slug;
        this.onInitForm();
      })
  }

  onSubmit(event) {
    event.preventDefault();
    this.submited = true;
    if (!this.dragon) {
      this.dragon = new Dragon();
    }
    this.dragon.name = this.form.get('name').value;
    this.dragon.type = this.form.get('type').value;
    this.dragon.histories = Array.of(this.transformHistories(this.form.get('histories').value, true));
    this.dragon.slug = this.currentRating;

    this.dragonsService.save(this.dragon)
      .pipe(
        first(),
        finalize(() => {
          this.submited = false;
        })
      )
      .subscribe((data) => {
        this.dragon = data;
        this.toastrService.success('Show! Seu dragão foi registrado.')
        this.router.navigate(['']);
      })
  }

  onBack() {
    this.router.navigate(['']);
  }
}
