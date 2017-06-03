import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResultListComponent} from './result-list.component';
import {ResultRoutingModule} from './result-routing.module';
import {ResultService} from './result.service';
import {ResultDetailComponent} from './result-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ResultRoutingModule
  ],
  declarations: [
    ResultListComponent,
    ResultDetailComponent
  ],
  providers: [
    ResultService
  ]
})

export class ResultModule {
}