import InsuranceContent from "@/components/InsuranceContent";


// NAVIGATION
export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'For Me' },
    { href: '/', key: 'services', label: 'For My Business' },
    //{ href: '/openinsurechat', key: 'InsureChat', label: 'InsureChat' },
    //{ href: '/', key: 'pricing ', label: `What's new`},
    //{ href: '/', key: 'contact_us', label: 'Contact Us' },
  ];


  // FEATURES SECTION
export const FEATURES = [
  {
    title: 'Link and View all your Active Policies',
    icon: '/map.svg',
    variant: 'green',
    description:
      'Easily connect and access all your active insurance policies in one place. Stay updated with real-time policy details, coverage information, and important dates—all at your fingertips.',
  },
  {
    title: 'Update your KYC Documents',
    icon: '/tech.svg',
    variant: 'green',
    description:
      'Quickly upload and manage your Know Your Customer (KYC) documents within the app. Ensure your profile stays up to date with secure, hassle-free document submission for a smooth experience.',
  },
  {
    title: 'Pay',
    icon: '/location.svg',
    variant: 'orange',
    description:
      'Conveniently pay your premiums or outstanding balances directly through the app. Choose from multiple secure payment options for a fast and seamless transaction experience.',
  },
  {
    title: 'Contact Customer Service',
    icon: '/calendar.svg',
    variant: 'green',
    description:
      "Get immediate support with our in-app customer service feature. Reach out to our dedicated team via chat, call, or email, and receive personalized assistance for all your insurance needs.",
  }
];


// FOOTER SECTION
export const FOOTER_LINKS = [
    {
      title: 'Learn More',
      links: [
        'About ESRIC',
        'Press Releases',
        'Vacancies',
        'Privacy Policy',
      ],
    },
    {
      title: 'Our Community',
      links: ['Golf', 'Corporate Social Investment'],
    },
];

export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
      { label: 'Customer Service', value: '(+268) 7602 6363 / (+268) 7602 6464' },
      { label: 'Telephone', value: '(+268) 2408 1600 / (+268) 2505 5037' },
      { label: 'Email', value: 'info@sric.sz' },
    ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    '/instagram.svg',
    '/facebook.svg',
    '/linkedin.svg',
    '/x-logo-icon.svg'
  ],
};
