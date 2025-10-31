import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { importProvidersFrom } from '@angular/core';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CategoryComponent } from './components/category/category.component';
import { DeleteConfirmComponent } from './components/delete-confirm/delete-confirm.component';
import { CategoryDialogComponent } from './components/category-dialog/category-dialog.component';
import { UniteOfMeasurementComponent } from './components/unite-of-measurement/unite-of-measurement.component';
import { UomDialogComponent } from './components/uom-dialog/uom-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    DeleteConfirmComponent,
    CategoryDialogComponent,
    UniteOfMeasurementComponent,
    UomDialogComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatRadioModule,
    MatSortModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    AppRoutingModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule
  ],

  providers: [
    provideHttpClient(withFetch()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
