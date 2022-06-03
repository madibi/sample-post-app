import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()
  type: 'text' | 'submit' = 'text';

  @Input()
  display: 'inline' | 'block' = 'inline';

  @Input()
  color: 'normal' = 'normal';

  @Input()
  disabled = false;

  constructor() { }

  ngOnInit(): void {
  }

}
