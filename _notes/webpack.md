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

## Style
```
npm install style-loader css-loader extract-text-webpack-plugin -D
```