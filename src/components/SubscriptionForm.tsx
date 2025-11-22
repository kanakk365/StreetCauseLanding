"use client";

import { FormEvent, useState } from "react";
import ThemedDropdown from "@/components/ThemedDropdown";
import SuccessModal from "@/components/SuccessModal";

const subscriptionPlans = [
  { label: "Monthly", value: "MONTHLY" },
  { label: "Quarterly", value: "QUARTERLY" },
  { label: "Annual", value: "ANNUAL" },
];
const subscriptionDurations = [
  { label: "3 Months", value: "3 months" },
  { label: "6 Months", value: "6 months" },
  { label: "12 Months", value: "12 months" },
];
const idProofTypes = [
  { label: "Aadhaar", value: "AADHAAR" },
  { label: "PAN", value: "PAN" },
  { label: "Passport", value: "PASSPORT" },
];
const countryCodes = [
  { label: "🇮🇳 +91", value: "+91" },
  { label: "🇺🇸 +1", value: "+1" },
  { label: "🇬🇧 +44", value: "+44" },
];

type DonationType = "subscribe" | "one-time";

export default function SubscriptionForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [donationType, setDonationType] = useState<DonationType>("subscribe");
  
  // Form state
  const [fullName, setFullName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [address, setAddress] = useState("");
  const [plan, setPlan] = useState("");
  const [subscriptionDuration, setSubscriptionDuration] = useState("");
  const [amount, setAmount] = useState("");
  const [referredBy, setReferredBy] = useState("");
  const [idProofType, setIdProofType] = useState("");
  const [idProofNumber, setIdProofNumber] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      let response;
      let requestBody;

      if (donationType === "subscribe") {
        requestBody = {
          fullName,
          countryCode,
          phoneNumber,
          email,
          occupation,
          address,
          plan,
          subscriptionDuration,
          referredBy,
          idProofType,
          idProofNumber,
        };

        response = await fetch("https://scapi.elitceler.com/api/v1/payments/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });
      } else {
        requestBody = {
          fullName,
          countryCode,
          phoneNumber,
          email,
          occupation,
          address,
          amount: parseInt(amount, 10),
          referredBy,
          idProofType,
          idProofNumber,
        };

        response = await fetch("https://scapi.elitceler.com/api/v1/payments/one-time", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to process donation. Please try again.");
      }

      await response.json();
      setShowSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <section className="mx-auto mt-16 w-full max-w-3xl px-4 sm:px-8 md:px-12 lg:px-20 mb-20">
        <div className="rounded-4xl bg-emerald-50/70 px-6 sm:px-10 md:px-16 py-8 shadow-inner shadow-emerald-100">
          <div className="space-y-2 text-center">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1ba574]">
              <span className="text-2xl">❤</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold uppercase tracking-[0.2em] sm:tracking-[0.35em] text-[#1ba574]">
              Donate for a Cause
            </h2>
            <p className="text-sm text-slate-600">
              Your small step can make a big difference.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5 text-left">
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="What's your name?"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="rounded-xl border border-emerald-100 bg-white px-4 py-3 text-sm text-slate-700 focus:border-[#1ba574] focus:outline-none"
              />
              <div className="flex flex-col sm:flex-row gap-3">
                <ThemedDropdown
                  placeholder="Country Code"
                  options={countryCodes}
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  required
                  containerClassName="w-full sm:w-36"
                />
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  className="flex-1 rounded-xl border border-emerald-100 bg-white px-4 py-3 text-sm text-slate-700 focus:border-[#1ba574] focus:outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-xl border border-emerald-100 bg-white px-4 py-3 text-sm text-slate-700 focus:border-[#1ba574] focus:outline-none"
              />
              <input
                type="text"
                placeholder="Occupation"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                required
                className="rounded-xl border border-emerald-100 bg-white px-4 py-3 text-sm text-slate-700 focus:border-[#1ba574] focus:outline-none"
              />
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="rounded-xl border border-emerald-100 bg-white px-4 py-3 text-sm text-slate-700 focus:border-[#1ba574] focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-6 text-sm font-semibold text-slate-600">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="donationType"
                  value="subscribe"
                  checked={donationType === "subscribe"}
                  onChange={(e) => setDonationType(e.target.value as DonationType)}
                  className="sr-only"
                />
                <span className={`inline-flex h-4 w-4 items-center justify-center rounded-full border ${
                  donationType === "subscribe" 
                    ? "border-[#1ba574] bg-[#1ba574]" 
                    : "border-slate-300"
                }`}>
                  {donationType === "subscribe" && (
                    <span className="h-2 w-2 rounded-full bg-white" />
                  )}
                </span>
                Subscribe
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="donationType"
                  value="one-time"
                  checked={donationType === "one-time"}
                  onChange={(e) => setDonationType(e.target.value as DonationType)}
                  className="sr-only"
                />
                <span className={`inline-flex h-4 w-4 items-center justify-center rounded-full border ${
                  donationType === "one-time" 
                    ? "border-[#1ba574] bg-[#1ba574]" 
                    : "border-slate-300"
                }`}>
                  {donationType === "one-time" && (
                    <span className="h-2 w-2 rounded-full bg-white" />
                  )}
                </span>
                One-Time
              </label>
            </div>

            {donationType === "subscribe" ? (
              <div className="grid gap-4 sm:grid-cols-2">
                <ThemedDropdown
                  placeholder="Subscription Plan"
                  options={subscriptionPlans}
                  value={plan}
                  onChange={(e) => setPlan(e.target.value)}
                  required
                />
                <ThemedDropdown
                  placeholder="Subscription Duration"
                  options={subscriptionDurations}
                  value={subscriptionDuration}
                  onChange={(e) => setSubscriptionDuration(e.target.value)}
                  required
                />
              </div>
            ) : (
              <div className="grid gap-4">
                <input
                  type="number"
                  placeholder="Amount (₹)"
                  min="1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                  className="rounded-xl border border-emerald-100 bg-white px-4 py-3 text-sm text-slate-700 focus:border-[#1ba574] focus:outline-none"
                />
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              <ThemedDropdown
                placeholder="ID Proof Type"
                options={idProofTypes}
                value={idProofType}
                onChange={(e) => setIdProofType(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="ID Proof Number"
                value={idProofNumber}
                onChange={(e) => setIdProofNumber(e.target.value)}
                required
                className="rounded-xl border border-emerald-100 bg-white px-4 py-3 text-sm text-slate-700 focus:border-[#1ba574] focus:outline-none"
              />
            </div>

            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Referred By"
                value={referredBy}
                onChange={(e) => setReferredBy(e.target.value)}
                className="rounded-xl border border-emerald-100 bg-white px-4 py-3 text-sm text-slate-700 focus:border-[#1ba574] focus:outline-none"
              />
            </div>

            {error && (
              <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="mt-4 w-full rounded-xl bg-[#1ba574] py-3 text-base font-semibold text-white transition hover:bg-[#169366] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Processing..." : "Donate now"}
            </button>
            {donationType === "subscribe" && (
              <button
                type="button"
                className="block w-full text-center text-sm font-semibold text-[#d94841]"
              >
                Cancel Subscription
              </button>
            )}
          </form>
        </div>
      </section>

      <SuccessModal open={showSuccess} onClose={() => setShowSuccess(false)} />
    </>
  );
}
