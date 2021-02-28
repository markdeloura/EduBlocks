export default function define(Blocks: Blockly.BlockDefinitions) {
    Blocks['script'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("<script>");
          this.appendStatementInput("content")
              .setCheck(null);
          this.appendDummyInput()
              .appendField("</script>");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#FFAA00");
       this.setTooltip("Create a script tag");
       this.setHelpUrl("");
        }
    };

    Blocks['multiline'] = {
        init: function() {
          this.appendDummyInput()
              .appendField(new Blockly.FieldMultilineInput("\n \n \n"), "content");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#FFAA00");
       this.setTooltip("Multiline input");
       this.setHelpUrl("");
        }
    };
}

