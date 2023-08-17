module.exports = {
  displayName: 'bierdeliveryapp-domain-navigation-routes',
  preset: 'react-native',
  resolver: '@nx/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html', 'tsx', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  moduleNameMapper: {
    '\\.svg$': '@nx/react-native/plugins/jest/svg-mock',
  },
  coverageDirectory:
    '../../../../../coverage/libs/bierdeliveryapp/domain/navigation/routes',
};
