module.exports = {
    mode: 'production',
    entry: {
        main: "./src/index.ts",
    },
    resolve: {
        extensions: ['.json', '.js'],
    },
    externals: [
        {
            react: 'React',
        },
    ],
    output: {
        filename: "[name].[hash].js",
        path: __dirname + "/dist",
        clean: true
    },
}