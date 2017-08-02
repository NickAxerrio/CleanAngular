import { CleanAngularPage } from './app.po';

describe('clean-angular App', () => {
  let page: CleanAngularPage;

  beforeEach(() => {
    page = new CleanAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
