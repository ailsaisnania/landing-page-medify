'use client'
import clsx from "clsx";
import React, { forwardRef } from "react";

const possibleButtonTypes = ["default", "alternate"] as const;

type ButtonType = (typeof possibleButtonTypes)[number];

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonType?: ButtonType;
};

const Button: React.FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(function ButtonRaw(
  { className, children, buttonType = "default", ...props },
  ref
) {
  const buttonTextClasses = "text-sm lg:text-xl font-bold";
  const buttonColorAlternateClasses =
    "bg-medify-white text-medify-blue-500 hover:bg-medify-blue-500 hover:text-medify-white active:bg-medify-blue-500 active:text-medify-white";
  const buttonColorDefaultClasses =
    "bg-medify-blue-500 text-medify-white hover:bg-medify-blue-300 active:bg-medify-blue-300";

  return (
    <button
      ref={ref}
      className={clsx(
        "btn px-6 py-2 rounded-lg lg:rounded-2xl button-text border-none normal-case min-h-[3.5rem] h-fit",
        buttonType === "default"
          ? buttonColorDefaultClasses
          : buttonType === "alternate"
          ? buttonColorAlternateClasses
          : "",
        buttonTextClasses,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;