import { Editor } from 'grapesjs';
import { LoadOverridePlugin } from '.';
import Form from '../Materials/Form';
import * as ReactDOM from 'react-dom';

const Block = (editor: Editor, opts: LoadOverridePlugin) => {
  const domc = editor.DomComponents;

  domc.addType('block', {});
};
