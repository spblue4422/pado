import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import svgr from '@svgr/rollup';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const extensions = ['js', 'jsx', 'ts', 'tsx'];

export default {
    input: './src/index.ts',
    output: [
        {
            dir: 'build',
            format: 'esm'
        }
    ],
    preserveModules: true,
    plugins: [
        peerDepsExternal(),
        resolve(extensions),
        commonjs({
            include: /node_modules/
        }),
        //babel({ extensions, include: ['src/**/*'], runtimeHelpers: true }),
        svgr(),
        typescript({ useTsconfigDeclarationDir: true })
    ]
};
