module.exports = {
  default: {
    paths: [
      'features/registration.feature',
      'features/organization.feature',
      'features/Company.feature',
      'features/first-steps.feature'
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