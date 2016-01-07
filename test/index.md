# basic expectations

when applied to input data should match one in the table

```js

// test taken from https://github.com/Automattic/node-canvas/blob/master/test/canvas.test.js
var assert = require('assert');

var tests = [
    '20px Arial'
  , { size: 20, unit: 'px', family: 'Arial' }
  , '20pt Arial'
  , { size: 26.666666666666668, unit: 'pt', family: 'Arial' }
  , '20.5pt Arial'
  , { size: 27.333333333333332, unit: 'pt', family: 'Arial' }
  , '20% Arial'
  , { size: 20, unit: '%', family: 'Arial' }
  , '20mm Arial'
  , { size: 75.59055118110237, unit: 'mm', family: 'Arial' }
  , '20px serif'
  , { size: 20, unit: 'px', family: 'serif' }
  , '20px sans-serif'
  , { size: 20, unit: 'px', family: 'sans-serif' }
  , '20px monospace'
  , { size: 20, unit: 'px', family: 'monospace' }
  , '50px Arial, sans-serif'
  , { size: 50, unit: 'px', family: 'Arial' }
  , 'bold italic 50px Arial, sans-serif'
  , { style: 'italic', weight: 'bold', size: 50, unit: 'px', family: 'Arial' }
  , '50px Helvetica ,  Arial, sans-serif'
  , { size: 50, unit: 'px', family: 'Helvetica' }
  , '50px "Helvetica Neue", sans-serif'
  , { size: 50, unit: 'px', family: 'Helvetica Neue' }
  , '50px "Helvetica Neue", "foo bar baz" , sans-serif'
  , { size: 50, unit: 'px', family: 'Helvetica Neue' }
  , "50px 'Helvetica Neue'"
  , { size: 50, unit: 'px', family: 'Helvetica Neue' }
  , 'italic 20px Arial'
  , { size: 20, unit: 'px', style: 'italic', family: 'Arial' }
  , 'oblique 20px Arial'
  , { size: 20, unit: 'px', style: 'oblique', family: 'Arial' }
  , 'normal 20px Arial'
  , { size: 20, unit: 'px', style: 'normal', family: 'Arial' }
  , '300 20px Arial'
  , { size: 20, unit: 'px', weight: '300', family: 'Arial' }
  , '800 20px Arial'
  , { size: 20, unit: 'px', weight: '800', family: 'Arial' }
  , 'bolder 20px Arial'
  , { size: 20, unit: 'px', weight: 'bolder', family: 'Arial' }
  , 'lighter 20px Arial'
  , { size: 20, unit: 'px', weight: 'lighter', family: 'Arial' }
];

var parseFontStyle = require('canvas-fontstyle');

for (var t =0; t < tests.length; t += 2) {
  var fontStyle = tests[t];
  var expectedFont = tests[t+1];
  var font = parseFontStyle(fontStyle);
  if (!expectedFont.style) expectedFont.style = 'normal';
  if (!expectedFont.weight) expectedFont.weight = 'normal';
  assert.deepEqual(font, expectedFont);
}

```
