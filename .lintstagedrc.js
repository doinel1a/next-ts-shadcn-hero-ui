module.exports = {
  'src/**/*.(ts|tsx)': () => 'next lint',
  'src/**/*.(ts|tsx)': () => 'tsc --noEmit',
  'src/**/*.(html|css|scss|js|jsx|ts|tsx|mdx)': (filenames) => [
    `prettier --write ${filenames.join(' ')} --cache`
  ]
};
