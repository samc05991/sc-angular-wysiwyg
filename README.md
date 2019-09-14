## Simple Angular WYSIWYG Editor

To get started `npm install --save sc-angular-wysiwyg`

Add the module to your `app.module` imports section 

```
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScAngularWysiwygModule } from 'dist/sc-angular-wysiwyg'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    ScAngularWysiwygModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Use the component in your template `<lib-sc-angular-wysiwyg></lib-sc-angular-wysiwyg>`

You can listen for changes to the document by adding to your HTML `<lib-sc-angular-wysiwyg (editorHtml)="onChange($event)"></lib-sc-angular-wysiwyg>` 
In your code, add the function
```
    onChange($event) {
        console.log($event);
    }

```
        <lib-sc-angular-wysiwyg (editorHtml)="onChange($event)" [commands]="customCommands" [advanced]="customAdvanced"></lib-sc-angular-wysiwyg>

You can override how the toolbar displays, which buttons display