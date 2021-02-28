export default function define(Blocks: Blockly.BlockDefinitions) {
  Blocks['paragraph'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("<p ");
      this.appendValueInput("attributes")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(">");
      this.appendValueInput("content")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("</p>");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#448EFF");
   this.setTooltip("Paragraph");
   this.setHelpUrl("");
    }
  };

  Blocks['heading'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("<h");
      this.appendValueInput("type")
          .setCheck(null);
      this.appendValueInput("attributes")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(">");
      this.appendValueInput("content")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("</h>");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#448EFF");
   this.setTooltip("Text heading");
   this.setHelpUrl("");
    }
  };

  Blocks['span'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("<span ");
      this.appendValueInput("attributes")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(">");
      this.appendValueInput("content")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("</span>");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#448EFF");
   this.setTooltip("Span");
   this.setHelpUrl("");
    }
  };

  Blocks['link'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("<a href=\"");
      this.appendValueInput("url")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("\">");
      this.appendStatementInput("content")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("</a>");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#448EFF");
   this.setTooltip("Add a link to an element");
   this.setHelpUrl("");
    }
  };
}

