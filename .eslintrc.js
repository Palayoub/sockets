module.exports = {
  "extends": "standard",
  "rules": {
    "react/prop-types": ["off"],
    "indent": ["error", 2],
    "linebreak-style": ["error","unix"],
    "quotes": ["error","single"],
    "no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    "no-console": ["off", { "allow": ["info", "error"] }]
  }
};
