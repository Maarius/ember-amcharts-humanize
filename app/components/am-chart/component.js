import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {

    var chart = AmCharts.makeChart("chartdiv1", {
      "type": "pie",
      "theme": "light",
      "dataProvider": generateChartData(),
      "valueField": "value",
      "titleField": "category",
      "labelRadiusField": "labelRadius",
      "alphaField": "alpha",
      "startDuration": 0
    });


    function generateChartData() {
      var chartData = [];

      for ( var i = 0; i < 10; i++ ) {
        var value = Math.floor(Math.random() * 100);
        var labelRadius = Math.floor(Math.random() * 100);
        var alpha = Math.random();

        chartData.push( {
          category: "" + i,
          value: value,
          labelRadius: labelRadius,
          alpha: alpha
        } );
      }

      return chartData;
    }


  }

});
