import { InteractiveCard } from "./InteractiveCard";

const cards = [
  {
    title: "Website",
    description: "Explore our digital presence and discover more about our mission",
    image: "https://storage.googleapis.com/msgsndr/TivPy8SDoCwta90bdzyN/media/67747ff4c7fbee58633e3eb3.png",
  },
  {
    title: "Instagram",
    description: "Follow our journey through inspiring images and stories",
    image: "https://storage.googleapis.com/msgsndr/TivPy8SDoCwta90bdzyN/media/6774809bd515b1ec1c9d314c.png",
  },
  {
    title: "Slack",
    description: "Join our community and connect with fellow believers",
    image: "https://storage.googleapis.com/msgsndr/TivPy8SDoCwta90bdzyN/media/677481a904db6d535eef8104.png",
  },
  {
    title: "YouTube",
    description: "Watch our sermons, testimonies, and spiritual content",
    image: "https://storage.googleapis.com/msgsndr/TivPy8SDoCwta90bdzyN/media/6774816004db6d7be2ef80db.png",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-primary mb-16 font-raleway">
          Get In Touch
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