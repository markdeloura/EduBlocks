export default function define(Blocks: Blockly.BlockDefinitions) {

    var fesimcolour = "#ff6666";
    
    Blocks['fesim_import'] = {
        init: function () {
            this.appendDummyInput().appendField('import FE_sim_data');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(fesimcolour);
            this.setTooltip('Imports the FE Sim Data library.');
            this.setHelpUrl('http://www.futureengineers.org/');
        },
    };

    Blocks['fesim_init_provider'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldVariable("sim_data"), "var")
                .appendField(" = FE_sim_data.FESimData(provider='")
                .appendField(new Blockly.FieldDropdown([['raven_aerostar', 'raven_aerostar'], ['up_aerospace', 'up_aerospace'], ["blue_origin", "blue_origin"]]), "provider")
            this.appendDummyInput()
                .appendField("')");            
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(fesimcolour);
            this.setTooltip('Initializes module with the flight provider.');
            this.setHelpUrl('http://www.futureengineers.org/');
        },
    };

    Blocks['fesim_update'] = {
        init: function () {
            this.appendDummyInput().appendField('import board');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(fesimcolour);
            this.setTooltip('Imports the board library.');
            this.setHelpUrl('http://www.futureengineers.org/');
        },
    };

    Blocks['fesim_streaming'] = {
        init: function () {
            this.appendDummyInput().appendField('import board');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(fesimcolour);
            this.setTooltip('Imports the board library.');
            this.setHelpUrl('http://www.futureengineers.org/');
        },
    };
        
    Blocks['fesim_new_data'] = {
        init: function () {
            this.appendDummyInput().appendField('import board');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(fesimcolour);
            this.setTooltip('Imports the board library.');
            this.setHelpUrl('http://www.futureengineers.org/');
        },
    };

    Blocks['fesim_data'] = {
        init: function () {
            this.appendDummyInput().appendField('import board');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(fesimcolour);
            this.setTooltip('Imports the board library.');
            this.setHelpUrl('http://www.futureengineers.org/');
        },
    };

    Blocks['fesim_event'] = {
        init: function () {
            this.appendDummyInput().appendField('import board');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(fesimcolour);
            this.setTooltip('Imports the board library.');
            this.setHelpUrl('http://www.futureengineers.org/');
        },
    };
}