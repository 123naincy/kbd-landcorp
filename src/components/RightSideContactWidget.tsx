import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';

export default function RightSideContactWidget({
  phone = '',
  email = '',
  whatsappMessage = 'Hi!',
  className = '',
}) {
  const whatsappHref = phone
    ? `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
        whatsappMessage
      )}`
    : '#';
  const telHref = phone ? `tel:${phone.replace(/[^+0-9]/g, '')}` : '#';
  const mailHref = email ? `mailto:${email}` : '#';

  const items = [
    {
      id: 'whatsapp',
      href: whatsappHref,
      label: 'WhatsApp',
      Icon: MessageSquare,
      bg: 'bg-green-500',
    },
    {
      id: 'call',
      href: telHref,
      label: 'Call',
      Icon: Phone,
      bg: 'bg-blue-600',
    },
    {
      id: 'mail',
      href: mailHref,
      label: 'Mail',
      Icon: Mail,
      bg: 'bg-red-500',
    },
  ];

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
