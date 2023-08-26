import { getClientConfig } from './src/webpack'

export default (env: any) => {
    return [getClientConfig].map((getConfig) =>
        getConfig(__dirname, env.mode),
    )
}
