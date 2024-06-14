import { Page } from "../base-pages/base-page";

const po = new Page(); 

fixture `Footer tests`


    test.skip(`Click on Linkedin button`, async t => {
        await t
            .click(po.linkedinBtn);
    });