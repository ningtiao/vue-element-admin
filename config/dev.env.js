'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '" https://www.easy-mock.com/mock/5aa5f401a99e172c9fe77f05/vue-element-admin"',
})