import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SectionShell from "@/components/SectionShell";

const navLinks = [
  { label: "Explore", href: "#explore" },
  { label: "Topics", href: "#topics" },
  { label: "Community", href: "#community" },
  { label: "Subscribe", href: "#subscribe" },
];

const topicLinks = [
  { label: "Featured", href: "#hero" },
  { label: "Nature", href: "#explore" },
  { label: "Wallpapers", href: "#explore" },
  { label: "Travel", href: "#topics" },
  { label: "Architecture", href: "#topics" },
  { label: "People", href: "#community" },
  { label: "Film", href: "#community" },
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

const sections = [
  {
    id: "explore",
    title: "Explore",
    description:
      "Photo grid and trending visuals will live here. Scroll targets are wired for navbar navigation.",
  },
  {
    id: "topics",
    title: "Topics",
    description:
      "Curated topics like Nature, Wallpapers, and Travel will be featured in this section.",
  },
  {
    id: "community",
    title: "Community",
    description:
      "Contributor highlights and community modules will go here as the page takes shape.",
  },
  {
    id: "subscribe",
    title: "Stay in the loop",
    description:
      "Email subscription with Web3Forms and a database comes later — this section is the scroll target for now.",
  },
];

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

        {sections.map((section) => (
          <SectionShell
            key={section.id}
            id={section.id}
            title={section.title}
            description={section.description}
          />
        ))}
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
