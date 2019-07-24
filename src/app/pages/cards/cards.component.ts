import {Component, OnInit} from '@angular/core';
import {Dragon} from '../../shared/models/dragon';
import {first} from 'rxjs/operators';
import {OrderByPipe} from '../../shared/pipes/order-by.pipe';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DragonsService} from '../../shared/services/dragons.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  dragons: Dragon[];

  constructor(
    private dragonsService: DragonsService,
    private modalService: NgbModal
  ) {
  }

  ngOnInit(): void {
    this.getItens();
  }

  getItens() {
    this.dragonsService.getAll()
      .pipe(first())
      .subscribe(data => {
        this.dragons = new OrderByPipe().transform(data, 'name');
      })
  }

  onDelete(content: any, item: Dragon) {
    this.modalService.open(content).result
      .then(() => {
        this.dragonsService.delete(item.id)
          .pipe(first())
          .subscribe(() => {
            this.getItens();
          })
      });
  }
}
