import { mens_kurta } from "../../../Data/mens_kurta";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import CarouselHomeSection from "../../components/HomeSectionCarousel/CarouselHomeSection";

const Homepage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="py-10 space-y-10 flex flex-col justify-center px-5 lg:px-10">
        <CarouselHomeSection sectionName={"Men`s Kurta"} data={mens_kurta} />
        <CarouselHomeSection sectionName={"Men`s Shoes"} data={mens_kurta} />
        <CarouselHomeSection sectionName={"Men`s Shirt"} data={mens_kurta} />
        <CarouselHomeSection sectionName={"Women`s Saree"} data={mens_kurta} />
        <CarouselHomeSection sectionName={"Women`s Dress"} data={mens_kurta} />
      </div>
    </div>
  );
};

export default Homepage;
