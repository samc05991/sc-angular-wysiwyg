## Simple Angular WYSIWYG Editor

**Note** this package uses font-awesome for the icons, you will need to import this or change the icon properties for each button
https://fontawesome.com/start

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
and then in your code, add the function
```
    onChange($event) {
        console.log($event);
    }

```

You can override how the toolbar displays, which buttons display and their icons by passing variables to the editor like
```
<lib-sc-angular-wysiwyg
  (editorHtml)="onChange($event)" 
  [commands]="customCommands"
  [advanced]="customAdvanced"
></lib-sc-angular-wysiwyg>`
```

There is two different configs, one for buttons and one for advanced dropdowns.

Note, you can add a `text: 'string'` property to a command to add text to the button
```
    public commands: any = [
        {
            command: 'undo',
            isActive: false,
            title: 'Undo',
            icon: 'fas fa-undo',
        },
        {
            command: 'redo',
            isActive: false,
            title: 'Redo',
            icon: 'fas fa-redo',
        },
        {
            command: 'removeFormat',
            isActive: false,
            title: 'Remove Formatting',
            icon: 'fas fa-remove-format',
        },
        {
            command: 'bold',
            isActive: false,
            title: 'Bold',
            icon: 'fas fa-bold',
        },
        {
            command: 'italic',
            isActive: false,
            title: 'Italic',
            icon: 'fas fa-italic',
        },
        {
            command: 'underline',
            isActive: false,
            title: 'Underline',
            icon: 'fas fa-underline',
        },
        {
            command: 'changeColor',
            isActive: false,
            title: 'Font Color',
            icon: 'fas fa-tint',
        },
        {
            command: 'justifyleft',
            isActive: false,
            title: 'Justify Left',
            icon: 'fas fa-align-left',
        },
        {
            command: 'justifycenter',
            isActive: false,
            title: 'Justify Center',
            icon: 'fas fa-align-justify',
        },
        {
            command: 'justifyright',
            isActive: false,
            title: 'Justify Right',
            icon: 'fas fa-align-right',
        },
        {
            command: 'insertorderedlist',
            isActive: false,
            title: 'Insert Ordered List',
            icon: 'fas fa-list-ol',
        },
        {
            command: 'insertunorderedlist',
            isActive: false,
            title: 'Insert Unordered List',
            icon: 'fas fa-list-ul',
        },
        {
            command: 'outdent',
            isActive: false,
            title: 'Outdent',
            icon: 'fas fa-outdent',
        },
        {
            command: 'indent',
            isActive: false,
            title: 'Indent',
            icon: 'fas fa-indent',
        },
        {
            command: 'createLink',
            isActive: false,
            title: 'Link URL',
            icon: 'fas fa-link',
        },
        {
            command: 'cut',
            isActive: false,
            title: 'Cut',
            icon: 'fas fa-cut',
        },
        {
            command: 'copy',
            isActive: false,
            title: 'Copy',
            icon: 'fas fa-copy',
        },
        {
            command: 'getHtml',
            isActive: false,
            title: 'Get HTML',
            icon: '',
            text: 'HTML'
        },
    ]
```

This is the config for the dropdowns, you can add more values to the dropdown by updating the `values` property
```
    public advanced: Object = {
        backColor: {
            isActive: false,
            title: 'changeColor',
            icon: 'fas fa-paint-roller',
            values: {
                red: "Red",
                blue: "Blue",
                green: "Green",
                white: "White",
                black: "Black"
            }
        },
        fontName: {
            isActive: false,
            title: 'Font',
            icon: 'fas fa-text',
            values: [
                "Arial",
                "Arial Black",
                "Courier New",
                "Times New Roman"
            ]
        },
        fontSize: {
            isActive: false,
            title: 'Font Size',
            icon: 'fas fa-text',
            values: {
                1: "Tiny",
                2: "Small",
                3: "Normal",
                4: "Medium",
                5: "Large",
                6: "Huge",
                7: "Max"
            }
        },
        foreColor: {
            isActive: false,
            title: 'Font Color',
            icon: 'fas fa-text',
            values: {
                red: "Red",
                blue: "Blue",
                green: "Green",
                white: "White",
                black: "Black"
            }
        },
        formatblock: {
            isActive: false,
            title: 'Font Color',
            icon: 'fas fa-text',
            values: {
                h1: "Title 1",
                h2: "Title 2",
                h3: "Title 3",
                h4: "Title 4",
                h5: "Title 5",
                h6: "Title 6",
                p: "Paragraph",
                pre: "Preformatted"
            }
        }
    }
```
