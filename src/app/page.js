import Header from "@/components/header/Header";
import dynamic from "next/dynamic";
import PopularPlaces from "@/components/PopularPlaces";

const MyAwesomeMap = dynamic(() => import("@/components/Map"), { ssr: false });

const Home = () => {
  return (
    <>
      <Header />
      <MyAwesomeMap />
      <PopularPlaces />
    </>
  );
};

export default Home;
