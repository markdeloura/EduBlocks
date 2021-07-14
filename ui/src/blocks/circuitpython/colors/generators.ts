export default function define(Python: Blockly.BlockGenerators) {

  Python['colors_black'] = function(block) {
    var code = '(0, 0, 0)';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['colors_red'] = function(block) {
    var code = '(255, 0, 0)';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['colors_green'] = function(block) {
    var code = '(0, 255, 0)';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['colors_blue'] = function(block) {
    var code = '(0, 0, 255)';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['colors_yellow'] = function(block) {
    var code = '(255, 255, 0)';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['colors_cyan'] = function(block) {
    var code = '(0, 255, 255)';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['colors_magenta'] = function(block) {
    var code = '(255, 0, 255)';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['colors_white'] = function(block) {
    var code = '(255, 255, 255)';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['colors_custom'] = function(block) {
    var red_value   = Blockly.Python.valueToCode(block, 'redval', Blockly.Python.ORDER_ATOMIC);
    var green_value = Blockly.Python.valueToCode(block, 'greenval', Blockly.Python.ORDER_ATOMIC);
    var blue_value  = Blockly.Python.valueToCode(block, 'blueval', Blockly.Python.ORDER_ATOMIC);

    var code = '(' + red_value + ', ' + green_value + ', ' + blue_value + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

}
