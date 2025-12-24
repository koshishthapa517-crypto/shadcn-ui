import React from 'react';
import Link from 'next/link';

const page = () => {
  const links = [
    { href: '/accordion', label: '1.accordion' },
    { href: '/alert', label: '2.alert' },
    { href: '/alert-dialog', label: '3.alert-dialog' },
    { href: '/aspect-ratio', label: '4.aspect-ratio' },
    { href: '/avatar', label: '5.avatar' },
    { href: '/card', label: '6.card' },
    { href: '/badge',label: '7.badge'},
    { href: '/breadcrumb',label: '8.breadcrumb'},
    { href: '/button',label: '9.button'},
    { href: '/button-group',label: '10.button-group'},
    { href: '/calendar',label: '11.calendar'},
    { href: '/carousel',label: '12.carousel'},
    { href: '/checkbox',label: '13.checkbox'},
    { href: '/collapsible',label: '14.collapsible'},
    { href: '/command',label: '15.command'},
    { href: '/context-menu',label: '16.context-menu'},
    { href: '/dialog',label: '17.dialog'}, 
    { href: '/drawer',label: '18.drawer'}, 
    { href: '/dropdown-menu',label: '19.dropdown-menu'},
    { href: '/empty',label: '20.empty'},
    { href: '/input',label: '21.input'},
    { href: '/label',label: '22.label'},
    { href: '/separator',label: '23.separator'},
  ];

  return (
    <div>
      {links.map((link, index) => (
        <div key={index}>
          <Link href={link.href}>{link.label}</Link>
        </div>
      ))}
    </div>
  );
};

export default page;