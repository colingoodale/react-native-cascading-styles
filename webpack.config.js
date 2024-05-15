const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const mode = process.env.MODE || 'development';
  const config = await createExpoWebpackConfigAsync({mode, ...env}, argv);
  // Customize the config before returning it.
  return config;
};
