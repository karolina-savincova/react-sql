import { Selector } from "testcafe";

export class Page {

    // Footer
    linkedinBtn: Selector;

    constructor () {
        this.linkedinBtn = Selector('.bi-linkedin');
    }
}
