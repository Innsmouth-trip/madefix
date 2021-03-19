// webpack configuration
module: {
    loaders: [
        {
            test: /\.svg$/,
            exclude: /node_modules/,
            use: {
                loader: 'svg-react-loader',
                options: {
                    tag: 'symbol',
                    attrs: {
                        title: 'example',
                    },
                    name: 'MyIcon',
                },
            },
        }
    ]
}

// Resource paths
import BgVent from '../src/images/BgVent.svg';
import Vent from '../src/images/vent.svg';
