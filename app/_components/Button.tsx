import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  children: React.ReactNode; // The button label/content
};

// A styled button component with two variations based on the 'type' prop.
function Button({ children, type = "submit", ...props }: ButtonProps) {
  const baseClasses =
    "py-3 px-0 inline-flex transition-all rounded items-center justify-center text-xl font-medium shadow-sm";
  const buttonClasses =
    type === "submit"
      ? "text-purple-50 bg-purple-600 hover:bg-purple-700"
      : "text-gray-600 bg-gray-100 border border-gray-200 hover:bg-gray-200";
  return (
    <button
      type={type}
      className={`${baseClasses} ${buttonClasses}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
