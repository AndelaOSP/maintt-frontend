import { MainttPage } from './app.po';

describe('maintt App', function() {
  let page: MainttPage;

  beforeEach(() => {
    page = new MainttPage();
  });

  it('should display message saying Welcome to Maintt issue tracking plartform', () => {
    page.navigateTo();
    expect(page.getMessageText())
      .toEqual('Welcome to Maintt issue tracking plartform');
  });

  it('should display the company catch phrase ', () => {
    page.navigateTo();
    expect(page.getCatchPhraseText())
      .toEqual('Improve your productivity, let us do the worrying for you');
  });
});
