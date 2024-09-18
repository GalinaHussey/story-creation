import { ReactNode, isValidElement } from "react";

type FormRowProps = {
  label?: string; // Label for the input
  error?: string; // Error message (if any)
  children: ReactNode; // Input element
};

// A form row with a label, input (or any child element), and optional error message.
function FormRow({ label, error, children }: FormRowProps) {
  const childId = isValidElement(children) ? children.props.id : undefined;

  return (
    <div
      className="grid items-center gap-10 py-7 px-0"
      style={{ gridTemplateColumns: "24rem 1fr 1.2fr" }}
    >
      <label className="font-medium text-lg text-gray-900" htmlFor={childId}>
        {label}
      </label>
      {children}
      {error && <span className="text-xl text-red-700">{error}</span>}
    </div>
  );
}

export default FormRow;
