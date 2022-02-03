import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


function card(props) {
  return <article>
    <img></img>
    <div>
      <h2>TITULO</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusantium, pariatur possimus cupiditate voluptates vero veniam ab nihil veritatis doloremque, aperiam molestias? Perspiciatis autem corrupti error, possimus dolorum cumque perferendis?
    </p>
    <lista items={["ollaytamtambo", "pizza", ""]}/>
    </div>
  </article>
}