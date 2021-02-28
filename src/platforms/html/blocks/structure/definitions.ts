export default function define(Blocks: Blockly.BlockDefinitions) {
  Blocks['div_container'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("<div");
      this.appendValueInput("class")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(">");
      this.appendStatementInput("content")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("</div>");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF8500");
   this.setTooltip("Create a div");
   this.setHelpUrl("");
    }
  };

  Blocks['header'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("<header");
      this.appendValueInput("class")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(">");
      this.appendStatementInput("content")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("</header>");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF8500");
   this.setTooltip("Create a header");
   this.setHelpUrl("");
    }
  };

  Blocks['footer'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("<footer");
      this.appendValueInput("class")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(">");
      this.appendStatementInput("content")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("</footer>");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF8500");
   this.setTooltip("Create a footer");
   this.setHelpUrl("");
    }
  };

  Blocks['article'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("<article");
      this.appendValueInput("class")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(">");
      this.appendStatementInput("content")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("</article>");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF8500");
   this.setTooltip("Create an article");
   this.setHelpUrl("");
    }
  };

  Blocks['section'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("<section");
      this.appendValueInput("class")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(">");
      this.appendStatementInput("content")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("</section>");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF8500");
   this.setTooltip("Create a section");
   this.setHelpUrl("");
    }
  };

  Blocks['br'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("<br>");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF8500");
   this.setTooltip("Add a line break");
   this.setHelpUrl("");
    }
  };

  Blocks['hr'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("<hr>");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF8500");
   this.setTooltip("Add a separator");
   this.setHelpUrl("");
    }
  };
}

