module.exports = {
  'src/**/*.(ts|tsx)': () => 'lint',
  'src/**/*.(ts|tsx)': () => 'typecheck',
  'src/**/*.(html,css,scss,js,jsx,cjs,mjs,ts,tsx,mdx)': (filenames) => [
    `npx prettier --write ${filenames.join(' ')} --cache`
  ]
};
