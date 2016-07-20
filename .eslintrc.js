module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "no-console":0,
        "no-undef":0,
        "indent": ["error",2],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};