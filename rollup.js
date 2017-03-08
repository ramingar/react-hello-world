var rollup = require('rollup');
var babel = require('rollup-plugin-babel');
var fs = require('fs');

const config = {
    entry: 'web/assets/src/js/init.js', // Entry file
    plugins: [
        babel({
            exclude: 'node_modules/**',
            presets: ['es2015-rollup', 'react']
        })
    ]
};

rollup.rollup(config)
    .then(function (bundle) {

        // Generate bundle + sourcemap
        var result = bundle.generate({
            format: 'es'
        });

        fs.writeFileSync('web/assets/build/js/bundle.js', result.code);


        bundle.write({
            format: 'es',
            dest: 'web/assets/build/js/index.js' // Exit file
        });

    });