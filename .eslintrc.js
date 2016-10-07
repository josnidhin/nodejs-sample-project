module.exports = {
  "rules":{
    "filenames/match-regex": [2, "^[a-z_]+$", true],
    "indent": [2, 2],
    "one-var": [2, "always"],
    "operator-linebreak": [2, "before"],
    "semi": [2, "always"],
  },
  "extends": "standard",
  "plugins": [
      "standard",
      "promise",
      "filenames"
  ],
  "env": {
    "node": true,
    "mocha": true
  }
};
