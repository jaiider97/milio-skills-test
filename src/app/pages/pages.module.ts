import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  exports: [HomeComponent],
  imports: [RouterModule, PagesRoutingModule,  CommonModule ],
  declarations: [HomeComponent],
  providers: [],
})
export class PagesModule {}
