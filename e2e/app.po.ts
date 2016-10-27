import { browser, element, by } from 'protractor';

export class MainttPage {
  navigateTo() {
    return browser.get('/');
  }

  getMessageText() {
    return element(by.css('app-root h1')).getText();
  }

  getCatchPhraseText() {
    return element(by.css('app-root h3')).getText();
  }
}
