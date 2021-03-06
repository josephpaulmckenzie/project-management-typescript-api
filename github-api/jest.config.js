module.exports = {
  displayName: 'custom-logging-and-alerts',
  // color: 'blue', // We Can specify a background color for our name label 
  transform: {
    "^.+\\.tsx ? $": "ts-jest",

  },
  testRegex: '(\/__tests1__\/.*|(\\.| \/)(test|spec))\\.(jsx?|tsx?)$',
  // testPathIgnorePatterns: ["(\/custom-logging-and-alerts\/layer\/nodejs\/node_modules\/custom-logging-and-alerts\/src\/__tests__\/.*|(\\.| \/)(test|spec))\\.(jsx?|tsx?)$"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};