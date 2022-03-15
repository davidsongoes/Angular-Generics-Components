import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss'],
})
export class SnackBarComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  public openSnackBar(
    message: string,
    action?: string,
    config?: MatSnackBarConfig
  ) {
    console.log('snack start');
    this._snackBar.open(message, action, config);
  }
}
