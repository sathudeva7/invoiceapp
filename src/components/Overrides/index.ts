import { Editor, Plugin } from 'grapesjs';
import Link from '../Overrides/link';
import SocialMedia from '../Overrides/socialMedia';
import Border from '../Overrides/border';
import StyleConfiguration from './StyleConfiguration';

export interface LoadOverridePlugin {
  setShowQuickActions: () => void;
}
const LoadOverrides: Plugin<LoadOverridePlugin> = (editor: Editor, opts) => {
  Link(editor, opts);
  SocialMedia(editor, opts);
  StyleConfiguration(editor);
  // Border(editor, opts);
};

export default LoadOverrides;
