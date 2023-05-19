import React from 'react';
import ReactDOM from 'react-dom';
import { toast } from 'react-toastify';

import './index.css';
import App from './app';

toast.configure({
  autoClose: 8000
});
ReactDOM.render(<App />, document.getElementById('root'));
