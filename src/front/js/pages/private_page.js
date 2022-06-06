import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const PrivatePage = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getEmail();
  }, [store.user_email]);
  return (
    <div>
      <h1>Private Content</h1>
      <div>{store.user_email && <div>{store.user_email}</div>}</div>
    </div>
  );
};
