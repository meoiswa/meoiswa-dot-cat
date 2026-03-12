export const contactMethods = [
  {
    icon: 'github',
    text: 'meoiswa',
    href: 'https://github.com/meoiswa',
    label: 'GitHub',
  },
  {
    icon: 'bluesky',
    text: '@meoiswa.cat',
    href: 'https://bsky.app/profile/meoiswa.cat',
    label: 'Bluesky',
  },
  {
    icon: 'discord',
    text: '@meoiswa',
    href: 'https://discord.com/users/142062233638141952',
    label: 'Discord',
  },
  {
    icon: 'kofi',
    text: 'meoiswa',
    href: 'https://ko-fi.com/meoiswa',
    label: 'Ko-fi',
  },
  {
    icon: 'patreon',
    text: 'meoiswa',
    href: 'https://patreon.meoiswa.cat',
    label: 'Patreon',
  },
];

export interface Contact {
  icon: string;
  text: string;
  href: string;
  label: string;
}
