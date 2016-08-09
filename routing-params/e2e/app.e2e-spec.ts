import { RoutingParamsPage } from './app.po';

describe('routing-params App', function() {
  let page: RoutingParamsPage;

  beforeEach(() => {
    page = new RoutingParamsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
