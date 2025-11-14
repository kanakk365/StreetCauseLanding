"use client";

import { FormEvent, useState } from "react";
import ThemedDropdown from "@/components/ThemedDropdown";
import SuccessModal from "@/components/SuccessModal";

const subscriptionPlans = ["Monthly", "Quarterly", "Annual"];
const subscriptionDurations = ["3 Months", "6 Months", "12 Months"];
const idProofTypes = ["Aadhaar", "PAN", "Passport"];
const countryCodes = [
  { label: "🇮🇳 +91", value: "+91" },
  { label: "🇺🇸 +1", value: "+1" },
  { label: "🇬🇧 +44", value: "+44" },
];

export default function SubscriptionForm() {
  const [showSuccess, setShowSuccess] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowSuccess(true);
  }

  return (
    <>
      <section className="mx-auto mt-16 w-full max-w-3xl px-20 mb-20">
        <div className="rounded-4xl bg-emerald-50/70 px-16 shadow-inner shadow-emerald-100">
        <div className="space-y-2 text-center">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1ba574]">
            <span className="text-2xl">❤</span>
          </div>
          <h2 className="text-2xl font-semibold uppercase tracking-[0.35em] text-[#1ba574]">
            Donate for a Cause
          </h2>
          <p className="text-sm text-slate-600">Your small step can make a big difference.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5 text-left">
          <div className="grid gap-4">
            <input
              type="text"
              placeholder="What’s your name?"
              className="rounded-xl border border-emerald-100 bg-white px-4 py-3 text-sm text-slate-700 focus:border-[#1ba574] focus:outline-none"
            />
            <div className="flex gap-3">
              <ThemedDropdown
                placeholder="Country Code"
                options={countryCodes}
                defaultValue=""
                containerClassName="w-36"
              />
              <input
                type="tel"
                placeholder="Enter your mobile number"
                className="flex-1 rounded-xl border border-emerald-100 bg-white px-4 py-3 text-sm text-slate-700 focus:border-[#1ba574] focus:outline-none"
              />
            </div>
            <input
              type="email"
              placeholder="Email ID"
              className="rounded-xl border border-emerald-100 bg-white px-4 py-3 text-sm text-slate-700 focus:border-[#1ba574] focus:outline-none"
            />
            <input
              type="text"
              placeholder="Occupation"
              className="rounded-xl border border-emerald-100 bg-white px-4 py-3 text-sm text-slate-700 focus:border-[#1ba574] focus:outline-none"
            />
            <input
              type="text"
              placeholder="Address"
              className="rounded-xl border border-emerald-100 bg-white px-4 py-3 text-sm text-slate-700 focus:border-[#1ba574] focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-6 text-sm font-semibold text-slate-600">
            <label className="flex items-center gap-2">
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#1ba574] bg-[#1ba574]">
                <span className="h-2 w-2 rounded-full bg-white" />
              </span>
              Subscribe
            </label>
            <label className="flex items-center gap-2 opacity-60">
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-slate-300" />
              One-Time
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <ThemedDropdown
              placeholder="Subscription Plan"
              options={subscriptionPlans.map((plan) => ({ label: plan, value: plan }))}
              defaultValue=""
            />
            <ThemedDropdown
              placeholder="ID Proof"
              options={idProofTypes.map((proof) => ({ label: proof, value: proof }))}
              defaultValue=""
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <ThemedDropdown
              placeholder="Subscription Duration"
              options={subscriptionDurations.map((duration) => ({ label: duration, value: duration }))}
              defaultValue=""
            />
            <input
              type="text"
              placeholder="Card Number"
              className="rounded-xl border border-emerald-100 bg-white px-4 py-3 text-sm text-slate-700 focus:border-[#1ba574] focus:outline-none"
            />
          </div>

          <div className="grid gap-4">
            <input
              type="text"
              placeholder="Referred By"
              className="rounded-xl border border-emerald-100 bg-white px-4 py-3 text-sm text-slate-700 focus:border-[#1ba574] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full rounded-xl bg-[#1ba574] py-3 text-base font-semibold text-white transition hover:bg-[#169366]"
          >
            Donate now
          </button>
          <button type="button" className="block w-full text-center text-sm font-semibold text-[#d94841]">
            Cancel Subscription
          </button>
        </form>
        </div>
      </section>

      <SuccessModal open={showSuccess} onClose={() => setShowSuccess(false)} />
    </>
  );
}
