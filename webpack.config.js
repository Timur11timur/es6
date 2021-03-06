const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'main2.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'buble-loader',
                include: path.join(__dirname, 'src'),
                options: {
                    objectAssign: 'Object.assign'
                }
            }
        ]
    }
};