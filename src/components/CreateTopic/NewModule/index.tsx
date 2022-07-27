import React, { useContext, useEffect } from "react";
import { UserContext } from "../../../contexts/UserContext";

import {
  NewModule,
  ModuleHeader,
  ModuleInput,
  ModuleTitleInput,
  ModuleDivider,
  ModuleRemoveButton,
  RemoveIcon,
} from "./styles";

export default function index() {
  const { modules, setModules, removeModule } = useContext(UserContext);

  const handleModuleInput = (index, event) => {
    let data = [...modules];
    data[index][event.target.name] = event.target.value;
    setModules(data);
  };

  return (
    <>
      {modules.map((input, index) => {
        return (
          <NewModule key={index}>
            <ModuleHeader>
              <ModuleTitleInput
                name="moduletitle"
                placeholder="Module title"
                type="text"
                onChange={(event) => handleModuleInput(index, event)}
              />
              {modules.length > 1 && (
                <ModuleRemoveButton onClick={() => removeModule(index)}>
                  <RemoveIcon fontSize="small" />
                </ModuleRemoveButton>
              )}
            </ModuleHeader>
            <ModuleInput
              name="modulecontent"
              placeholder="Insert module content here"
              onChange={(event) => handleModuleInput(index, event)}
            />
            {modules.length > 1 && <ModuleDivider />}
          </NewModule>
        );
      })}
    </>
  );
}
