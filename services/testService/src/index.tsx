import ReactDOM from 'react-dom/client';
import s from './index.scss';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className={s.test}>
    <App />
  </div>
);