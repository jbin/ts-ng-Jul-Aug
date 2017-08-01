import { browser, by, element } from 'protractor';

export class StonePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('stn-root h1')).getText();
  }
}
