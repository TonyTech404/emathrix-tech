import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('#home'),
    },
    {
      text: 'Services',
      href: getPermalink('#services'),
    },
    {
      text: 'About',
      href: getPermalink('#about'),
    },
    {
      text: 'Process',
      href: getPermalink('#process'),
    },
    {
      text: 'Team',
      href: getPermalink('#team'),
    },
    {
      text: 'FAQ',
      href: getPermalink('#faq'),
    },
    {
      text: 'Contact',
      href: getPermalink('#contact'),
    },
  ],
  actions: [{ text: 'Get Started', href: getPermalink('#contact'), target: '_self' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: getPermalink('#about') },
        { text: 'Our Team', href: getPermalink('#team') },
        { text: 'Our Values', href: getPermalink('#values') },
        { text: 'Contact', href: getPermalink('#contact') },
      ],
    },
    {
      title: 'Services',
      links: [
        { text: 'Software Development', href: getPermalink('#services') },
        { text: 'AI & Machine Learning', href: getPermalink('#services') },
        { text: 'Mobile Development', href: getPermalink('#services') },
        { text: 'Cloud Solutions', href: getPermalink('#services') },
        { text: 'Digital Transformation', href: getPermalink('#services') },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'FAQ', href: getPermalink('#faq') },
        { text: 'Contact Us', href: getPermalink('#contact') },
        { text: 'Our Process', href: getPermalink('#process') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Terms', href: getPermalink('terms') },
        { text: 'Privacy Policy', href: getPermalink('privacy') },
        { text: 'Cookies', href: getPermalink('cookies') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('terms') },
    { text: 'Privacy Policy', href: getPermalink('privacy') },
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
