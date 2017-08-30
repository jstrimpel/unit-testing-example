module.exports = {
  "globals": {
    Promise: true,
    describe: true,
    it: true,
    expect: true,
    Promise: true    
  },
  "env": {
    "browser": true
  },
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": "eslint:recommended",
  "rules": {
    "react/jsx-uses-vars": 1,
    "react/jsx-uses-react": 1,
    "linebreak-style": [
      "error",
      "unix"
    ]
  },
  "plugins": [
    "react"
  ]
};