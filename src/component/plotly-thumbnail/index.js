const plotlyGraph = require('../plotly-graph')

module.exports = {
  name: 'plotly-thumbnail',
  availableOptions: ['plotlyJS', 'mathjax', 'topojson'],
  inject: plotlyGraph.inject,
  parse: require('./parse'),
  render: plotlyGraph.render,
  convert: plotlyGraph.convert
}
