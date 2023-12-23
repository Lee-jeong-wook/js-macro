import axios from "axios";
import * as cheerio from "cheerio";
import puppeteer from "puppeteer";

class Model {
    async #getData():Promise<void> {
        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto('https://nid.naver.com/nidlogin.login?mode=form&url=https://www.naver.com/');
        } catch (error) {
            console.error(error);
        }
    }

    async getData():Promise<void> {
        await this.#getData();
    }
}

export default Model;