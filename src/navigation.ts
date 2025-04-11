import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/#home',
    },
    {
      text: 'Services',
      href: '/#services',
    },
    {
      text: 'About',
      href: '/#about',
    },
    {
      text: 'Process',
      href: '/#process',
    },
    {
      text: 'Team',
      href: '/#team',
    },
    {
      text: 'FAQ',
      href: '/#faq',
    },
    {
      text: 'Contact',
      href: '/#contact',
    },
  ],
  actions: [{ text: 'Get Started', href: '/#contact', target: '_self' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/#about' },
        { text: 'Our Team', href: '/#team' },
        { text: 'Our Values', href: '/#values' },
        { text: 'Contact', href: '/#contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { text: 'Software Development', href: '/#services' },
        { text: 'AI & Machine Learning', href: '/#services' },
        { text: 'Mobile Development', href: '/#services' },
        { text: 'Cloud Solutions', href: '/#services' },
        { text: 'Digital Transformation', href: '/#services' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'FAQ', href: '/#faq' },
        { text: 'Contact Us', href: '/#contact' },
        { text: 'Our Process', href: '/#process' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Terms', href: '/terms' },
        { text: 'Privacy Policy', href: '/privacy' },
        { text: 'Cookies', href: '/cookies' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: '/terms' },
    { text: 'Privacy Policy', href: '/privacy' },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm"></span>
    <span>Emathrix Technologies</span> · All rights reserved. © ${new Date().getFullYear()}
  `,
};
