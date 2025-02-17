// webpack.common.mjs
/*
SPDX-License-Identifier: CC-BY-4.0 OR GPL-3.0-or-later
This file is part of Network Engineering Pro
*/

import autoprefixer from "autoprefixer";
import path from "path";

export default {
  // Entry point for the application
  entry: {
    app: "./js/app.js", // Main JavaScript file
  },
  // Output configuration
  output: {
    path: path.resolve(process.cwd(), "dist"), // Output directory
    filename: "js/[name].[contenthash].js", // Output file name with contenthash for better caching
    chunkFilename: "js/[name].[contenthash].js", // File name for dynamically loaded chunks
    chunkFormat: "array-push", // Explicitly set the chunk format
    clean: true, // Clean the output directory before emit
  },
  // Target environment
  target: "web", // Ensure the target is set to 'web' for browser environments
  // Module rules
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to .js files
        exclude: /node_modules/, // Exclude node_modules directory
        use: [
          {
            loader: "babel-loader", // Use Babel loader to transpile ES6+ code
            options: {
              presets: ["@babel/preset-env"], // Ensure you have @babel/preset-env installed
            },
          },
        ],
      },
      {
        test: /\.css$/, // Apply this rule to .css files
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer({
                    add: true,
                    remove: false,
                  }),
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.jsx?$/, // Apply this rule to .jsx and .js files
        use: ["babel-loader", "astroturf/loader"],
      },
    ],
  },
  // Optimization settings
  optimization: {
    splitChunks: {
      chunks: "all", // Split chunks for better caching
      minSize: 20000, // Minimum size for a chunk to be generated
      maxSize: 70000, // Maximum size for a chunk before splitting
      minChunks: 1, // Minimum number of chunks that must share a module before splitting
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10, // Lower priority for vendor chunks
          reuseExistingChunk: true, // Reuse existing chunk if possible
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true, // Reuse existing chunk if possible
        },
      },
    },
    runtimeChunk: "single", // Create a single runtime bundle for all chunks
  },
  // Plugins
  plugins: [
    // Add any necessary plugins here
  ],
  // Resolve settings
  resolve: {
    extensions: [".js", ".json"], // Automatically resolve these extensions
  },
};
