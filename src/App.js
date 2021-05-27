import React from 'react';
import Home from './containers/home';
import { Resume, SocialLinks, Title } from './data';

const App = () => {
  return (
    <Home
      data={Resume}
      socialLinks={SocialLinks}
      title={Title}
    />
  )
}
export default App;
