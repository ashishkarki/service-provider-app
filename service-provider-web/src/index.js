import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  // strict mode commented out temporarily following the issue with
  // Ant-design library here: https://github.com/ant-design/ant-design/issues/22493
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>
  document.getElementById('root')
)
