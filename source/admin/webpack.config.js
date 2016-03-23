(function(module) {

    "use strict";

    let output = __dirname + "/../../dist",
        jsDir = __dirname + "/js";

    module.exports = {
        entry: {
            lib: `${jsDir}/init.js`,
            views: `${jsDir}/index.jsx`
        },
        output: {
            filename: 'app.[name].js',
            path: `${output}/admin/`,
            //make sure port 8090 is used when launching webpack-dev-server
            publicPath: 'http://localhost:8090/assets'
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel',
                    query: {
                        presets: ['es2015']
                    }
                },
                {
                    test: /\.jsx$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel',
                    query: {
                        presets: ['react', 'es2015']
                    }
                }
            ]
        },
        externals: {
            //don't bundle the 'react' npm package with our bundle.js
            //but get it from a global 'React' variable
            'react': 'React'
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        }
    };

})(module);