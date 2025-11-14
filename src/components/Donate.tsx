"use client";

import { FormEvent, useState } from "react";
import ThemedDropdown from "@/components/ThemedDropdown";
import SuccessModal from "@/components/SuccessModal";

const donorTypes = [
  { label: "Student", value: "student" },
  { label: "Alumni", value: "alumni" },
  { label: "Individual Donor", value: "donor" },
  { label: "Corporate Partner", value: "partner" },
];

const paymentModes = [
  { label: "UPI", value: "upi" },
  { label: "Net Banking", value: "netbanking" },
  { label: "Debit / Credit Card", value: "card" },
];

export default function Donate() {
  const [showSuccess, setShowSuccess] = useState(false);

  function handleDonationSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowSuccess(true);
  }
  return (
    <section
      id="donate"
      className="relative mt-24 overflow-hidden bg-linear-to-r from-[#1ba574] to-[#21759c] py-24"
    >
      <div className="absolute inset-y-0 right-0 z-0 w-1/2 translate-y-12 transform bg-emerald-400/40 blur-3xl" />
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-6 text-center text-white lg:flex-row lg:items-start lg:text-left">
        <div className="relative z-10 w-full max-w-xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.5em] text-white/80">
            Secure Your Donation
          </p>
          <h3 className="text-4xl font-semibold leading-tight">
            Your contribution changes lives in just a few weeks
          </h3>
          <p className="text-lg leading-8 text-white/80">
            Every rupee you give powers student changemakers to deliver
            education, healthcare, and relief where it matters most.
          </p>
        </div>

        <form
          onSubmit={handleDonationSubmit}
          className="relative z-10 w-full max-w-2xl rounded-3xl bg-white/10 p-8 backdrop-blur"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-left text-sm font-semibold uppercase tracking-[0.35em] text-white">
              Name
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-2xl border border-white/40 bg-white/20 px-4 py-3 text-base font-medium text-white placeholder:text-white/70 focus:border-white focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-2 text-left text-sm font-semibold uppercase tracking-[0.35em] text-white">
              Mobile Number
              <input
                type="tel"
                placeholder="Enter mobile number"
                className="w-full rounded-2xl border border-white/40 bg-white/20 px-4 py-3 text-base font-medium text-white placeholder:text-white/70 focus:border-white focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-2 text-left text-sm font-semibold uppercase tracking-[0.35em] text-white">
              Mail ID
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-white/40 bg-white/20 px-4 py-3 text-base font-medium text-white placeholder:text-white/70 focus:border-white focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-2 text-left text-sm font-semibold uppercase tracking-[0.35em] text-white">
              Donation Amount (min ₹100)
              <input
                type="number"
                min={100}
                step={100}
                placeholder="₹100"
                className="w-full rounded-2xl border border-white/40 bg-white/20 px-4 py-3 text-base font-medium text-white placeholder:text-white/70 focus:border-white focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-2 text-left text-sm font-semibold uppercase tracking-[0.35em] text-white">
              ID
              <ThemedDropdown
                variant="dark"
                placeholder="Select ID Type"
                options={donorTypes}
                defaultValue=""
              />
            </label>
            <label className="flex flex-col gap-2 text-left text-sm font-semibold uppercase tracking-[0.35em] text-white">
              Payment Mode
              <ThemedDropdown
                variant="dark"
                placeholder="Select Payment Mode"
                options={paymentModes}
                defaultValue=""
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-white py-4 text-lg font-semibold uppercase tracking-[0.35em] text-emerald-700 shadow-lg transition hover:bg-emerald-200/90"
          >
            Donate now
          </button>
        </form>
      </div>

      <SuccessModal open={showSuccess} onClose={() => setShowSuccess(false)} />
    </section>
  );
}
