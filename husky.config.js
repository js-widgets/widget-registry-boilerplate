module.exports = {
  hooks: {
    'pre-commit': 'npm run-script lint:fix',
    'commit-msg': 'commitlint -e $HUSKY_GIT_PARAMS',
    'pre-push': 'npm test',
  },
};
