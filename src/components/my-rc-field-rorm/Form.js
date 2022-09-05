import React from "react";

import FieldContext from "./FieldContext";
import useForm from "./useForm";
export default function From(
  { children, form, onFinish, onFinishFailed },
  ref
) {
  const [formInstance] = useForm(form);
  //使用forwardRef注册 然后再用ref将子组件中的值返回给父组件
  React.useImperativeHandle(ref,()=>formInstance)
  formInstance.setCallbacks({
    onFinish,
    onFinishFailed,
  });
  // form.setCallbacks({
  //   onFinish,
  //   onFinishFailed,
  // });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formInstance.submit();
        // form.submit();
      }}
    >
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
      {/* <FieldContext.Provider value={form}>{children}</FieldContext.Provider> */}
    </form>
  );
}
