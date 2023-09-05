import React, { useContext, useEffect } from "react";
import { ShowToastContext } from "../context/ShowToastContext";

// Pop Up message appears then goes away after 3 seconds after user does certain acions like create new Folder ect.
function Toast({msg}) {
    const {showToastMsg, setShowToastMsg} = useContext(ShowToastContext);
    useEffect(() => {
        setInterval(()=> {
            setShowToastMsg(null)
        }, 3000)
    }, [showToastMsg])
  return (
    <div>
      <div className="toast toast-top toast-end">
        <div className="alert alert-success">
          <span>{msg}</span>
        </div>
      </div>
    </div>
  );
}

export default Toast;
