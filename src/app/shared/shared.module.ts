import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackBarComponent } from './snack-bar/snack-bar/snack-bar.component';
import { MaterialModule } from './material/material.module';
import { MatSnackBar } from '@angular/material/snack-bar';

@NgModule({
  declarations: [SnackBarComponent],
  imports: [CommonModule, MaterialModule],
  exports: [SnackBarComponent],
  providers: [MatSnackBar],
})
export class SharedModule {}
