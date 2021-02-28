import { HTMLGenerator } from "../../html-generator";

export default function define(HTML: Blockly.BlockGenerators) {
  HTML['div_container'] = function(block) {
    var value_class = HTMLGenerator.valueToCode(block, 'class', 0);
    var statements_content = HTMLGenerator.statementToCode(block, 'content');
    var code = `<div ${value_class}>${statements_content}</div>`;
    return code;
  };

  HTML['header'] = function(block) {
    var value_class = HTMLGenerator.valueToCode(block, 'class', 0);
    var statements_content = HTMLGenerator.statementToCode(block, 'content');
    var code = `<header ${value_class}>${statements_content}</header>`;
    return code;
  };

  HTML['footer'] = function(block) {
    var value_class = HTMLGenerator.valueToCode(block, 'class', 0);
    var statements_content = HTMLGenerator.statementToCode(block, 'content');
    var code = `<footer ${value_class}>${statements_content}</footer>`;
    return code;
  };

  HTML['article'] = function(block) {
    var value_class = HTMLGenerator.valueToCode(block, 'class', 0);
    var statements_content = HTMLGenerator.statementToCode(block, 'content');
    var code = `<article ${value_class}>${statements_content}</article>`;
    return code;
  };

  HTML['section'] = function(block) {
    var value_class = HTMLGenerator.valueToCode(block, 'class', 0);
    var statements_content = HTMLGenerator.statementToCode(block, 'content');
    var code = `<section ${value_class}>${statements_content}</section>`;
    return code;
  };

  HTML['br'] = function(block) {
    var code = '<br>';
    return code;
  };

  HTML['hr'] = function(block) {
    var code = '<hr>';
    return code;
  };
}
