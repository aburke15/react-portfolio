import React, { FunctionComponent } from "react";
import loading from "../images/loading.gif";

const Loading: FunctionComponent = () => {
  return (
    <div className="text-center justify-content-center">
      <img src={loading} alt="loading" height={75} width={75} />
    </div>
  );
};

export default Loading;
