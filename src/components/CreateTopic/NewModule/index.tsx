import React, { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

import {
  NewModule,
  ModuleInput,
  ModuleTitleInput,
  ModuleDivider,
} from "./styles";

export default function index() {
  const { modules } = useContext(UserContext);

  return (
    <NewModule>
      <ModuleTitleInput placeholder="Module title" type="text" />
      <ModuleInput placeholder="Insert module content here" />
      {modules.length > 1 && <ModuleDivider />}
    </NewModule>
  );
}
