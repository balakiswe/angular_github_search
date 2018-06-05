import { AngularGithubApiPage } from './app.po';

describe('angular-github-api App', function() {
  let page: AngularGithubApiPage;

  beforeEach(() => {
    page = new AngularGithubApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
