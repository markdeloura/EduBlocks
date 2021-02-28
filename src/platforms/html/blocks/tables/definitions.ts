export default function define(Blocks: Blockly.BlockDefinitions) {
  Blocks['table'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("<table");
      this.appendValueInput("class")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(">");
      this.appendStatementInput("content")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("</table>");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF4A76");
   this.setTooltip("Create a table");
   this.setHelpUrl("");
    }
  };

  Blocks['table_row'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("<tr");
      this.appendValueInput("class")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(">");
      this.appendStatementInput("content")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("</tr>");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF4A76");
   this.setTooltip("Create a table row");
   this.setHelpUrl("");
    }
  };

  Blocks['table_header'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("<th");
      this.appendValueInput("class")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(">");
      this.appendStatementInput("content")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("</th>");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF4A76");
   this.setTooltip("Create a table header");
   this.setHelpUrl("");
    }
  };

  Blocks['table_data'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("<td");
      this.appendValueInput("class")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(">");
      this.appendStatementInput("content")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("</td>");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF4A76");
   this.setTooltip("Create a table data cell");
   this.setHelpUrl("");
    }
  };
}

