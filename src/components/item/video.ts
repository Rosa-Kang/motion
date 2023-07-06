import { BaseComponent } from "../component";

export class VideoComponent extends BaseComponent<HTMLElement>{
    
    constructor(title:string, video:string) {
        super(`<section class="video">
                <div class="video___holder">
                    <video class="video__src"></video>
                </div>
                <p class="video__title"></p>
            </section>`);

        const VideoElement = this.element.querySelector('.video__src')! as HTMLVideoElement;
        VideoElement.src = video;

        const VideoTitle = this.element.querySelector('.video__title')! as HTMLElement;
        VideoTitle.textContent = title;

    }
}