import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ScAngularWysiwygService {

    public commands: any = [
        // cleanDoc: {
        //     isActive: false,
        //     title: 'Clean Doc',
        //     icon: 'fas fa-eraser',
        // },

        // TODO:: NOT WORKING
        // printDoc: {
        //     isActive: false,
        //     title: 'Print Doc',
        //     icon: 'fas fa-print',
        // },
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

        // TODO:: NOT WORKING
        // blockquote: {
        //     isActive: false,
        //     title: 'Blockquote',
        //     icon: 'fas fa-quote-right',
        // },
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

        // TODO:: Set Up a color picker
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

    constructor() { }
}
