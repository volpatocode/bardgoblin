import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";

import {
  NewModule,
  ModuleInput,
  ModuleTitleInput,
  ModuleDivider,
} from "./styles";

export default function index() {
  const { modules } = useContext(UserContext);
  const [dataInput, setDataInput] = useState({});

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * (10000000 - 1000000) + 1000000);
  };

  const handleDataInput = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const value = e.target.value;
    setDataInput({ ...dataInput, [id]: value });
  };

  useEffect(() => {
    console.log(dataInput);
  }, [dataInput]);

  return (
    <NewModule >
      <ModuleTitleInput
        onChange={handleDataInput}
        id={"moduletitle" + generateRandomNumber()}
        placeholder="Module title"
        type="text"
      />
      <ModuleInput
        onChange={handleDataInput}
        id={"modulecontent" + generateRandomNumber()}
        placeholder="Insert module content here"
      />
      {modules.length > 1 && <ModuleDivider />}
    </NewModule>
  );
}
