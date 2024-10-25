import React from "react";

const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner-border text-white" role="status">
        <span className="sr-only text-white">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
