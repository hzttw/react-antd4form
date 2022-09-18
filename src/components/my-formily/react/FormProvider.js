import React, { useEffect } from "react";
import { FormContext } from "./context";

export default function FormProvider({ form,children}) {
  useEffect(()=>{
    //这里实现表单挂载卸载
    form.onMount()
    return ()=>{
      form.onUnmount()
    }
  })
  return <FormContext.Provider value={form}>{children}</FormContext.Provider>;
}

