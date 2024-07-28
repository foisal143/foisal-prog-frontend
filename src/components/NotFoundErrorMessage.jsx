const NotFoundErrorMessage = ({ text }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <h3 className="text-center my-12 text-3xl font-semibold text-font">
        {text}
      </h3>
    </div>
  );
};

export default NotFoundErrorMessage;
