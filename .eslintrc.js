module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true
    },
    "plugins": [
        "flowtype",
        "react",
        "react-native"
    ],
    "extends": [
        "airbnb",
        "plugin:react-native/all",
        "plugin:flowtype/recommended",
        "plugin:react/recommended"
    ],
    "rules": {
        "comma-dangle": ["error", "never"],
        "flowtype/no-types-missing-file-annotation": "error",
        "indent": ["error", 2],
        "no-use-before-define": "off",
        "quotes": ["error", "single"],
        "react/jsx-curly-spacing": [2, "always", {
            "allowMultiline": false,
            "spacing": {"objectLiterals": "never"}
        }],
        "react/jsx-filename-extension": ["error", { "extensions": [".js"] }],
        "react/jsx-indent": ["error", 2],
        "react/jsx-indent-props": ["error", 2],
        "react/jsx-closing-tag-location": "off",
        "react/jsx-no-bind": ["error", {
            "allowArrowFunctions": false,
            "allowBind": false,
            "ignoreRefs": false
        }],
        "react/require-default-props": "off",
        "linebreak-style": "off",
        "object-curly-newline": "off",
        "function-paren-newline": "off"
    }
}
