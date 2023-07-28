import getData from "@/hooks/getData";

const PopularPlaces = () => {
  const placesData = getData();

  console.log(placesData);
  return (
    <section className="main-container py-12">
      <h1 className="section-title">Popular Places</h1>
      <div className="grid grid-cols-[repeat(autofit,minmax(18rem,1fr))]"></div>
    </section>
  );
};

export default PopularPlaces;
