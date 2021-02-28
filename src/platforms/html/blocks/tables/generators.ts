import { HTMLGenerator } from "../../html-generator";

export default function define(HTML: Blockly.BlockGenerators) {
  HTML['table'] = function(block) {
    var value_class = HTMLGenerator.valueToCode(block, 'class', 0);
    var statements_content = HTMLGenerator.statementToCode(block, 'content');
    var code = `
    <table ${value_class}>
    ${statements_content}
    </table>
    `;
    return code;
  };

  HTML['table_header'] = function(block) {
    var value_class = HTMLGenerator.valueToCode(block, 'class', 0);
    var statements_content = HTMLGenerator.statementToCode(block, 'content');
    var code = `
    <th ${value_class}>
    ${statements_content}
    </th>
    `;
    return code;
  };

  HTML['table_row'] = function(block) {
    var value_class = HTMLGenerator.valueToCode(block, 'class', 0);
    var statements_content = HTMLGenerator.statementToCode(block, 'content');
    var code = `
    <tr ${value_class}>
    ${statements_content}
    </tr>
    `;
    return code;
  };

  HTML['table_data'] = function(block) {
    var value_class = HTMLGenerator.valueToCode(block, 'class', 0);
    var statements_content = HTMLGenerator.statementToCode(block, 'content');
    var code = `
    <td ${value_class}>
    ${statements_content}
    </td>
    `;
    return code;
  };
}
