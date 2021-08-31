import * as path from "path";
import * as webpack from "webpack";

const config: webpack.Configuration = {
    mode: "development",
    entry: "./pages/index.tsx",
    resolve: {
        alias: {
            "~/styles": path.resolve(__dirname, "styles/"),
            "~/components": path.resolve(__dirname, "components/"),
            "~/public": path.resolve(__dirname, "public/"),
        },
        extensions: [".css", ".sass", ".scss", "tsx"]
    },
    module: {
        rules: [{
            test: /\.(png|jpg|jpeg|gif|svg)$/i,
            type: "asset/resource"
        }]
    }
}