export const contactMethods = [
  {
    icon: 'Github',
    text: 'meoiswa',
    href: 'https://github.com/meoiswa',
    label: 'GitHub',
  },
  {
    icon: 'Bluesky',
    text: 'meoiswa.cat',
    href: 'https://bsky.app/profile/meoiswa.cat',
    label: 'Bluesky',
  },
  {
    icon: 'Discord',
    text: 'meoiswa',
    href: 'https://discord.com/users/142062233638141952',
    label: 'Discord',
  },
  {
    icon: 'Telegram',
    text: 'meoiswa',
    href: 'https://t.me/meoiswa',
    label: 'Telegram',
  },
];

export interface Contact {
  icon: string;
  text: string;
  href: string;
  label: string;
}
