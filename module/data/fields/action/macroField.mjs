const fields = foundry.data.fields;

export default class MacroField extends fields.DocumentUUIDField {
    constructor(context = {}) {
        super({ type: "Macro" }, context);
    }
}
