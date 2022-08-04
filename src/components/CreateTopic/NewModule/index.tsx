import React, { useContext, useEffect } from "react";
import { UserContext } from "../../../contexts/UserContext";
import InputError from "../../InputError";
import { InputBox } from "../../UserModal/styles";

import {
  NewModule,
  ModuleHeader,
  ModuleContentInput,
  ModuleTitleInput,
  ModuleDivider,
  ModuleRemoveButton,
  RemoveIcon,
  ModuleTitleBox,
  ModuleContentBox,
} from "./styles";

export default function index() {
  const { modules, remove, registerTopic, formErrors } =
    useContext(UserContext);

  return (
    <>
      {modules.map((field, index) => {
        return (
          <NewModule key={field.id}>
            <ModuleHeader>
              <ModuleTitleBox>
                <ModuleTitleInput
                  name="moduletitle"
                  placeholder="Module title"
                  type="text"
                  {...registerTopic(
                    `topic.modules.${index}.moduletitle` as const
                  )}
                  key={field.id}
                />
                {formErrors?.topic?.modules[0]?.moduletitle && (
                  <InputError
                    error={formErrors?.topic?.modules[0]?.moduletitle?.message}
                  />
                )}
              </ModuleTitleBox>
              {modules.length > 1 && (
                <ModuleRemoveButton onClick={() => remove(index)}>
                  <RemoveIcon fontSize="small" />
                </ModuleRemoveButton>
              )}
            </ModuleHeader>
            <ModuleContentBox>
              <ModuleContentInput
                name="modulecontent"
                placeholder="Insert module content here"
                {...registerTopic(
                  `topic.modules.${index}.modulecontent` as const
                )}
                key={field.id}
              />
              {formErrors?.topic?.modules[0]?.modulecontent && (
                <InputError
                  error={formErrors?.topic?.modules[0]?.modulecontent?.message}
                />
              )}
            </ModuleContentBox>
            {modules.length > 1 && <ModuleDivider />}
          </NewModule>
        );
      })}
    </>
  );
}
