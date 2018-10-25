import React, { Component } from 'react';

import ChartistGraph from 'react-chartist';

export default class ChartBars extends Component {
    render () {
        let data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
                [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
            ]
        };

        let options = {
            high: 10,
            low: 0,
            axisY: {
                labelInterpolationFnc: function(value, index) {
                    return index % 2 === 0 ? value : null;
                }
            }
        };

        return (
            <ChartistGraph data={data} options={options} type="Bar" />
        );
  }
}
