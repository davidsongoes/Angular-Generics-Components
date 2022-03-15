import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeIndexComponent } from './container/home-index/home-index.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSnackBar } from '@angular/material/snack-bar';

@NgModule({
  declarations: [HomeIndexComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule, SharedModule],
})
export class HomeModule {}
