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
        placeholder="Module title"
        type="text"
        value={input.moduletitle}
      />
      <ModuleInput
        onChange={handleDataInput}
        placeholder="Insert module content here"
        value={input.modulecontent}
      />
      {modules.length > 1 && <ModuleDivider />}
    </NewModule>
  );
}
