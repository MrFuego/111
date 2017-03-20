import { BierunPage } from './app.po';

describe('bierun App', () => {
  let page: BierunPage;

  beforeEach(() => {
    page = new BierunPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
