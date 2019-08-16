import {requireNativeComponent, NativeModules, View} from 'react-native';

var iface = {
    name: 'RNChartView',
    propTypes: {
      ...View.propTypes
    },
  };

  
  var chartView = requireNativeComponent('RNChartView', iface);
  
  export default chartView;