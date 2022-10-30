import React, { createContext, useContext, useState } from 'react';

type WithCrudContext = {
  children: React.ReactNode;
};

type EditType = 'new' | number | null;

type CrudContextDefaultState = {
  editWine: EditType;
  setEditWine: (e: EditType) => void;
};

const CrudContextDefaultState: CrudContextDefaultState = {
  editWine: null,
  setEditWine: (e: EditType) => undefined,
};

const crudContext = createContext(CrudContextDefaultState);

const WithCrudContext = ({ children }: WithCrudContext) => {
  const [editWine, setEditWine] = useState<EditType>(null);

  return (
    <crudContext.Provider
      value={{
        editWine,
        setEditWine,
      }}
    >
      {children}
    </crudContext.Provider>
  );
};

const useCrudContext = () => useContext(crudContext);

export { WithCrudContext, useCrudContext };
