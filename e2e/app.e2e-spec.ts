import { KarmaSamplePage } from './app.po';

describe('karma-sample App', function() {
  let page: KarmaSamplePage;

  beforeEach(() => {
    page = new KarmaSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
