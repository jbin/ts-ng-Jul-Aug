import { StonePage } from './app.po';

describe('stone App', () => {
  let page: StonePage;

  beforeEach(() => {
    page = new StonePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to stn!!');
  });
});
