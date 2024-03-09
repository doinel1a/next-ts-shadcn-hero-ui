import React from 'react';

import Counter from '@/components/counter';
import GithubCorner from '@/components/github-corner';

export default function Home() {
  return (
    <main className='flex h-full w-full flex-col items-center justify-center'>
      <GithubCorner
        title='Get started on GitHub'
        url='https://github.com/doinel1a/next-ts-shadcn-ui'
      />
      <Counter />
    </main>
  );
}
