import { createContext, useContext, useMemo, useState } from "react";

const ConstantsContext = createContext();

const ConstantsProvider = (props) => {
  const [dataOne, setDataTwo] = useState("data1");

  const memoizedValue = useMemo(
    () => ({
      dataOne,
      setDataTwo,
    }),
    [dataOne, setDataTwo]
  );

  return (
    <ConstantsContext.Provider value={memoizedValue}>
      {props.children}
    </ConstantsContext.Provider>
  );
};

export { ConstantsProvider };

export const useConstantsContext = () => {
  const context = useContext(ConstantsContext);
  if (context === undefined) {
    throw new Error(
      "use constants must be used with in the Constants Provider"
    );
  }
  return context;
};
