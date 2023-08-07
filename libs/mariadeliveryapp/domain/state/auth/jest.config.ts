module.exports = {
  displayName: 'mariadeliveryapp-domain-state-auth',
  preset: 'react-native',
  resolver: '@nx/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html', 'tsx', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  moduleNameMapper: {
    '\\.svg$': '@nx/react-native/plugins/jest/svg-mock',
  },
  coverageDirectory:
    '../../../../../coverage/libs/mariadeliveryapp/domain/state/auth',
};
