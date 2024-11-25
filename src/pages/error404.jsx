import { useRouteError } from "react-router-dom";

const Error404Page = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <h1 className="">404 Oops!</h1>
      <p className="">Sorry, an unexpected error has occured</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default Error404Page;
