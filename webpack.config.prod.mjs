// webpack.config.prod.mjs
/*
SPDX-License-Identifier: CC-BY-4.0 OR GPL-3.0-or-later
This file is part of Network Engineering Pro
*/

import CopyPlugin from "copy-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import TerserPlugin from "terser-webpack-plugin";
import { merge } from "webpack-merge";
import common from "./webpack.common.mjs";

export default merge(common, {
  mode: "production",
  output: {
    filename: "js/[name].[contenthash].js", // Use contenthash for better caching
    path: path.resolve(process.cwd(), "dist"), // Output directory for production
    chunkFilename: "js/[name].[contenthash].js", // File name for dynamically loaded chunks
    chunkFormat: "array-push", // Specify the chunk format
    clean: true, // Clean the output directory before emit
  },
  target: "web", // Ensure the target is set to 'web' for browser environments
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: {
            reserved: ["n", "t", "p"], // Prevent mangling of certain variables
          },
          compress: {
            drop_console: true, // Remove console logs for better performance
          },
          format: {
            beautify: true, // Preserve whitespace in JavaScript files
          },
        },
      }),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true }, // Remove comments, but preserve whitespace
              normalizeWhitespace: false, // Preserve whitespace in CSS files
            },
          ],
        },
      }),
    ],
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
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // Template for the HTML file
      minify: {
        removeComments: true, // Remove comments
        removeRedundantAttributes: true, // Remove redundant attributes
        useShortDoctype: true, // Use short DOCTYPE
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: false, // Preserve whitespace in inline JavaScript
        minifyCSS: false, // Preserve whitespace in inline CSS
        minifyURLs: true,
        // collapseWhitespace is intentionally omitted to preserve whitespace
      },
    }),
    new CopyPlugin({
      patterns: [
        { from: "img", to: "img" },
        { from: "css", to: "css" },
        { from: "pages", to: "pages" },
        { from: "legal", to: "legal" },
        { from: "js/vendor", to: "js/vendor" },
        { from: "favicon.svg", to: "favicon.svg" },
        { from: "favicon.ico", to: "favicon.ico" },
        { from: "robots.txt", to: "robots.txt" },
        { from: "favicon-apple.png", to: "favicon-apple.png" },
        { from: "favicon-512.png", to: "favicon-512.png" },
        { from: "favicon-192.png", to: "favicon-192.png" },
        { from: "favicon-light.ico", to: "favicon-light.ico" },
        { from: "favicon-light.svg", to: "favicon-light.svg" },
        { from: "legal.html", to: "legal.html" },
        { from: "LICENSE.md", to: "LICENSE.md" },
        { from: "README.md", to: "README.md" },
        { from: "404.html", to: "404.html" },
        { from: "bimi-svg-tiny-ps.xml", to: "bimi-svg-tiny-ps.xml" },
        { from: "site.webmanifest", to: "site.webmanifest" },
        { from: "sitemap.xml", to: "sitemap.xml" },
        { from: "CNAME", to: "." }, // Corrected path to copy CNAME to the root directory
      ],
    }),
  ],
});
