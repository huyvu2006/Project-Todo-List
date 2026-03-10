import common from "./webpack.common.js"
import {merge} from "webpack-merge"
export default merge(common,{
    mode: "development",
    devtool: "source-map",
    devServer: {
        watchFiles: ["./src/template.html"]
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader","css-loader"],
            }
        ]
    }
})