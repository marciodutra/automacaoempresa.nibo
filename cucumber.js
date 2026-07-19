module.exports = {
  default: {    
    paths: [
  'features/**/*.feature'
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