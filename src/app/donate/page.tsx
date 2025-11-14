import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SubscriptionForm from "@/components/SubscriptionForm";

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-white">
      <Banner />
      <Navbar />
      <Hero
        showActions={false}
        backgroundImage="/donate.png"
        backgroundAlt="Children standing together to represent the donation impact"
        title='" THANKS FOR THE SUPPORT, YOUR DONATION MATTERS "'
        subtitle="Donate For A Cause"
        titleClassName="text-3xl font-semibold uppercase tracking-[0.35em] sm:text-4xl"
        subtitleClassName="text-sm font-semibold uppercase tracking-[0.6em] text-white/80"
      />
      <SubscriptionForm />
    </div>
  );
}
