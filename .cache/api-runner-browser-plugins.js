module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-web-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"google":{"families":["Montserrat:300,400,600,700"]}},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"SCOPE","short_name":"SCOPE","start_url":"/","background_color":"#7d8c8f","theme_color":"#3e4246","display":"standalone"},
    },{
      plugin: require('../node_modules/gatsby-plugin-tinacms/gatsby-browser.js'),
      options: {"plugins":[{"resolve":"/Users/patrickquan/Documents/Development/SCOPE/scope-website/node_modules/gatsby-tinacms-git","id":"ca65af08-4c10-5e6f-8b14-831709d38ab4","name":"gatsby-tinacms-git","version":"0.2.17","pluginOptions":{"plugins":[]},"nodeAPIs":["onCreateDevServer"],"browserAPIs":["onClientEntry"],"ssrAPIs":[]},{"resolve":"/Users/patrickquan/Documents/Development/SCOPE/scope-website/node_modules/gatsby-tinacms-remark","id":"4e049a88-2f70-5135-883f-87a76d01585d","name":"gatsby-tinacms-remark","version":"0.6.4","pluginOptions":{"plugins":[]},"nodeAPIs":["setFieldsOnGraphQLNodeType"],"browserAPIs":[],"ssrAPIs":[]}],"sidebar":{"hidden":false}},
    },{
      plugin: require('../node_modules/gatsby-tinacms-git/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
