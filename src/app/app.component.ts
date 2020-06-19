import {Component, OnInit} from '@angular/core';
import { UserService } from "./services/user.service";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'random-user';
  user : any;
  constructor(
    private userService:UserService,
    private toastr: ToastrService) {
  }

  ngOnInit() {
    this.userService.getUser().subscribe(
      (response : any) =>{
        console.log(response)
        this.user = response.results[0];
      },
      error => {
        this.toastr.error(error.status,"Something is wrong")
      }
    )
  }
}
