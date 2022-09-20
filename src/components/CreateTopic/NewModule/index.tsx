import React, { useContext} from "react";
import { TopicContext } from "../../../contexts/TopicContext";

import InputError from "../../InputError";

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
    useContext(TopicContext);

  return (
    <>
      {modules?.map((field, index) => {
        return (
          <NewModule key={field.id}>
            <ModuleHeader>
              <ModuleTitleBox>
                <ModuleTitleInput
                  name="moduletitle"
                  placeholder="Module title"
                  type="text"
                  {...registerTopic(`modules.${index}.moduletitle` as const)}
                  key={field.id}
                />
                {/* {formErrors?.modules[index]?.moduletitle && (
                  <InputError
                    error={formErrors?.modules[index]?.moduletitle?.message}
                  />
                )} */}
              </ModuleTitleBox>
              {modules?.length > 2 && (
                <ModuleRemoveButton onClick={() => remove(index)}>
                  <RemoveIcon fontSize="small" />
                </ModuleRemoveButton>
              )}
            </ModuleHeader>
            <ModuleContentBox>
              <ModuleContentInput
                name="modulecontent"
                placeholder="Insert module content here"
                {...registerTopic(`modules.${index}.modulecontent` as const)}
                key={field.id}
              />
              {/* {formErrors?.modules[index]?.modulecontent && (
                <InputError
                  error={formErrors?.modules[index]?.modulecontent?.message}
                />
              )} */}
            </ModuleContentBox>
            {modules?.length > 1 &&
              modules[modules?.length - 1] != modules[index] && (
                <ModuleDivider />
              )}
          </NewModule>
        );
      })}
    </>
  );
}
