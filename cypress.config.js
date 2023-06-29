import { defineConfig } from 'cypress'

module.exports = defineConfig({
  projectId: 'chys9a',
  viewportHeight: 1080,
  viewportWidth: 1920,
  experimentalWebKitSupport: true,
  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*']
  },
})
