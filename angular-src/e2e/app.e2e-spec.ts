import { A2appPage } from './app.po';

describe('a2app App', () => {
  let page: A2appPage;

  beforeEach(() => {
    page = new A2appPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
