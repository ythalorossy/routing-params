import { YrossDirectivesPage } from './app.po';

describe('yross-directives App', function() {
  let page: YrossDirectivesPage;

  beforeEach(() => {
    page = new YrossDirectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
