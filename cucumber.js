module.exports = {
  default: {
    paths: [
      'features/registration.feature',
      'features/organization.feature',
      'features/Company.feature'
    ],
    require: [
      'steps/**/*.js',
      'hooks/**/*.js'
    ],
    format: [
      'progress',
      'json:reports/cucumber-report.json'
    ],
    publishQuiet: true,
  }
};