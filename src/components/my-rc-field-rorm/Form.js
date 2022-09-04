import React from "react";

import FieldContext from "./FieldContext";
export default function From({ children, form, onFinish, onFinishfailed }) {
  console.log(form);
  form.setCallbacks({
    onFinish,
    onFinishfailed,
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.submit();
      }}
    >
      <FieldContext.Provider value={form}>{children}</FieldContext.Provider>
    </form>
  );
}
