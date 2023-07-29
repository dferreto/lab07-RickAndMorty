import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodiosRoutingModule } from './episodios-routing.module';
import { EpisodiosComponent } from './episodios.component';
import { MaterialModule } from 'src/app/material.module';
import {MatInputModule} from '@angular/material/input'


@NgModule({
  declarations: [
    EpisodiosComponent],
  imports: [
    CommonModule,
    EpisodiosRoutingModule,
    MaterialModule,
    MatInputModule
  ]
})
export class EpisodiosModule { }
