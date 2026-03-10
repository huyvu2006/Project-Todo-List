import common from "./webpack.common.js"
import {merge} from "webpack-merge"

export default merge(common,{
    mode: "production",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader","css-loader"],
            }
        ]
    }
})