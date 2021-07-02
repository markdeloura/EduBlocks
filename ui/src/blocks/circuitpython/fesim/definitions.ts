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
                .appendField(new Blockly.FieldDropdown([['raven_aerostar', 'raven_aerostar'], ['up_aerospace', 'up_aerospace'], ['blue_origin', 'blue_origin']]), "provider")
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
            this.appendDummyInput()
                .appendField(new Blockly.FieldVariable("sim_data"), "var")
                .appendField(".update()");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            //this.setInputsInline(true);
            this.setColour(fesimcolour);
            this.setTooltip('Call module update function.');
            this.setHelpUrl('http://www.futureengineers.org/');
        },
    };

    Blocks['fesim_streaming'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldVariable("sim_data"), "var")
                .appendField(".streaming");
            //this.setInputsInline(true);
            this.setOutput(true, null);
            this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
            this.setColour(fesimcolour);
            this.setTooltip('Boolean that checks if data is streaming.');
            this.setHelpUrl('http://www.futureengineers.org/');
        },
    };
        
    Blocks['fesim_new_data'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldVariable("sim_data"), "var")
                .appendField(".new_data");
            //this.setInputsInline(true);
            this.setOutput(true, null);
            this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
            this.setColour(fesimcolour);
            this.setTooltip('Boolean that checks if new data has arrived.');
            this.setHelpUrl('http://www.futureengineers.org/');
        },
    };

    Blocks['fesim_data'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldVariable("sim_data"), "var")
                .appendField(".data");
            //this.setInputsInline(true);
            this.setOutput(true, null);
            this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
            this.setColour(fesimcolour);
            this.setTooltip('Represents newest data that has arrived.');
            this.setHelpUrl('http://www.futureengineers.org/');
        },
    };

    Blocks['fesim_event'] = {
        init: function () { 
            this.appendDummyInput()
                .appendField(new Blockly.FieldVariable("sim_data"), "var")
                .appendField(".event");
            //this.setInputsInline(true);
            this.setOutput(true, null);
            this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
            this.setColour(fesimcolour);
            this.setTooltip('Represents most current flight event.');
            this.setHelpUrl('http://www.futureengineers.org/');        
        },
    };
}
