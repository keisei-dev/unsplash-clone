import Footer from "@/components/Footer";
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

const sections = [
  {
    id: "hero",
    title: "The internet’s source for visuals.",
    description:
      "Hero section placeholder — full Unsplash-style search and imagery lands in the next commit.",
    className: "min-h-[70vh] bg-neutral-900 text-white [&_h2]:text-white [&_p]:text-neutral-300",
  },
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
        {sections.map((section) => (
          <SectionShell
            key={section.id}
            id={section.id}
            title={section.title}
            description={section.description}
            className={section.className}
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
