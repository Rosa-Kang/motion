import { Component } from "./components/component.js";
import { InputDialog, MediaData, TextData } from "./components/dialog/dialog.js";
import { MediaSectionInput } from "./components/dialog/input/media-input.js";
import { TextSectionInput } from "./components/dialog/input/text-input.js";
import { ImageComponent } from "./components/item/image.js";
import { NoteComponent } from "./components/item/note.js";
import { TodoComponent } from "./components/item/todo.js";
import { VideoComponent } from "./components/item/video.js";
import { Composable, PageComponent, PageItemComponent } from "./components/page/page.js";// 확장명도 함께 호출해야함.

type InputComponentConstructor<T = (MediaData | TextData) & Component> = {
  new (): T;
};

class App{
    private readonly page: Component & Composable;
    constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);

        this.bindElementToDialog<MediaSectionInput>(
            '#new-image',
            MediaSectionInput,
            (input: MediaSectionInput) => new ImageComponent(input.title, input.url)
        );

        this.bindElementToDialog<MediaSectionInput>(
            '#new-video',
            MediaSectionInput,
            (input: MediaSectionInput) => new VideoComponent(input.title, input.url)
        );

        this.bindElementToDialog<TextSectionInput>(
            '#new-note',
            TextSectionInput,
            (input: TextSectionInput) => new NoteComponent(input.title, input.body)
        );

        this.bindElementToDialog<TextSectionInput>(
            '#new-todo',
            TextSectionInput,
            (input: TextSectionInput) => new TodoComponent(input.title, input.body)
        );
      
          // For demo :)
    this.page.addChild(new ImageComponent('Imagine your peace and dream', 'https://picsum.photos/800/400'));
    this.page.addChild(new VideoComponent('Morning Yoga for 20min', 'https://youtu.be/muxLhXweYF0'));
    this.page.addChild(new NoteComponent('Today Todo', "Don't forget to code your dream"));
      this.page.addChild(new ImageComponent('Stay Awake', 'https://picsum.photos/900/500'));
    this.page.addChild(new VideoComponent('Why I get up 5am', 'https://youtu.be/U7eGCZAfDyU'));
    this.page.addChild(new NoteComponent('Today Todo', "Don't forget to code your dream"));
    }

    private bindElementToDialog<T extends (MediaData | TextData) & Component>(
    selector: string,
    InputComponent: InputComponentConstructor<T>,
    makeSection: (input: T) => Component
  ) {
    const element = document.querySelector(selector)! as HTMLButtonElement;
    element.addEventListener('click', () => {
      const dialog = new InputDialog();
      const input = new InputComponent();
      dialog.addChild(input);
      dialog.attachTo(this.dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(this.dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        const image = makeSection(input);
        this.page.addChild(image);
        dialog.removeFrom(this.dialogRoot);
      });
    });
  }
        
}

new App(document.querySelector('.document')! as HTMLElement, document.body);