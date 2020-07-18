const _ = require('lodash');
const config = require('../configurations/config.json');
const defaultConfig = 'DEV';
const environment = process.env.NODE_ENV || 'DEV';
const environmentConfig = config[environment];
const finalConfig = _.merge(defaultConfig, environmentConfig);
global.gConfig = finalConfig;