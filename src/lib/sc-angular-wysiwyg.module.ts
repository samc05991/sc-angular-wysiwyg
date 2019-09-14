import { NgModule } from '@angular/core';
import { ScAngularWysiwygComponent } from './sc-angular-wysiwyg.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ScAngularWysiwygComponent],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [ScAngularWysiwygComponent]
})

export class ScAngularWysiwygModule { }
