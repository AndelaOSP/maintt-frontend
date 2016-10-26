import { MainttPage } from './app.po';

describe('maintt App', function() {
  let page: MainttPage;

  beforeEach(() => {
    page = new MainttPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
