const { ConstantsProvider } = require("contexts/constantsprovider");
const { DataProvider } = require("contexts/dataprovider");

const Provider = ({ children }) => {
  return (
    <ConstantsProvider>
      <DataProvider>{children}</DataProvider>
    </ConstantsProvider>
  );
};

export { Provider };
