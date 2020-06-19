import {Component, Input, OnInit} from '@angular/core';

import { faEnvelope,faMapMarkerAlt,faPhone,faDatabase } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() user : any;

  constructor() { }

  faEnvelope = faEnvelope;
  faMapMarkerAlt = faMapMarkerAlt;
  faDatabase = faDatabase;
  faPhone = faPhone;

  ngOnInit(): void {
  }

}
