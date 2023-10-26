// pages/index.js
import React from "react";
import { Button } from "@nextui-org/react";

import { Card } from "@nextui-org/react";
import { useRouter } from "next/router";
import Cards from "@/components/Cards";
import Footer from "@/components/Fooder";
import { Analytics } from "@vercel/analytics/react";

const HomePage = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/gallery");
  };

  return (
    <div>
      <Cards />
      <hr />
      <Footer />
      <Analytics />
    </div>
  );
};

export default HomePage;
