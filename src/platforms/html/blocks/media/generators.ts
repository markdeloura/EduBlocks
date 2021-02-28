import { HTMLGenerator } from "../../html-generator";

export default function define(HTML: Blockly.BlockGenerators) {
  HTML['iframe'] = function(block) {
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var value_attributes = HTMLGenerator.valueToCode(block, 'attributes', 0);
    var code = `<iframe src="${value_content}" ${value_attributes}></iframe>\n`;
    return code;
  };

  HTML['video'] = function(block) {
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var value_attributes = HTMLGenerator.valueToCode(block, 'attributes', 0);
    var code = `<video src="${value_content}" ${value_attributes}></video>\n`;
    return code;
  };

  HTML['audio'] = function(block) {
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var value_attributes = HTMLGenerator.valueToCode(block, 'attributes', 0);
    var code = `<audio src="${value_content}" ${value_attributes}></audio>\n`;
    return code;
  };

  HTML['image'] = function(block) {
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var value_attributes = HTMLGenerator.valueToCode(block, 'attributes', 0);
    var code = `<img src="${value_content}" ${value_attributes}>\n`;
    return code;
  };

  HTML['media_controls'] = function(block) {
    var dropdown_controls = block.getFieldValue('controls');
    var code = dropdown_controls;
    return [code, 0];
  };
}
