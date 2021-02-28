import { HTMLGenerator } from "../../html-generator";

export default function define(HTML: Blockly.BlockGenerators) {
  HTML['form'] = function(block) {
    var value_class = HTMLGenerator.valueToCode(block, 'class', 0);
    var statements_content = HTMLGenerator.statementToCode(block, 'content');
    var code = `
    <form ${value_class}>
    ${statements_content}
    </form>
    `;
    return code;
  };

  HTML['input'] = function(block) {
    var dropdown_options = block.getFieldValue('options');
    var value_attributes = HTMLGenerator.valueToCode(block, 'attributes', 0);
    var code = `<input type="${dropdown_options}" ${value_attributes}>`;
    return code;
  };

  HTML['button'] = function(block) {
    var value_attributes = HTMLGenerator.valueToCode(block, 'attributes', 0);
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var code = `<button ${value_attributes}>${value_content}</button>`;
    return code;
  };

  HTML['label'] = function(block) {
    var value_for = HTMLGenerator.valueToCode(block, 'for', 0);
    var value_attributes = HTMLGenerator.valueToCode(block, 'attributes', 0);
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var code = `<label for="${value_for}" ${value_attributes}>${value_content}</label>`;
    return code;
  };
}
