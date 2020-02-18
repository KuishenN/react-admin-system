/**
 * @file config-overrides.js
 * @author Kiven Liu
 * 基于customize和react-app-rewired的定制花配置文件
  */

  // 从customize-cra引入相关的方法
 const { 
   override,
   addLessLoader,
   fixBabelImports,
   addDecoratorsLegacy
   } = require('customize-cra')

   const modifyVars = require('./lessVars')

 module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars
  }),
  addDecoratorsLegacy(),
  fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      })

 )