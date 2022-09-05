import React, { useEffect, useState } from "react";

import Home from "./home/home";
import Loading from "../components/Loading";

export default function index() {
  const [homeIsLoading, setHomeIsLoading] = useState(false);

  useEffect(() => {
    setHomeIsLoading(true);
    setTimeout(() => {
      setHomeIsLoading(false);
    }, 3000);
  }, []);

  return homeIsLoading ? <Loading /> : <Home />;
}
