import { HTMLGenerator } from "../../html-generator";

export default function define(HTML: Blockly.BlockGenerators) {
  HTML['textinline'] = function(block) {
    var text_text = block.getFieldValue('text');
    var code = text_text;
    return [code, 0];
  };

  HTML['sliderinline'] = function(block) {
    var text_text = block.getFieldValue('slider');
    var code = text_text;
    return [code, 0];
  };

  HTML['html'] = function(block) {
    var statements_content = HTMLGenerator.statementToCode(block, 'content');
    var code = `<html>${statements_content}</html>`;
    return code;
  };

  HTML['head'] = function(block) {
    var statements_content = HTMLGenerator.statementToCode(block, 'content');
    var code = `<head>${statements_content}</head>`;
    return code;
  };

  HTML['title'] = function(block) {
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var code = `<title>${value_content}</title>\n`;
    return code;
  };

  HTML['body'] = function(block) {
    var statements_content = HTMLGenerator.statementToCode(block, 'content');
    var code = `<body>${statements_content}</body>`;
    return code;
  };
}
