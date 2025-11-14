"use client";

import { SelectHTMLAttributes } from "react";

type DropdownOption = {
  label: string;
  value: string;
};

type ThemedDropdownProps = {
  label?: string;
  helperText?: string;
  placeholder?: string;
  options: DropdownOption[];
  containerClassName?: string;
  variant?: "light" | "dark";
} & SelectHTMLAttributes<HTMLSelectElement>;

const variantClasses = {
  light: {
    select:
      "rounded-xl border border-emerald-100 bg-white px-4 py-3 text-sm text-slate-700 focus:border-[#1ba574]",
    caret: "text-[#1ba574]",
  },
  dark: {
    select:
      "rounded-2xl border border-white/40 bg-white/20 px-4 py-3 text-base font-medium text-white",
    caret: "text-white",
  },
};

export default function ThemedDropdown({
  label,
  helperText,
  placeholder = "Select an option",
  options,
  containerClassName = "",
  className = "",
  variant = "light",
  ...rest
}: ThemedDropdownProps) {
  const styles = variantClasses[variant];
  return (
    <div className={`flex flex-col gap-2 ${containerClassName}`}>
      {label ? (
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#1ba574]">
          {label}
        </span>
      ) : null}
      <div className="relative">
        <select
          className={`w-full appearance-none transition focus:outline-none ${styles.select} ${className}`}
          {...rest}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value} className="text-slate-800">
              {option.label}
            </option>
          ))}
        </select>
        <svg
          className={`pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 ${styles.caret}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
        </svg>
      </div>
      {helperText ? (
        <p className="text-xs text-slate-500">{helperText}</p>
      ) : null}
    </div>
  );
}
