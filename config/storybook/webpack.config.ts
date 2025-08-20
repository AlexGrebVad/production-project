import webpack, { RuleSetRule } from 'webpack'
import path from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildPath } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPath = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  }

  // Пути и расширения
  config.resolve.modules.push(paths.src)
  config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx')

  // Исправляем правило для svg
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }
    return rule
  })

  // Babel loader для TS/TSX/JS/JSX
  config.module.rules.push({
    test: /\.[jt]sx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          ['@babel/preset-react', { runtime: 'automatic' }],

          '@babel/preset-typescript',
        ],
      },
    },
  })

  // CSS/SCSS loader
  config.module.rules.push({
    test: /\.s[ac]ss$/i,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  })

  // SVGR loader
  config.module.rules.push({
    test: /\.svg$/i,
    use: ['@svgr/webpack'],
  })

  // Плагин для CSS
  config.plugins.push(new MiniCssExtractPlugin())

  return config
}
