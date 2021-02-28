import { HTMLGenerator } from "../../html-generator";

export default function define(HTML: Blockly.BlockGenerators) {
  HTML['script'] = function(block) {
    var statements_name = HTMLGenerator.statementToCode(block, 'content');
    var code = `<script>${statements_name}</script>`;
    return code;
  };

  HTML['multiline'] = function(block) {
    var text_content = block.getFieldValue('content');
    var code = `${text_content}\n`;
    return code;
  };
}
