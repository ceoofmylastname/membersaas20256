import { InteractiveCard } from "./InteractiveCard";

const cards = [
  {
    title: "Website",
    description: "Explore our digital presence and discover more about our mission",
    image: "/placeholder.svg",
  },
  {
    title: "Instagram",
    description: "Follow our journey through inspiring images and stories",
    image: "/placeholder.svg",
  },
  {
    title: "Slack",
    description: "Join our community and connect with fellow believers",
    image: "/placeholder.svg",
  },
  {
    title: "YouTube",
    description: "Watch our sermons, testimonies, and spiritual content",
    image: "/placeholder.svg",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-[#BCAAA4]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#5D4037] mb-16 font-raleway">
          Hover over the cards
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {cards.map((card) => (
            <InteractiveCard
              key={card.title}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};