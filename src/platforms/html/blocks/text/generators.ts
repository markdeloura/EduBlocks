import { HTMLGenerator } from "../../html-generator";

export default function define(HTML: Blockly.BlockGenerators) {
  HTML['paragraph'] = function(block) {
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var value_attributes = HTMLGenerator.valueToCode(block, 'attributes', 0);
    var code = `<p ${value_attributes}>${value_content}</p>\n`;
    return code;
  };

  HTML['heading'] = function(block) {
    var value_type = HTMLGenerator.valueToCode(block, 'type', 0);
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var value_attributes = HTMLGenerator.valueToCode(block, 'attributes', 0);
    var code = `<h${value_type} ${value_attributes}>${value_content}</h${value_type}>\n`;
    return code;
  };

  HTML['span'] = function(block) {
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var value_attributes = HTMLGenerator.valueToCode(block, 'attributes', 0);
    var code = `<span ${value_attributes}>${value_content}</span>\n`;
    return code;
  };

  HTML['link'] = function(block) {
    var value_url = HTMLGenerator.valueToCode(block, 'url', 0);
    var statements_content = HTMLGenerator.statementToCode(block, 'content');
    var code = `<a target="_blank" href="${value_url}">${statements_content}</a>\n`;
    return code;
  };
}
