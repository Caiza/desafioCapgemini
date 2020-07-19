import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { DataPipe } from './../shared/pipes/data.pipe';
import { SharedModule } from './../shared/shared.module';
import { ExtratoTemplate } from './components/extrato-template';
import { ExtratoComponent } from './components/extrato/extrato.component';


@NgModule({
  declarations: [ExtratoTemplate, ExtratoComponent],
  imports: [
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatInputModule,
    MatSnackBarModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    SharedModule
  ]
})
export class ExtratoModule { }
