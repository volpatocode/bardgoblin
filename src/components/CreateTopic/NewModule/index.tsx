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
  const { modules, append, remove, register, control } =
    useContext(UserContext);

  return (
    <>
      {modules.map((field, index) => {
        return (
          <NewModule key={field.id}>
            <ModuleHeader>
              <ModuleTitleInput
                name="moduletitle"
                placeholder="Module title"
                type="text"
                {...register(`topic.modules.${index}.moduletitle` as const)}
                key={field.id}
              />
              {modules.length > 1 && (
                <ModuleRemoveButton onClick={() => remove(index)}>
                  <RemoveIcon fontSize="small" />
                </ModuleRemoveButton>
              )}
            </ModuleHeader>
            <ModuleInput
              name="modulecontent"
              placeholder="Insert module content here"
              {...register(`topic.modules.${index}.modulecontent` as const)}
              key={field.id}
            />
            {modules.length > 1 && <ModuleDivider />}
          </NewModule>
        );
      })}
    </>
  );
}
