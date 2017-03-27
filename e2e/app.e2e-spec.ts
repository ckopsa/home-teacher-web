import { HomeTeacherPage } from './app.po';

describe('home-teacher App', () => {
  let page: HomeTeacherPage;

  beforeEach(() => {
    page = new HomeTeacherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
