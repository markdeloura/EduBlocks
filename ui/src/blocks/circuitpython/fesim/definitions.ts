export default function define(Blocks: Blockly.BlockDefinitions) {

    var maincolour = "#ff0066";
    
    Blocks['JUNK_JUNK'] = {
      init: function () {
        this.appendDummyInput()
          .appendField('import board');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(maincolour);
        this.setTooltip('Imports the board library.');
        this.setHelpUrl('http://www.example.com/');
      },
    };
}
