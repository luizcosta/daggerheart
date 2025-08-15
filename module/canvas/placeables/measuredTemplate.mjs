export default class DhMeasuredTemplate extends foundry.canvas.placeables.MeasuredTemplate {
    _refreshRulerText() {
        super._refreshRulerText();

        const rangeMeasurementSettings = game.settings.get(
            CONFIG.DH.id,
            CONFIG.DH.SETTINGS.gameSettings.variantRules
        ).rangeMeasurement;
        if (rangeMeasurementSettings.enabled) {
            const splitRulerText = this.ruler.text.split(' ');
            if (splitRulerText.length > 0) {
                const rulerValue = Number(splitRulerText[0]);
                const result = this.constructor.getRangeLabels(rulerValue, rangeMeasurementSettings);
                this.ruler.text = result.distance + result.units ? (' ' + result.units) : '' ;
            }
        }
    }

    static getRangeLabels(distance, settings) {
        let result = { distance : '', units: null }
        if (canvas.scene?.rangeMeasurementSettingsOverride === true) {
            result.distance = distance;
            result.units = canvas.scene?.grid?.units;
            return result
        }
        if (distance <= settings.melee) {
            result.distance = game.i18n.localize('DAGGERHEART.CONFIG.Range.melee.name');
        }
        if (distance <= settings.veryClose) {
            result.distance = game.i18n.localize('DAGGERHEART.CONFIG.Range.veryClose.name');
        }
        if (distance <= settings.close) {
            result.distance = game.i18n.localize('DAGGERHEART.CONFIG.Range.close.name');
        }
        if (distance <= settings.far) {
            result.distance = game.i18n.localize('DAGGERHEART.CONFIG.Range.far.name');
        }
        if (distance > settings.far) {
            result.distance = game.i18n.localize('DAGGERHEART.CONFIG.Range.veryFar.name');
        }

        return result;
    }
}
