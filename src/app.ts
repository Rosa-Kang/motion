import { ImageComponent } from "./components/item/image.js";
import { PageComponent } from "./components/page/page.js";// 확장명도 함께 호출해야함.

class App{
    private readonly page: PageComponent;
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);

        const image = new ImageComponent('City Vibe', 'https://picsum.photos/600/300');
        image.attachTo(appRoot, 'beforeend');
    }
}

new App(document.querySelector('.document')! as HTMLElement);