import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {

  const navigate = useNavigate();

  return (
    <div className="errorpage">
      <div className="errorpage__container">
        <h1 className="errorpage__title">404</h1>
        <p className="errorpage__text">Страница не найдена</p>
      </div>
      <a className="errorpage__link" onClick={() => navigate(-1)}>Назад</a>
    </div>
  );
};

export default ErrorPage;