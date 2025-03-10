const { test, expect } = require('@playwright/test')

test('Content page should load in under 5 seconds', async ({ page }) => {
  const startTime = Date.now()
  await page.goto('http://mdellis73.github.io/mywebclass-simulation/content.html')
  const endTime = Date.now()
  const loadTime = endTime - startTime
  expect(loadTime).toBeLessThanOrEqual(5000)
})
