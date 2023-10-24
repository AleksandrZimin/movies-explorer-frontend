import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="errorpage">
      <div className="errorpage__container">
        <h1 className="errorpage__title">404</h1>
        <p className="errorpage__text">Страница не найдена</p>
      </div>
      <a className="errorpage__link">Назад</a>
    </div>
  );
};

export default ErrorPage;