import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  const handleBackBtn = () => {
    navigate(-1);
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="space-y-4 text-center">
        <h3 className="text-4xl font-semibold">Oops !!!</h3>
        <p className="bg-red-700 px-2 py-1 rounded-sm">
          <i>{error.statusText || error.message}</i>
        </p>
        <button onClick={handleBackBtn} className="btn">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
