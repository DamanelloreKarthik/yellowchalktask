// jest.config.js
module.exports = {
  // Use 'babel-jest' to transpile JavaScript files using Babel
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  // Mock out non-JS files such as CSS modules
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
};
