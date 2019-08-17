import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-ghe',
  templateUrl: './item-ghe.component.html',
  styleUrls: ['./item-ghe.component.scss']
})
export class ItemGheComponent implements OnInit {
  @Input() ghe;
  status:boolean  = false;
  @Output() eventClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  chonGhe(){
    this.status = !this.status;
    const item = {
      Status:this.status,
      Ghe:this.ghe
    }
    this.eventClick.emit(item);
  }
}
