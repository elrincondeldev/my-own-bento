import { cn } from "@/lib/utils";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import Marquee from "@/components/ui/marquee";

const instagramFiles = [
  {
    image: "/instagram1.png",
  },
  {
    image: "/Instagram2.png",
  },
  {
    image: "/Instagram3.png",
  },
  {
    image: "/Instagram4.png",
  },
  {
    image: "/Instagram5.png",
  },
];

const tiktokFiles = [
  {
    image: "/tiktok1.png",
  },
  {
    image: "/tiktok2.png",
  },
  {
    image: "/tiktok3.png",
  },
  {
    image: "/tiktok4.png",
  },
  {
    image: "/tiktok5.png",
  },
];

const youtubeFiles = [
  {
    image: "/youtube1.jpg",
  },
  {
    image: "/youtube2.webp",
  },
  {
    image: "/youtube3.webp",
  },
  {
    image: "/youtube4.jpg",
  },
  {
    image: "/youtube5.webp",
  },
];

const features = [
  {
    Icon: "/instagram_icon.svg",
    name: "Instagram",
    description: "153k seguidores",
    href: "https://www.instagram.com/elrincondeldev/",
    cta: "Sígueme!",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {instagramFiles.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative h-60 w-40 cursor-pointer overflow-hidden rounded-xl border",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <img src={f.image} alt="" className="rounded-md" />
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: "/tiktok_icon.svg",
    name: "TikTok",
    description: "177k segudiores",
    href: "https://www.tiktok.com/@elrincondeldev",
    cta: "Sígueme!",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {tiktokFiles.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative h-60 w-40 cursor-pointer overflow-hidden rounded-xl border",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <img src={f.image} alt="" className="rounded-md" />
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: "/youtube_icon.svg",
    name: "YouTube",
    description: "36k seguidores",
    href: "https://www.youtube.com/@elrincondeldev",
    cta: "Sígueme!",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:35s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {youtubeFiles.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative h-60 w-72 cursor-pointer overflow-hidden rounded-xl border",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <img src={f.image} alt="" className="rounded-md" />
          </figure>
        ))}
      </Marquee>
    ),
  },
];

export function BentoDemo() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
