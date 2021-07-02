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
        const code = 'import board\n';
        return code;
    };

    Python['fesim_streaming'] = function (block) {
        const code = 'import board\n';
        return code;
    };

    Python['fesim_new_data'] = function (block) {
        const code = 'import board\n';
        return code;
    };

    Python['fesim_data'] = function (block) {
        const code = 'import board\n';
        return code;
    };

    Python['fesim_event'] = function (block) {
        const code = 'import board\n';
        return code;
    };            
}

