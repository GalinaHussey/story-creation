import { ReactNode, isValidElement } from "react";

type FormRowProps = {
  label?: string;
  error?: string;
  children: ReactNode;
};

function FormRow({ label, error, children }: FormRowProps) {
  // Check if children is a valid React element and extract id if it exists
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
