import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';

export default function RightSideContactWidget({
 email = "enquiry@kbdlandcorp.in", // Change if needed
  whatsappMessage = "Hi! I am interested in your project.",
  className = "",
}) {
  const phone = "91-8383060833";

  const cleanPhone = phone.replace(/[^0-9]/g, ""); // For WhatsApp
  const telPhone = phone.replace(/[^+0-9]/g, "");  // For Call

  const items = [
    {
      id: "whatsapp",
      href: `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      label: "WhatsApp",
      Icon: MessageSquare,
      bg: "bg-green-500",
      newTab: true,
    },
    {
      id: "call",
      href: `tel:${telPhone}`,
      label: "Call",
      Icon: Phone,
      bg: "bg-blue-600",
      newTab: false,
    },
    email && {
      id: "mail",
      href: `mailto:${email}`,
      label: "Mail",
      Icon: Mail,
      bg: "bg-red-500",
      newTab: false,
    },
  ].filter(Boolean);
  return (
    <div
      className={`fixed left bottom-24 z-50 hidden sm:flex flex-col items-start gap-3 ${className}`}
    >
      {items.map(({ id, href, label, Icon, bg }) => (
        <a
          key={id}
          href={href}
          target={href === '#' ? '_self' : '_blank'}
          rel="noopener noreferrer"
          aria-label={label}
          className="group relative flex items-center"
        >
          {/* Tooltip on left */}
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-in-out ml-2 py-1 px-3 rounded-lg text-sm bg-black/80 text-white whitespace-nowrap order-2">
            {label}
          </span>

          {/* Circle Button */}
          <div
            className={`w-12 h-12 rounded-full shadow-2xl flex items-center justify-center text-white transform transition-transform duration-150 hover:scale-105 ${bg} order-1`}
          >
            <Icon size={20} />
          </div>
        </a>
      ))}
    </div>
  );
}
