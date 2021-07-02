export default function define(Python: Blockly.BlockGenerators) {
    Python['fesim_import'] = function (block) {
        const code = 'import FE_sim_data\n';
        return code;
    };

    Python['fesim_init_provider'] = function (block) {
        // Get parameters
        let variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
        let provider_name = block.getFieldValue('provider');
        
        // Assemble Python into code variable.
        let code = variable_name + " = FE_sim_data.FESimData(provider='" + provider_name + "')\n";
        return code;
    };

    Python['fesim_update'] = function (block) {
        // Get parameters
        let variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
        
        // Assemble Python into code variable.
        let code = variable_name + '.update()\n';
        return code;
    };

    Python['fesim_streaming'] = function (block) {
        // Get parameters
        let variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
        
        // Assemble Python into code variable.
        let code = variable_name + '.streaming';
        return [code, Blockly.Python.ORDER_ATOMIC];
    };

    Python['fesim_new_data'] = function (block) {
        // Get parameters
        let variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
        
        // Assemble Python into code variable.
        let code = variable_name + '.new_data';
        return [code, Blockly.Python.ORDER_ATOMIC];
    };

    Python['fesim_data'] = function (block) {
        // Get parameters
        let variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
        
        // Assemble Python into code variable.
        let code = variable_name + '.data';
        return [code, Blockly.Python.ORDER_ATOMIC];
    };

    Python['fesim_event'] = function (block) {
        // Get parameters
        let variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
        
        // Assemble Python into code variable.
        let code = variable_name + '.event';
        return [code, Blockly.Python.ORDER_ATOMIC];
    };            
}

