import { ArduinoTimeClockSystemPage } from './app.po';

describe('arduino-time-clock-system App', () => {
  let page: ArduinoTimeClockSystemPage;

  beforeEach(() => {
    page = new ArduinoTimeClockSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
