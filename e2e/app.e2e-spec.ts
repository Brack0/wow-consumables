import { WowConsumablesPage } from './app.po';

describe('wow-consumables App', () => {
  let page: WowConsumablesPage;

  beforeEach(() => {
    page = new WowConsumablesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
