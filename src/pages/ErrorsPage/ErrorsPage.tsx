import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import { clsx } from "clsx";

const ErrorsPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate("/");
  };

  return (
    <>
      <div
        className={clsx(
          "min-h-screen",
          "flex flex-col",
          "items-center justify-center mx-auto",
          "gap-4",
          "text-gray-900",
        )}
      >
        <h1
          className={clsx(
            "text-4xl font-extrabold",
            "scroll-m-20 tracking-tight",
            "lg:text-5xl",
          )}
        >
          Ой-ой-ой!
        </h1>
        <p className="scroll-m-20 tracking-tight text-3xl">
          Тихесенько, несподівана ошибочка, ок?
        </p>
        <i className="scroll-m-20 tracking-tight text-xl">
          {isRouteErrorResponse(error)
            ? error.data || error.statusText
            : "Я не знаю...."}
        </i>
        <button
          className={clsx(
            "bg-secondary-dark-gray border-[1px] p-4 rounded-2xl",
            "mt-4",
          )}
          onClick={handleNavigateToHome}
        >
          Повернись на &apos;Нормальна сторінка&apos;
        </button>
      </div>
    </>
  );
};

export default ErrorsPage;
