import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { FacebookIcon, TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, MediumIcon, LinkedinIcon, YoutubeIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  // {
  //   label: "About",
  //   items: [
  //     {
  //       label: "Contact",
  //       href: "https://docs.pancakeswap.finance/contact-us",
  //     },
  //     {
  //       label: "Blog",
  //       href: "https://medium.com/pancakeswap",
  //     },
  //     {
  //       label: "Community",
  //       href: "https://docs.pancakeswap.finance/contact-us/telegram",
  //     },
  //     {
  //       label: "CAKE",
  //       href: "https://docs.pancakeswap.finance/tokenomics/cake",
  //     },
  //     {
  //       label: "—",
  //     },
  //     {
  //       label: "Online Store",
  //       href: "https://pancakeswap.creator-spring.com/",
  //       isHighlighted: true,
  //     },
  //   ],
  // },
  // {
  //   label: "Help",
  //   items: [
  //     {
  //       label: "Customer",
  //       href: "Support https://docs.pancakeswap.finance/contact-us/customer-support",
  //     },
  //     {
  //       label: "Troubleshooting",
  //       href: "https://docs.pancakeswap.finance/help/troubleshooting",
  //     },
  //     {
  //       label: "Guides",
  //       href: "https://docs.pancakeswap.finance/get-started",
  //     },
  //   ],
  // },
  // {
  //   label: "Developers",
  //   items: [
  //     {
  //       label: "Github",
  //       href: "https://github.com/pancakeswap",
  //     },
  //     {
  //       label: "Documentation",
  //       href: "https://docs.pancakeswap.finance",
  //     },
  //     {
  //       label: "Bug Bounty",
  //       href: "https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty",
  //     },
  //     {
  //       label: "Audits",
  //       href: "https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
  //     },
  //     {
  //       label: "Careers",
  //       href: "https://docs.pancakeswap.finance/hiring/become-a-chef",
  //     },
  //   ],
  // },
];

export const socials = [
  {
    label: "Facebook",
    icon: FacebookIcon,
    href: "https://www.facebook.com/Belifex.BEFX/"
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    href: "https://t.me/belifex_official",
  },
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/BelifexE",
  },
  {
    label: "Linkedin",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/company/belifex/",
  },
  {
    label: "Reddit",
    icon: RedditIcon,
    href: "https://www.reddit.com/r/Belifex/",
  },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/belifex_blockchain",
  },
  {
    label: "Youtube",
    icon: YoutubeIcon,
    href: "https://www.youtube.com/@belifex",
  },
  // {
  //   label: "Discord",
  //   icon: DiscordIcon,
  //   href: "https://discord.gg/pancakeswap",
  // },
  {
    label: "Medium",
    icon: MediumIcon,
    href: "https://belifex.medium.com",
  },
  {
    label: "Github",
    icon: GithubIcon,
    href: "https://github.com/pancakeswap/",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
