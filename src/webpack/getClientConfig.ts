import * as webpack from 'webpack'
import * as path from 'path'
import { getBaseConfig } from './getBaseConfig'
import { getTsRule } from './rules/getTsRule'
import { ModeType } from './types'

export const getClientConfig = (
    configDirName: string,
    mode: ModeType,
): webpack.Configuration => {
    const baseConfig = getBaseConfig(mode)
    return {
        ...baseConfig,
        entry: ['./src/client/client.tsx'],
        output: {
            filename: 'cards-client.js',
            path: path.resolve(configDirName, 'build', 'client'),
        },
        module: {
            rules: [getTsRule()],
        },
    }
}
