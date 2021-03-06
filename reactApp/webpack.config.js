const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   devtool: 'eval-source-map',
   entry: {
	  main: './main.js', 
	  main_state : './main_state.js'
   },
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: '[name].js'
   },
   devServer: {
      inline: true,
      port: 8001
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
         }
      ]
   }/*,
   //DISABLE IF YOU USE DEV SERVER
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
   */
   ,plugins:[
      new HtmlWebpackPlugin({
         template: './index_template.html',
		 chunks: ['main'],
		 filename: './index.html',
      }),
	  new HtmlWebpackPlugin({
         template: './index_template.html',
		 chunks: ['main_state'],
		 filename: './main_state.html',
      })
   ]
}