import {Component, OnInit} from '@angular/core';
import {Dragon} from '../../shared/models/dragon';
import {first} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {DragonsService} from '../../shared/services/dragons.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  dragon: Dragon;

  constructor(
    private dragonsService: DragonsService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(data => {
        // tslint:disable-next-line:radix
        this.getItem(Number.parseInt(data.get('id')));
      })
  }

  getItem(id: number) {
    this.dragonsService.get(id)
      .pipe(first())
      .subscribe(data => {
        this.dragon = data;
      })
  }
}
