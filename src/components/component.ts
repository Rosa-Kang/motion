export interface Component {
    attachTo(parent: HTMLElement, position?: InsertPosition): void;
}

/**
 * Base Component Encapsulates the HTML element creation.
 */

export class BaseComponent<T extends HTMLElement> implements Component{
    protected readonly element: T; //자식컴포넌트에서만 볼  수 있고 리온리
    constructor(htmlString: string) {
        const template = document.createElement('template');
        template.innerHTML = htmlString;
        this.element = template.content.firstElementChild! as T;
    }

     attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element);
    }
}