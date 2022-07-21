import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";

import {
  NewModule,
  ModuleInput,
  ModuleTitleInput,
  ModuleDivider,
} from "./styles";

export default function index() {
  const { modules, setModules } = useContext(UserContext);


  const handleDataInput = (index, event) => {
    let data = [...modules];
    data[index][event.target.name] = event.target.value;
    setModules(data);
  };

  useEffect(() => {
    console.log(modules);
  }, [modules]);

  return (
    <form>
      {modules.map((input, index) => {
        return (
          <NewModule key={index}>
            <ModuleTitleInput
              name="moduletitle"
              placeholder="Module title"
              onChange={event => handleDataInput(index, event)}
              type="text"
              value={input.moduletitle}
            />
            <ModuleInput
              name="modulecontent"
              placeholder="Insert module content here"
              onChange={event => handleDataInput(index, event)}
              value={input.modulecontent}
            />
            {modules.length > 1 && <ModuleDivider />}
          </NewModule>
        );
      })}
    </form>
  );
}
