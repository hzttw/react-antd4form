import {useParentForm} from "@/which";

export default function Submit({
  onClick,
  onSubmit,
  onSubmitSuccess,
  onSubmitFailed,
  children,
}) {
  const form = useParentForm();

  return (
    <button
      onClick={(e) => {
        if (onClick) {
            if (onClick(e) === false) return
          }
          if (onSubmit) {
            form.submit(onSubmit).then(onSubmitSuccess).catch(onSubmitFailed)
          }
        }
      }
      >
      {children}
    </button>
  );
}

