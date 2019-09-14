import { Component, EventEmitter, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ScAngularWysiwygService } from './sc-angular-wysiwyg.service';

@Component({
  selector: 'lib-sc-angular-wysiwyg',
  templateUrl: './sc-angular-wysiwyg.component.html',
  styleUrls: ['./sc-angular-wysiwyg.component.scss'],
  encapsulation: ViewEncapsulation.None

})

export class ScAngularWysiwygComponent implements OnInit {
    /**
     * Allows overriding of commands
     * Items will display in the order of the array
     * Please see reference doc for more info https://github.com/samc05991/sc-angular-wysiwyg
     */
    @Input() commands?: [{}];

    /**
     * Allows overriding of advanced commands
     */
    @Input() advanced?: Object;

    /**
     * Allows for reading of the editors content
     */
    @Output() editorHtml = new EventEmitter<string>();

    /**
     * The area the user is allowed to type into
     */
    editorContent: any;

    /**
     * editorConfig is the data thats used to build the forms
     */
    editorConfig: any = {};

    /**
     * each type of advanced form
     */
    fontTypeForm: FormGroup;
    fontSizeForm: FormGroup;
    formatForm: FormGroup;

    /**
     * Where the HTML will display
     */
    htmlDisplay: any;
    showHtml: boolean = false;

    constructor(private _fb: FormBuilder, private _editorService: ScAngularWysiwygService) {}

    ngOnInit() {
        console.log(this.commands, this.advanced);
        this.editorConfig.commands = this.commands || this._editorService.commands;
        this.editorConfig.advanced = this.advanced || this._editorService.advanced;

        this._createForms();

        this.htmlDisplay = document.querySelector(".sc-html-display");
        this.editorContent = document.querySelector(".sc-editor");
    }

    /**
     * @desc Executes the commands sent from the tool bar buttons
     * @param commandId 
     * @param showUi 
     * @param value 
     */
    executeCommand(commandId: string, showUi: boolean, value: any) {
        switch(commandId) {
            case "link":
                this.link();
                break;
            case "changeColor":
                this.changeColor();
                break;
            case "getHtml":
                this.showHtml = !this.showHtml;
                this.getHtml();
                break;
            default:
                document.execCommand(commandId, showUi, value);
                break;
        }
    }

    /**
     * @desc Prompts user to enter a link
     */
    link() {
        let url = prompt("Enter the URL");

        document.execCommand("createLink", false, url);
    }

    /**
     * @desc Changes the font color
     */
    changeColor() {
        let color = prompt("Enter Hex Code");

        document.execCommand("foreColor", false, color);
    }

    /**
     * @desc Displays the HTML of the editor content
     */
    getHtml() {
        let editorContent = this.editorContent.innerHTML;

        this.htmlDisplay.style.display = "block";
        this.htmlDisplay.textContent = editorContent;

        return editorContent;
    }

    /**
     * When keys are pressed, update the parents binding
     * @param event 
     */
    onKey(event: any) { // without type info
        this.editorHtml.emit(this.getHtml());
    }

    /**
     * @desc Create the more advanced forms
     */
    _createForms() {
        this.fontTypeForm = this._fb.group({
            fonttype: ['Arial']
        });

        this.fontTypeForm.controls['fonttype'].valueChanges.subscribe(value => {
            this.executeCommand('fontname', false, value);
        });

        this.fontSizeForm = this._fb.group({
            fontsize: [4]
        });

        this.fontSizeForm.controls['fontsize'].valueChanges.subscribe(value => {
            this.executeCommand('fontsize', false, value);
        });

        this.formatForm = this._fb.group({
            formatblock: ['p']
        });

        this.formatForm.controls['formatblock'].valueChanges.subscribe(value => {
            this.executeCommand('formatblock', false, value);
        });
    }
}
