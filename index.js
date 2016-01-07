// code taken from https://github.com/Automattic/node-canvas/blob/master/lib/context2d.js
var cache = require('lru-cache')({ max: 100 });

/**
 * Font RegExp helpers.
 */

var weights = 'normal|bold|bolder|lighter|[1-9]00'
  , styles = 'normal|italic|oblique'
  , units = 'px|pt|pc|in|cm|mm|%'
  , string = '\'([^\']+)\'|"([^"]+)"|[\\w-]+';

/**
 * Font parser RegExp;
 */

var fontre = new RegExp('^ *'
  + '(?:(' + weights + ') *)?'
  + '(?:(' + styles + ') *)?'
  + '([\\d\\.]+)(' + units + ') *'
  + '((?:' + string + ')( *, *(?:' + string + '))*)'
  );

/**
 * Parse font `str`.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

var parseFont  = function(str, dpi) {
  if (!dpi)
    dpi = 96;

  var font = {}
    , captures = fontre.exec(str);

  // Invalid
  if (!captures) {
    return;
  }

  // Cached
  if (cache[str + '' + dpi]) return cache[str + '' + dpi];

  // Populate font object
  font.weight = captures[1] || 'normal';
  font.style = captures[2] || 'normal';
  font.size = parseFloat(captures[3]);
  font.unit = captures[4];
  font.family = captures[5].replace(/["']/g, '').split(',')[0].trim();

  // TODO: dpi
  // TODO: remaining unit conversion
  switch (font.unit) {
    case 'pt':
      font.size /= .75;
      break;
    case 'in':
      font.size *= dpi;
      break;
    case 'mm':
      font.size *= dpi / 25.4;
      break;
    case 'cm':
      font.size *= dpi / 2.54;
      break;
  }

  return cache[str + '' + dpi] = font;
};

module.exports = parseFont;
