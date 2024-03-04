// *cada arquivo do node e um modulo
const path = require('path'); // *importando um modulo para trabalhar com caminhos
//! commonJS

module.exports = { // *configurcao do webpack
    mode: 'development',
    entry: './src/main.js', //*arquivo de entrada
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),//* mostrando um caminho para a saida do bundle
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/, // para nao analizar a pasta do node
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    devtool: 'source-map' //* mapeamento caso haja um erro
};