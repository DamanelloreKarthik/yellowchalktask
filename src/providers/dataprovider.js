import { createContext, useContext, useMemo, useState } from "react";

const DataContext = createContext();

const DataProvider = (props) => {
  const [dataTwo, setDataTwo] = useState("data2");

  const memoizedValue = useMemo(
    () => ({
      dataTwo,
      setDataTwo,
    }),
    [dataTwo, setDataTwo]
  );

  return (
    <DataContext.Provider value={memoizedValue}>
      {props.children}
    </DataContext.Provider>
  );
};

export { DataProvider };

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("use data must be used with in the data Provider");
  }
  return context;
};
