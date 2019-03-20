module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: 8
            }
        },
        '@babel/preset-react'
      ]
    ],
    plugins: [
        '@babel/plugin-proposal-function-bind',
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-optional-catch-binding'
    ]
}
