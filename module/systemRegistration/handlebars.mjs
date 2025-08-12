export const preloadHandlebarsTemplates = async function () {
    foundry.applications.handlebars.loadTemplates({
        'daggerheart.inventory-items':
            'systems/daggerheart/templates/sheets/global/partials/inventory-fieldset-items-V2.hbs',
        'daggerheart.inventory-item': 'systems/daggerheart/templates/sheets/global/partials/inventory-item-V2.hbs'
    });
    return foundry.applications.handlebars.loadTemplates([
        'systems/daggerheart/templates/sheets/global/tabs/tab-navigation.hbs',
        'systems/daggerheart/templates/sheets/global/partials/action-item.hbs',
        'systems/daggerheart/templates/sheets/global/partials/domain-card-item.hbs',
        'systems/daggerheart/templates/sheets/global/partials/item-resource.hbs',
        'systems/daggerheart/templates/sheets/global/partials/resource-section.hbs',
        'systems/daggerheart/templates/components/card-preview.hbs',
        'systems/daggerheart/templates/levelup/parts/selectable-card-preview.hbs',
        'systems/daggerheart/templates/sheets/global/partials/feature-section-item.hbs',
        'systems/daggerheart/templates/ui/combatTracker/combatTrackerSection.hbs',
        'systems/daggerheart/templates/actionTypes/damage.hbs',
        'systems/daggerheart/templates/actionTypes/resource.hbs',
        'systems/daggerheart/templates/actionTypes/macro.hbs',
        'systems/daggerheart/templates/actionTypes/uses.hbs',
        'systems/daggerheart/templates/actionTypes/roll.hbs',
        'systems/daggerheart/templates/actionTypes/save.hbs',
        'systems/daggerheart/templates/actionTypes/cost.hbs',
        'systems/daggerheart/templates/actionTypes/range-target.hbs',
        'systems/daggerheart/templates/actionTypes/effect.hbs',
        'systems/daggerheart/templates/actionTypes/beastform.hbs',
        'systems/daggerheart/templates/settings/components/settings-item-line.hbs',
        'systems/daggerheart/templates/ui/tooltip/parts/tooltipChips.hbs',
        'systems/daggerheart/templates/ui/tooltip/parts/tooltipTags.hbs',
        'systems/daggerheart/templates/dialogs/downtime/activities.hbs',
        'systems/daggerheart/templates/dialogs/dice-roll/costSelection.hbs',

        
        'systems/daggerheart/templates/ui/chat/parts/roll-part.hbs',
        'systems/daggerheart/templates/ui/chat/parts/damage-part.hbs',
        'systems/daggerheart/templates/ui/chat/parts/target-part.hbs',
        'systems/daggerheart/templates/ui/chat/parts/button-part.hbs',
    ]);
};
