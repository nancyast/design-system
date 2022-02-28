module.exports = {
  stories: [
    {
      directory: '../src/components',
      files: '**/*.stories.*'
    }
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react'
}
