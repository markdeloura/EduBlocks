import { HTMLGenerator } from "../../html-generator";

export default function define(HTML: Blockly.BlockGenerators) {
  HTML['li'] = function(block) {
    var value_class = HTMLGenerator.valueToCode(block, 'class', 0);
    var statements_content = HTMLGenerator.statementToCode(block, 'content');
    var code = `
    <li ${value_class}>
    ${statements_content}
    </li>
    `;
    return code;
  };

  HTML['ul'] = function(block) {
    var value_class = HTMLGenerator.valueToCode(block, 'class', 0);
    var statements_content = HTMLGenerator.statementToCode(block, 'content');
    var code = `
    <ul ${value_class}>
    ${statements_content}
    </ul>
    `;
    return code;
  };

  HTML['ol'] = function(block) {
    var value_class = HTMLGenerator.valueToCode(block, 'class', 0);
    var statements_content = HTMLGenerator.statementToCode(block, 'content');
    var code = `
    <ol ${value_class}>
    ${statements_content}
    </ol>
    `;
    return code;
  };
}
