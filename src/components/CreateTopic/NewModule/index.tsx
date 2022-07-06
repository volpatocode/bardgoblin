import React from "react";

import { NewModule, ModuleInput, ModuleTitleInput } from "./styles";

export default function index() {
  return <NewModule>
    <ModuleTitleInput placeholder="Module title" type="text"/>
    <ModuleInput placeholder="Insert module content here"/>
  </NewModule>;
}
