import {useContext} from "react";
import {observer, FieldContext} from "@/which";

const FormItem = observer(({children}) => {
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
