import { Ninjangular2Page } from './app.po';

describe('ninjangular2 App', function() {
  let page: Ninjangular2Page;

  beforeEach(() => {
    page = new Ninjangular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
