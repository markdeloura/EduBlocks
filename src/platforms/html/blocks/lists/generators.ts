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

  HTML['select'] = function(block) {
    var value_class = HTMLGenerator.valueToCode(block, 'class', 0);
    var statements_content = HTMLGenerator.statementToCode(block, 'content');
    var code = `
    <select ${value_class}>
    ${statements_content}
    </select>
    `;
    return code;
  };

  HTML['option'] = function(block) {
    var value_attributes = HTMLGenerator.valueToCode(block, 'attributes', 0);
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var code = `<option ${value_attributes}>${value_content}</option>`;
    return code;
  };
}
