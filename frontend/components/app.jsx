import React from 'react';

const App = ({children}) => (
  <div>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
    <link rel="icon" href="favicon.ico" type="image/x-icon"/>
    {children}
  </div>
);

export default App;
