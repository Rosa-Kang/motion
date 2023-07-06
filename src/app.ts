import { ImageComponent } from "./components/item/image.js";
import { VideoComponent } from "./components/item/video.js";
import { PageComponent } from "./components/page/page.js";// 확장명도 함께 호출해야함.

class App{
    private readonly page: PageComponent;
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);

        const image = new ImageComponent('picture that AI chose randomly', 'https://picsum.photos/600/300');
        image.attachTo(appRoot, 'beforeend');

        const video = new VideoComponent('favorite video', 'https://www.youtube.com/watch?v=wE2g_aJ8jW4');
        video.attachTo(appRoot, 'beforeend');

    }
}

new App(document.querySelector('.document')! as HTMLElement);