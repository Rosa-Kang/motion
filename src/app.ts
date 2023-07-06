import { Component } from "./components/component.js";
import { ImageComponent } from "./components/item/image.js";
import { NoteComponent } from "./components/item/note.js";
import { TodoComponent } from "./components/item/todo.js";
import { VideoComponent } from "./components/item/video.js";
import { Composable, PageComponent } from "./components/page/page.js";// 확장명도 함께 호출해야함.

class App{
    private readonly page: Component & Composable;
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);

        const image = new ImageComponent('picture that AI chose randomly', 'https://picsum.photos/600/300');
        this.page.addChild(image);

        const video = new VideoComponent('favorite video', 'https://www.youtube.com/embed/8MURF7ihkqs');
        this.page.addChild(video);
        
        const note = new NoteComponent('Note Title', 'Note Body');
        this.page.addChild(note);

        const todo = new TodoComponent('Toto Title', 'Go for a walk');
        this.page.addChild(todo);


    }
}

new App(document.querySelector('.document')! as HTMLElement);