/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      resolver: {
        sourceExts: ['jsx', 'js', 'json', 'tsx', 'ts'],
      },
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
