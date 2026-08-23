import CommunitySection from "@/components/CommunitySection";
import ExploreSection from "@/components/ExploreSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import SubscribeSection from "@/components/SubscribeSection";
import TopicsSection from "@/components/TopicsSection";

const navLinks = [
  { label: "Explore", href: "#explore" },
  { label: "Topics", href: "#topics" },
  { label: "Community", href: "#community" },
];

const topicLinks = [
  { label: "Featured" },
  { label: "Summer" },
  { label: "Wallpapers" },
  { label: "3D Renders" },
  { label: "Nature" },
  { label: "Textures" },
  { label: "Film" },
  { label: "Architecture" },
  { label: "Street Photography" },
  { label: "Experimental" },
  { label: "Travel" },
  { label: "People" },
];

const sidebarLinks = [
  { label: "Photos", href: "#explore", icon: "photos" as const },
  { label: "Contribute", href: "#community", icon: "contribute" as const },
  { label: "Explore", href: "#explore", icon: "explore" as const },
  { label: "Collections", href: "#topics", icon: "collections" as const },
  { label: "Downloads", href: "#community", icon: "download" as const },
  { label: "Bookmarks", href: "#topics", icon: "bookmark" as const },
  { label: "Account", href: "#subscribe", icon: "account" as const },
  { label: "Language", href: "#hero", icon: "language" as const },
  { label: "More", href: "#hero", icon: "more" as const },
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
  brand: "Unsplash",
  headline: "The internet’s source for visuals.",
  headlineLine2: "Powered by creators everywhere.",
  searchPlaceholder: "Search photos and illustrations",
  promoTitle: "New premium visuals every month.",
  promoSubtitle: "Available to Unsplash+\nmembers.",
  promoCta: "Get Unsplash+",
  promoHref: "#subscribe",
  promoImages: [
    {
      src: "/images/cover-nature.jpg",
      alt: "",
      className: "-top-6 -left-8 h-40 w-32 -rotate-12 opacity-45 blur-md",
    },
    {
      src: "/images/photo-city.jpg",
      alt: "",
      className: "-top-8 right-2 h-36 w-28 rotate-12 opacity-40 blur-md",
    },
    {
      src: "/images/cover-3d.jpg",
      alt: "",
      className: "-bottom-10 left-2 h-36 w-32 -rotate-6 opacity-40 blur-sm",
    },
    {
      src: "/images/photo-flower.jpg",
      alt: "Floral still life",
      className: "top-5 left-5 z-10 h-48 w-28",
    },
    {
      src: "/images/cover-people.jpg",
      alt: "Portrait study",
      className: "right-5 bottom-3 z-20 h-52 w-28 rotate-[8deg]",
    },
  ],
};

const explorePhotos = [
  {
    src: "/images/photo-shore.jpg",
    alt: "Tropical beach with clear turquoise water",
    photographer: "Sean Oulashin",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/photo-city.jpg",
    alt: "City skyline glowing at night",
    photographer: "Pedro Lastra",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/photo-lake.jpg",
    alt: "Alpine lake with a canoe at golden hour",
    photographer: "Robert Lukeman",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/photo-forest.jpg",
    alt: "Sunlight through a dense green forest",
    photographer: "David Marcu",
    width: 900,
    height: 1200,
  },
  {
    src: "/images/photo-desert.jpg",
    alt: "Desert sand dunes under a clear sky",
    photographer: "Luke Stackpoole",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/photo-building.jpg",
    alt: "Modern building facade with geometric windows",
    photographer: "Mars Vilaubi",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/photo-flower.jpg",
    alt: "Close-up of a colorful flower",
    photographer: "Susan Wilkinson",
    width: 900,
    height: 1200,
  },
  {
    src: "/images/photo-waterfall.jpg",
    alt: "Waterfall cascading into a rocky gorge",
    photographer: "Blake Richard Verdoorn",
    width: 900,
    height: 1200,
  },
  {
    src: "/images/photo-camera.jpg",
    alt: "Photographer holding a camera at golden hour",
    photographer: "Duangphorn Wiriya",
    width: 900,
    height: 1200,
  },
  {
    src: "/images/photo-beach.jpg",
    alt: "Sunlit shoreline and ocean waves",
    photographer: "Sean Oulashin",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/cover-3d.jpg",
    alt: "Abstract three-dimensional render",
    photographer: "Unsplash+",
    width: 900,
    height: 1200,
  },
  {
    src: "/images/cover-people.jpg",
    alt: "Portrait study in soft light",
    photographer: "Surface",
    width: 900,
    height: 1200,
  },
  {
    src: "/images/cover-street.jpg",
    alt: "Street scene with motion and everyday life",
    photographer: "Jasper Boer",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/cover-film.jpg",
    alt: "Analog film tones and grain",
    photographer: "Annie Spratt",
    width: 1200,
    height: 900,
  },
];

const topics = [
  {
    name: "Nature",
    description: "Landscapes and wild places",
    image: { src: "/images/cover-nature.jpg", alt: "Nature topic cover" },
  },
  {
    name: "Wallpapers",
    description: "Desktop and mobile backgrounds",
    image: { src: "/images/cover-wallpapers.jpg", alt: "Wallpapers topic cover" },
  },
  {
    name: "Travel",
    description: "Places worth wandering",
    image: { src: "/images/cover-travel.jpg", alt: "Travel topic cover" },
  },
  {
    name: "Architecture",
    description: "Forms, spaces, and structure",
    image: { src: "/images/cover-architecture.jpg", alt: "Architecture topic cover" },
  },
  {
    name: "People",
    description: "Portraits and everyday life",
    image: { src: "/images/cover-people.jpg", alt: "People topic cover" },
  },
  {
    name: "Film",
    description: "Analog textures and tones",
    image: { src: "/images/cover-film.jpg", alt: "Film topic cover" },
  },
  {
    name: "Street Photography",
    description: "Life in motion",
    image: { src: "/images/cover-street.jpg", alt: "Street photography topic cover" },
  },
  {
    name: "3D Renders",
    description: "Digital worlds and objects",
    image: { src: "/images/cover-3d.jpg", alt: "3D renders topic cover" },
  },
];

const community = {
  id: "community",
  title: "Contribute your first photo",
  description:
    "Join a community of creators sharing free, high-resolution images used by millions of people every day.",
  ctaLabel: "Submit an image",
  ctaHref: "#subscribe",
  leftImage: {
    src: "/images/photo-lens.jpg",
    alt: "Camera lens close-up",
  },
  rightImage: {
    src: "/images/photo-vintage-camera.jpg",
    alt: "Vintage camera on a wooden table",
  },
  highlights: [
    {
      name: "Annie Spratt",
      role: "Top contributor · Nature & textures",
      href: "#explore",
      avatar: { src: "/images/portrait-annie.jpg", alt: "Portrait of Annie Spratt" },
    },
    {
      name: "Jasper Boer",
      role: "Featured photographer · Travel",
      href: "#explore",
      avatar: { src: "/images/portrait-jasper.jpg", alt: "Portrait of Jasper Boer" },
    },
    {
      name: "Surface",
      role: "Studio collective · Product & people",
      href: "#explore",
      avatar: { src: "/images/portrait-surface.jpg", alt: "Portrait of a Surface contributor" },
    },
  ],
};

export default function Home() {
  return (
    <div className="flex min-h-full">
      <Sidebar brandHref="#hero" links={sidebarLinks} />

      <div className="flex min-w-0 flex-1 flex-col">
        <Navbar
          brand="Unsplash"
          links={navLinks}
          topics={topicLinks}
          searchPlaceholder="Search photos and illustrations"
          plusLabel="Get Unsplash+"
          loginLabel="Log in"
          submitLabel="Submit an image"
        />

        <main>
          <Hero {...hero} />

          <ExploreSection id="explore" title="Explore" photos={explorePhotos} />

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
      </div>
    </div>
  );
}
