import { FieldContext, observer } from "@/which";
import React from "react";
import { useContext } from "react";

const FormItem = observer(({ children }) => {
  const field = useContext(FieldContext);
  return (
    <div>
      <div>{field.title}</div>
      {children}
      <div className="red">{field.selfErrors.join(",")}</div>
    </div>
  );
});
export default FormItem;
