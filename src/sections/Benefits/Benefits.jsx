import Image from "next/image";
import "./benefits.scss";

const cards = [
  {
    id: 1,
    title: "Customer-focused",
    desc: "Enhance satisfaction and loyalty by developing digital products that are customized to meet business needs and preferences.",
    img: "/Featured icon.svg",
  },
  {
    id: 2,
    title: "Reduce risks",
    desc: "Avoid costly errors and ensure reliability through comprehensive testing, validation, and iterative improvements.",
    img: "/b2.svg",
  },
  {
    id: 3,
    title: "Scalability",
    desc: "Businesses grow and adapt to market trends with scalable digital products developed for seamless integration.",
    img: "/b3.png",
  },
  {
    id: 4,
    title: "Cost-effectiveness",
    desc: "Achieve long-run cost savings by automating business processes, reducing manual interventions and optimizing resource utilization.",
    img: "/b4.png",
  },
  {
    id: 5,
    title: "Quick time-to-market",
    desc: "Agile methodology is used to gain a competitive edge and speed up the development cycle by ensuring timely delivery.",
    img: "/b5.png",
  },
  {
    id: 6,
    title: "Improved efficiency",
    desc: "Enhance business operation efficiency by improving workflow management and data-driven insights for faster decision-making.",
    img: "/b6.svg",
  },
];

export default function Benefits() {
  return (
    <section className="e-benefits">
      <div className="e-b-header">
        <h3 className="e-b-heading">Digital product development benefits</h3>
        <p className="e-b-para">
          Developing digital solutions that are futuristic, user-centric, and
          cost-effective to generate new revenue streams.
        </p>
      </div>

      <div className="e-card-container">
        {cards.map((item) => (
          <div className="e-card" key={item.id}>
            <Image src={item.img} alt={item.title} width={48} height={48} />

            <h4 className="e-card-title">{item.title}</h4>

            <p className="e-card-para">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
