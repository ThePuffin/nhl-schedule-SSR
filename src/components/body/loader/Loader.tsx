const Loader = () => {
  return (
    <div className="preloader-wrapper big active">
      <p>wait for it </p>
      <div className="spinner-layer spinner-blue">
        <div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
