
export default function OverviewCard(){
  const cardItems = [
    { value: '24+', label: 'Cities' },
    { value: '700+', label: 'Places' },
    { value: '200+', label: 'Hotel' },
    { value: '2k+', label: 'Review' },
  ];

  return (
    <section className="grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-10 mt-24">
      {cardItems.map((item, index) => (
        <CardItem key={index} {...item} />
      ))}
    </section>
  );
};

const CardItem = ({ value, label }) => (
    <div className="md:p-14 p-10 flex flex-col justify-center items-center gap-4 bg-white rounded-lg shadow-sm border border-gray-100">
      <h1 className="text-primary font-semibold text-3xl">{value}</h1>
      <p className="font-semibold">{label}</p>
    </div>
  );