import { Editor } from 'grapesjs';
import { LoadOverridePlugin } from '.';
import Form from '../Materials/Form';
import * as ReactDOM from 'react-dom';

const SocialMedia = (editor: Editor, opts: LoadOverridePlugin) => {
  const domc = editor.DomComponents;

  domc.addType('social-container', {
    isComponent: (el) => el.id === 'social-container',
    model: {
      defaults: {
        // Define default properties for the flex container
        draggable: true,
        droppable: true,
        copyable: true,
        badgable: false,
        traits: [
          {
            type: 'social-media',
            label: '',
            name: 'color',
          },
        ],
      },
    },
  });
};

export default SocialMedia;
