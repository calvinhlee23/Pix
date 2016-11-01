import React from 'react';

const App = ({children}) => (
  <div>
  <h1 className = "master-h1" id = "master">
  <a href = "/" className  = "glyphicon glyphicon-camera"/>&nbsp;
  <div className = "master-h1-text">Pix</div></h1>
  {children}
  </div>
);

export default App;
