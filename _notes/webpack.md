## Reference
- https://webpack.docschina.org/

## File process
- html -> html-webpack-plugin
- js -> babel + babel-preset-react
- style -> css-loader + sass-loader
- img/font -> url-loader, file-loader


## Utils
- html-webpack-plugin    create html file
- extract-text-webpack-plugin  pack css file
- CommonsChunkPlugin     extract common module

## webpack-dev-server
- hot loading


## Setup
```
npm i webpack webpack-cli -D
yarn add webpack webpack-cli  --dev
```

## Html
```
npm i html-webpack-plugin -D
```

## js
```
npm install babel-loader babel-core babel-preset-env -D
```

## React
```
npm install react react-dom -S
npm install babel-preset-react -D
```

## css
```
npm install style-loader css-loader extract-text-webpack-plugin -D
```

## sass
```
npm install sass-loader node-sass --save-dev
```
node-sass and webpack are sass-loader's peerDependency

# image
- https://webpack.docschina.org/guides/asset-management/
```
npm install file-loader -D
```
- https://webpack.docschina.org/loaders
url-loader 功能类似于 file-loader，但是在文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL,
Create seperate file when the content > size limit
url-loader depends on file-loader
```
npm install url-loader -D
```

## font
```
npm i font-awesome -S
```
using file loader to process font file

## dev server
```
npm i -D webpack-dev-server
```
