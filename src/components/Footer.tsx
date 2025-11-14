import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, X } from "lucide-react";

const quickLinks = [
  "Home",
  "About Us",
  "Our Projects",
  "News & Updates",
  "Get Involved",
  "Contact Us",
];

const involvementLinks = [
  "Volunteer With Us",
  "Donate",
  "Become a Partner",
];

const socialLinks = [
  { href: "https://www.facebook.com", label: "Facebook", Icon: Facebook },
  { href: "https://www.instagram.com", label: "Instagram", Icon: Instagram },
  { href: "https://www.x.com", label: "X", Icon: X },
];

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-[#1ba574] to-[#21759c] mt-20 text-slate-100">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-4 sm:grid-cols-2 lg:grid-cols-4">
        <div >
          <div className="relative size-40">
            <Image
              src="/whiteLogo.png"
              alt="Street Cause India logo"
              fill
              className="object-contain"
              sizes="128px"
            />
          </div>
          <p className="text-sm text-slate-200">
            A youth-driven NGO dedicated to community service, empowerment, and
            creating lasting change across India.
          </p>
          <div className="mt-2 flex gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <Link
                key={label}
                href={href}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <h5 className="text-lg font-semibold text-white">Quick Links</h5>
          <ul className="space-y-3 text-sm text-slate-200">
            {quickLinks.map((item) => (
              <li key={item}>
                <Link href="#" className="transition hover:text-emerald-300">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5">
          <h5 className="text-lg font-semibold text-white">Get Involved</h5>
          <ul className="space-y-3 text-sm text-slate-200">
            {involvementLinks.map((item) => (
              <li key={item}>
                <Link href="#" className="transition hover:text-emerald-300">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h5 className="text-lg font-semibold text-white">Get in touch</h5>
          <p className="text-sm text-slate-200">
            Ft.No.205 (Moghal Emami Complex), St.No.7, Veer Nagar, Chintal
            Basthi Road, Khairtabad, Hyderabad, Telangana.
          </p>
          <div className="space-y-2 text-sm text-white">
            <p className="font-semibold">+91 96666 83722</p>
            <p className="font-semibold">streetcause@gmail.com</p>
          </div>
          <div className="relative h-32 w-full overflow-hidden rounded-xl">
            <Image
              src="/map.png"
              alt="Map showing Street Cause India location"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 250px"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-[#0a9966] py-3 text-center text-sm text-white">
        © 2025 Street Cause. All Rights Reserved.
      </div>
    </footer>
  );
}
