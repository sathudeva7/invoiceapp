import { colorPaletteTrait } from './colorPaletteTrait';

export const TraitManager = (editor) => {
  editor.TraitManager.addType('social-media', colorPaletteTrait(editor));
};
