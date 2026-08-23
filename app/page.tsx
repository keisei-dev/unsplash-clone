import CommunitySection from "@/components/CommunitySection";
import ExploreSection from "@/components/ExploreSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SubscribeSection from "@/components/SubscribeSection";
import TopicsSection from "@/components/TopicsSection";

const navLinks = [
  { label: "Explore", href: "#explore" },
  { label: "Topics", href: "#topics" },
  { label: "Community", href: "#community" },
  { label: "Subscribe", href: "#subscribe" },
];

const topicLinks = [
  { label: "Featured", href: "#hero" },
  { label: "Nature", href: "#topics" },
  { label: "Wallpapers", href: "#topics" },
  { label: "Travel", href: "#topics" },
  { label: "Architecture", href: "#topics" },
  { label: "People", href: "#topics" },
  { label: "Film", href: "#topics" },
];

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Explore photos", href: "#explore" },
      { label: "Topics", href: "#topics" },
      { label: "Collections", href: "#explore" },
      { label: "Unsplash+", href: "#subscribe" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Become a contributor", href: "#community" },
      { label: "Trends", href: "#topics" },
      { label: "History", href: "#community" },
      { label: "Blog", href: "#community" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#hero" },
      { label: "Advertise", href: "#subscribe" },
      { label: "Press", href: "#community" },
      { label: "Join the team", href: "#subscribe" },
    ],
  },
];

const hero = {
  id: "hero",
  headline: "The internet’s source for visuals.",
  subheadline: "Powered by creators everywhere.",
  searchPlaceholder: "Search photos and illustrations",
  trendingLabel: "See trending searches",
  trendingHref: "#explore",
  sponsorLabel: "Supported by Squarespace",
  image: {
    src: "https://images.unsplash.com/photo-1501785888041-af3ee285d569?auto=format&fit=crop&w=2400&q=80",
    alt: "Misty mountain lake surrounded by evergreen forest",
  },
  photographer: {
    name: "Pietro De Grandi",
    href: "#community",
  },
};

const explorePhotos = [
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    alt: "Sunlight through evergreen forest",
    photographer: "David Marcu",
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
    alt: "Sunbeams in a dense green forest",
    photographer: "Veeterzy",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    alt: "Tropical beach with clear turquoise water",
    photographer: "Sean Oulashin",
  },
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
    alt: "Snowy mountain peaks under a starry sky",
    photographer: "Benjamin Voros",
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
    alt: "Fog covering mountain ridges at dawn",
    photographer: "Luke Stackpoole",
  },
  {
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1200&q=80",
    alt: "Waterfall cascading into a rocky gorge",
    photographer: "Blake Richard Verdoorn",
  },
  {
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80",
    alt: "Green hillside under a dramatic sky",
    photographer: "Robert Lukeman",
  },
  {
    src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80",
    alt: "Mountain range at dusk with purple light",
    photographer: "Mars Vilaubi",
  },
  {
    src: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80",
    alt: "City skyline glowing at night",
    photographer: "Pedro Lastra",
  },
];

const topics = [
  {
    name: "Nature",
    description: "Landscapes and wild places",
    href: "#explore",
    image: {
      src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1000&q=80",
      alt: "Mountain lake reflecting pine trees",
    },
  },
  {
    name: "Wallpapers",
    description: "Desktop and mobile backgrounds",
    href: "#explore",
    image: {
      src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1000&q=80",
      alt: "Canoe on a calm alpine lake",
    },
  },
  {
    name: "Travel",
    description: "Places worth wandering",
    href: "#explore",
    image: {
      src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80",
      alt: "Open suitcase packed for travel",
    },
  },
  {
    name: "Architecture",
    description: "Forms, spaces, and structure",
    href: "#explore",
    image: {
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1000&q=80",
      alt: "Modern building facade with geometric windows",
    },
  },
  {
    name: "People",
    description: "Portraits and everyday life",
    href: "#explore",
    image: {
      src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80",
      alt: "Friends laughing together outdoors",
    },
  },
  {
    name: "Film",
    description: "Analog textures and tones",
    href: "#explore",
    image: {
      src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=80",
      alt: "Photographer holding a camera at golden hour",
    },
  },
  {
    name: "Street Photography",
    description: "Life in motion",
    href: "#explore",
    image: {
      src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1000&q=80",
      alt: "City street with traffic and buildings",
    },
  },
  {
    name: "3D Renders",
    description: "Digital worlds and objects",
    href: "#explore",
    image: {
      src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
      alt: "Abstract colorful 3D shapes",
    },
  },
];

const community = {
  id: "community",
  title: "Contribute your first photo",
  description:
    "Join a community of creators sharing free, high-resolution images used by millions of people every day.",
  ctaLabel: "Submit a photo",
  ctaHref: "#subscribe",
  leftImage: {
    src: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1000&q=80",
    alt: "Camera lens close-up",
  },
  rightImage: {
    src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80",
    alt: "Vintage camera on a wooden table",
  },
  highlights: [
    {
      name: "Annie Spratt",
      role: "Top contributor · Nature & textures",
      href: "#explore",
      avatar: {
        src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
        alt: "Portrait of Annie Spratt",
      },
    },
    {
      name: "Jasper Boer",
      role: "Featured photographer · Travel",
      href: "#explore",
      avatar: {
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
        alt: "Portrait of Jasper Boer",
      },
    },
    {
      name: "Surface",
      role: "Studio collective · Product & people",
      href: "#explore",
      avatar: {
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
        alt: "Portrait of a Surface contributor",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <Navbar
        brand="Unsplash"
        links={navLinks}
        topics={topicLinks}
        searchPlaceholder="Search photos and illustrations"
        loginLabel="Log in"
        joinLabel="Join free"
        submitLabel="Submit a photo"
      />

      <main>
        <Hero {...hero} />

        <ExploreSection
          id="explore"
          title="Explore"
          description="Browse a curated mix of free photos from creators around the world."
          photos={explorePhotos}
        />

        <TopicsSection
          id="topics"
          title="Topics"
          description="Explore curated collections organized by theme, mood, and creative use."
          topics={topics}
        />

        <CommunitySection {...community} />

        <SubscribeSection
          id="subscribe"
          title="Stay in the loop"
          description="Get the latest photos, stories, and product updates from creators around the world."
          placeholder="Enter your email"
          buttonLabel="Subscribe"
          successMessage="Thanks for subscribing!"
        />
      </main>

      <Footer
        brand="Unsplash"
        tagline="Make something awesome with free high-resolution photos from creators around the world."
        columns={footerColumns}
        socialLinks={[
          { label: "Twitter", href: "#community" },
          { label: "Facebook", href: "#community" },
          { label: "Instagram", href: "#community" },
        ]}
        copyright="Make something awesome."
      />
    </>
  );
}
