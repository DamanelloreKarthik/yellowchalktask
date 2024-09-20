const { ConstantsProvider } = require("providers/constantsprovider");
const { DataProvider } = require("providers/dataprovider");

const Provider = ({ children }) => {
  return (
    <ConstantsProvider>
      <DataProvider>{children}</DataProvider>
    </ConstantsProvider>
  );
};

export { Provider };
