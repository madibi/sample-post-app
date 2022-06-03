import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {PostState} from "@commons/store/post/post.state";
import * as POST_ACTIONS from '@commons/store/post/post.action';
import {Observable} from 'rxjs';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public postId:number = null!;

  constructor(
    private postState: Store<PostState>,
    private toastrService: ToastrService
  ) {
  }

  onGetPstById() {
    if (this.postId) {
      this.postState.dispatch(
        POST_ACTIONS.getPost({ postId : this.postId})
      );
    } else {
      this.toastrService.info('select post Id first');
    }
  }

  ngOnInit(): void {
  }

}
