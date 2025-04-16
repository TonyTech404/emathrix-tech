import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/emathrix-tech/#home',
    },
    {
      text: 'Services',
      href: '/emathrix-tech/#services',
    },
    {
      text: 'About',
      href: '/emathrix-tech/#about',
    },
    {
      text: 'Process',
      href: '/emathrix-tech/#process',
    },
    {
      text: 'Team',
      href: '/emathrix-tech/#team',
    },
    {
      text: 'FAQ',
      href: '/emathrix-tech/#faq',
    },
    {
      text: 'Contact',
      href: '/emathrix-tech/#contact',
    },
  ],
  actions: [{ text: 'Get Started', href: '/emathrix-tech/#contact', target: '_self' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/emathrix-tech/#about' },
        { text: 'Our Team', href: '/emathrix-tech/#team' },
        { text: 'Our Values', href: '/emathrix-tech/#values' },
        { text: 'Contact', href: '/emathrix-tech/#contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { text: 'Software Development', href: '/emathrix-tech/#services' },
        { text: 'AI & Machine Learning', href: '/emathrix-tech/#services' },
        { text: 'Mobile Development', href: '/emathrix-tech/#services' },
        { text: 'Cloud Solutions', href: '/emathrix-tech/#services' },
        { text: 'Digital Transformation', href: '/emathrix-tech/#services' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'FAQ', href: '/emathrix-tech/#faq' },
        { text: 'Contact Us', href: '/emathrix-tech/#contact' },
        { text: 'Our Process', href: '/emathrix-tech/#process' },
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
