import { HTMLGenerator } from "../../html-generator";

export default function define(HTML: Blockly.BlockGenerators) {
  HTML['id'] = function(block) {
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var code = `id="${value_content}"`;
    return [code, 0];
  };

  HTML['class'] = function(block) {
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var code = `class="${value_content}"`;
    return [code, 0];
  };

  HTML['style'] = function(block) {
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var code = `style="${value_content}"`;
    return [code, 0];
  };

  HTML['height'] = function(block) {
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var code = `height="${value_content}"`;
    return [code, 0];
  };

  HTML['width'] = function(block) {
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var code = `width="${value_content}"`;
    return [code, 0];
  };

  HTML['value'] = function(block) {
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var code = `value="${value_content}"`;
    return [code, 0];
  };

  HTML['placeholder'] = function(block) {
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var code = `placeholder="${value_content}"`;
    return [code, 0];
  };

  HTML['type'] = function(block) {
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var code = `type="${value_content}"`;
    return [code, 0];
  };

  HTML['onclick'] = function(block) {
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var code = `onclick="${value_content}"`;
    return [code, 0];
  };

  HTML['attributes'] = function(block) {
    var value_1 = HTMLGenerator.valueToCode(block, 'in1', 0);
    var value_2 = HTMLGenerator.valueToCode(block, 'in2', 0);
    var value_3 = HTMLGenerator.valueToCode(block, 'in3', 0);
    var value_4 = HTMLGenerator.valueToCode(block, 'in4', 0);
    var value_5 = HTMLGenerator.valueToCode(block, 'in5', 0);
    var code = `${value_1} ${value_2} ${value_3} ${value_4} ${value_5}`;
    return [code, 0];
  };
}
