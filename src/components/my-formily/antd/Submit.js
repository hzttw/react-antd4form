import { useParentForm } from "@/which";
import React from "react";

export default function Submit({
  children,
  onSubmit,
  onSubmitSuccess,
  onSubmitFailed,
  onClick,
}) {
  //获取form表单
  const form = useParentForm();
  return (
    <button
      onClick={(e) => {
        if (onClick) {
          if (onClick(e) === false) {
            return;
          }
        }
        if (onSubmit) {
          form.submit(onSubmit).then(onSubmitSuccess).catch(onSubmitFailed);
        }
      }}
    >
      {children}
    </button>
  );
}
