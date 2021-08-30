import * as path from "path";
import * as webpack from "webpack";

const config: webpack.Configuration = {
    mode: "development",
    entry: "./pages/index.tsx",
    resolve: {
        alias: {
            "~/styles": path.resolve(__dirname, "styles/"),
            "~/components": path.resolve(__dirname, "components/"),
        },
        extensions: [".css", ".sass", ".scss", "tsx"]
    }
}