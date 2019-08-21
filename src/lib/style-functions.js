import { colors } from './style-variables';

const BASE_TONE = 'base';

function _select(map, value, mapType) {
  if (!map[value] && mapType === 'palette') {
    throw Error(`Color Error: The color '${value}' does not exist.`);
  }

  if (!map[value] && mapType === 'tone' && value !== BASE_TONE) {
    console.warning(
      `Color Warning: The tone '${value}' does not exist, falling back to 'base' tone.`
    );
    return map[BASE_TONE];
  }

  return map[value];
}

export function getColor(palette, tone = BASE_TONE) {
  let selectedPalette;
  let selectedColor;

  try {
    selectedPalette = _select(colors, palette, 'palette');
    selectedColor = _select(selectedPalette, tone, 'tone');
  } catch (error) {
    console.log(error);
  }

  return selectedColor;
}
