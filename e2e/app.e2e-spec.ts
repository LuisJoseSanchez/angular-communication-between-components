import { AngularCommunicationBetweenComponentsPage } from './app.po';

describe('angular-communication-between-components App', () => {
  let page: AngularCommunicationBetweenComponentsPage;

  beforeEach(() => {
    page = new AngularCommunicationBetweenComponentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
