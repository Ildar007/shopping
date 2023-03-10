module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        
      
        "react/no-unknown-property": [
            2,
            {
              "ignore": [
                "jsx"
              ]
            }
          ],
          "react/prop-types": "off",
    }
}
