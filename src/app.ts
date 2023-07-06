import { ImageComponent } from "./components/item/image.js";
import { NoteComponent } from "./components/item/note.js";
import { TodoComponent } from "./components/item/todo.js";
import { VideoComponent } from "./components/item/video.js";
import { PageComponent } from "./components/page/page.js";// 확장명도 함께 호출해야함.

class App{
    private readonly page: PageComponent;
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);

        const image = new ImageComponent('picture that AI chose randomly', 'https://picsum.photos/600/300');
        image.attachTo(appRoot, 'beforeend');

        const note = new NoteComponent('Note Title', 'Note Body');
        note.attachTo(appRoot, 'beforeend');

        const todo = new TodoComponent('Toto Title', 'Go for a walk');
        todo.attachTo(appRoot, 'beforeend');

        const video = new VideoComponent('favorite video', 'https://www.youtube.com/embed/8MURF7ihkqs');
        video.attachTo(appRoot, 'beforeend');

    }
}

new App(document.querySelector('.document')! as HTMLElement);