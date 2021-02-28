export default function define(Blocks: Blockly.BlockDefinitions) {
  Blocks['form'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("<form");
      this.appendValueInput("class")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(">");
      this.appendStatementInput("content")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("</form>");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#00C0EA");
   this.setTooltip("Create a form");
   this.setHelpUrl("");
    }
  };

  Blocks['input'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("<input type=\"")
          .appendField(new Blockly.FieldDropdown([["text","text"], ["number","number"], ["date","date"], ["datetime-local","datetime-local"], ["email","email"], ["checkbox","checkbox"], ["color","color"], ["password","password"], ["radio","radio"], ["range","range"], ["search","search"], ["url","url"], ["tel","tel"]]), "options")
          .appendField("\" ");
      this.appendValueInput("attributes")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(">");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#00C0EA");
   this.setTooltip("Create an input element");
   this.setHelpUrl("");
    }
  };

  Blocks['button'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("<button ");
      this.appendValueInput("attributes")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(">");
      this.appendValueInput("content")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("</button>");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#00C0EA");
   this.setTooltip("Create a button element");
   this.setHelpUrl("");
    }
  };

  Blocks['label'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("<label for=\"");
      this.appendValueInput("for")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("\" ");
      this.appendValueInput("attributes")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(">");
      this.appendValueInput("content")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("</label>");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#00C0EA");
   this.setTooltip("Create a label element");
   this.setHelpUrl("");
    }
  };
}

