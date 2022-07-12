import React from "react";

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
  return (
    <NewModule>
      <ModuleHeader>
        <ModuleTitleInput placeholder="Module title" type="text" />
        <ModuleRemoveButton>
          <RemoveIcon fontSize="small" />
        </ModuleRemoveButton>
      </ModuleHeader>
      <ModuleInput placeholder="Insert module content here" />
      <ModuleDivider />
    </NewModule>
  );
}
