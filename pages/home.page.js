import React from 'react'
import PublicLayout from 'components/layouts/PublicLayout'

const Home = () => (
  <PublicLayout>
    <h1>Next.js Redux template</h1>
    <p>
      Production ready setup for Next.js + Redux
    </p>
    <br />

    <h2>
      If you run ...
    </h2>
    <pre>
      git clone git@github.com:IvanDimanov/next-redux-template.git
      <br />
      cd next-redux-template
      <br />
      npm ci
      <br />
      npm run dev
    </pre>

    <h2>
      ... you will get
    </h2>
    <ul>
      <li>
        production Next.js App -
        <em>npm run dev</em>
      </li>

      <li>
        Added Material UI -
        {' '}
        <a
          href="https://material-ui.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://material-ui.com
        </a>
      </li>

      <li>
        Redux Toolkit state management architecture -
        {' '}
        <a
          href="https://redux-toolkit.js.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://redux-toolkit.js.org
        </a>
      </li>
    </ul>
  </PublicLayout>
)

export default Home
