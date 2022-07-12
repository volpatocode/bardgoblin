import React, { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

import {
  NewModule,
  ModuleInput,
  ModuleTitleInput,
  ModuleHeader,
  ModuleRemoveButton,
  RemoveIcon,
  ModuleDivider,
} from "./styles";

export default function index() {
  const {removeModule} = useContext(UserContext);

  return (
    <NewModule>
      <ModuleHeader>
        <ModuleTitleInput placeholder="Module title" type="text" />
        <ModuleRemoveButton onClick={() => removeModule(index)}>
          <RemoveIcon fontSize="small" />
        </ModuleRemoveButton>
      </ModuleHeader>
      <ModuleInput placeholder="Insert module content here" />
      <ModuleDivider />
    </NewModule>
  );
}
