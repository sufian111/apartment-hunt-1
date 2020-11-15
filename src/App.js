import React from 'react';
import Facebook from './components/LogIn/Facebook';
import Google from './components/LogIn/Google';
import SignUp from './components/LogIn/SignUp';

const App = () => {
  return (
    <div>
      <Facebook/>
      <Google/><br/><br/>
      <SignUp/>
    </div>
  );
};

export default App;