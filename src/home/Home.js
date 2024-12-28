import Slider from "./Slider";
import './Home.css';
import Categories from "./Categories";
import Brands from "./Brands";
import BestSellers from "./BestSellers";
import Unisex from "./Unisex";
import Advertisment from "./Advertisment";
import Niche from "./Niche";

export default function Home() {
  return (
    <div className="home_container">
        <Slider />
        <Categories />
        <BestSellers />
        <Brands />
        <Unisex />
        <Advertisment />
        <Niche />
    </div>
  )
}