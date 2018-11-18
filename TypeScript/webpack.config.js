module.exports = {
    entry: "./13. Workflow/app.ts",
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: "ts-loader" }
        ]
    }
};