"use client";

import { MouseEvent, ReactNode, useEffect } from "react";

type SuccessModalProps = {
  open: boolean;
  title?: string;
  message?: string;
  ctaLabel?: string;
  onClose: () => void;
  icon?: ReactNode;
};

export default function SuccessModal({
  open,
  title = "Donation Successful!!!",
  message = "Thanks for the support, your donation matters.",
  ctaLabel = "Continue",
  onClose,
  icon,
}: SuccessModalProps) {
  useEffect(() => {
    if (open) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
    return undefined;
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl bg-white px-8 py-10 text-center shadow-2xl"
        onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-[#1ba574]">
          {icon ?? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-8 w-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
            </svg>
          )}
        </div>
        <h4 className="mt-6 text-xl font-semibold text-slate-900">{title}</h4>
        <p className="mt-2 text-sm text-slate-500">{message}</p>
        <button
          onClick={onClose}
          className="mt-6 w-full rounded-full bg-[#1ba574] py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-[#15885f]"
        >
          {ctaLabel}
        </button>
      </div>
    </div>
  );
}
