import React from "react";
import { FeaturesCards } from "../components/FeaturesCards";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { NavbarTop } from "../components/NavbarTop";
import { PopularHome } from "../components/PopularHome";
import { UserBenefits } from "../components/UserBenefits";

export const Home = () => {
  return (
    <div>
      <NavbarTop />
      <Hero />
      <FeaturesCards />
      <PopularHome />
      <UserBenefits />
      <Footer />
    </div>
  );
};
