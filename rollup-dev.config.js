/**
 * Created by rafael on 13/03/17.
 */
// rollup.config.js
import  replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
    entry: 'web/assets/src/js/init.js', // Entry file,
    format: 'es',
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify( 'development' )
        }),
        resolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            presets: ['es2015-rollup', 'react'],
            plugins: ['external-helpers']
        })
    ],
    dest: 'web/assets/build/js/index.js'
};