import React from "react";
import { ReactComponent as IcLoader } from "app/assets/images/loader.svg";
import "./loader.scss";
import { appStateSelectors, useAppState } from "app/state/AppState";

const Loader: React.FC = () => {
  const actionCount = useAppState(appStateSelectors.actionCount);
  return actionCount > 0 ? (
    <div className="loader-container">
      <IcLoader />
    </div>
  ) : null;
};

export default Loader;
