import React, { useContext, useState } from "react";
import { defaultSelectedField, iField } from "./static.utility";

const SelectedFieldContext = React.createContext<iField>(
    {
        row: -1,
        column: -1,
        state: "test",
        index: -1,
      }
);
const UpdateSelectedFieldContext = React.createContext<
  React.Dispatch<React.SetStateAction<iField>>
>(() => {});

export const SelectedFieldContextProvider: React.FC = ({ children }) => {
  const [selectedField, setSelectedField] = useState<iField>(
    defaultSelectedField()
  );
  return (
    <SelectedFieldContext.Provider value={selectedField}>
      <UpdateSelectedFieldContext.Provider value={setSelectedField}>
        {children}
      </UpdateSelectedFieldContext.Provider>
    </SelectedFieldContext.Provider>
  );
};

export const useSelectedField = (): [
  iField,
  React.Dispatch<React.SetStateAction<iField>>
] => {
  const selectedField = useContext(SelectedFieldContext);
  const setSelectedField = useContext(UpdateSelectedFieldContext);

  return [selectedField, setSelectedField];
};
