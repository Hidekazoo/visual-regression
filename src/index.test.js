describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://google.com');
  });

  it('should be titled "Google"', async () => {
    await expect(page.title()).resolves.toMatch('Google');
    const image = await page.screenshot();
     // API from jest-image-snapshot
  expect(image).toMatchImageSnapshot();
  });
});