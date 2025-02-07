import { Editor } from 'grapesjs';
import { LoadOverridePlugin } from '.';
import Form from '../Materials/Form';
import * as ReactDOM from 'react-dom';

const Link = (editor: Editor, opts: LoadOverridePlugin) => {
  const domc = editor.DomComponents;

  domc.addType('link', {
    model: {
      defaults: {
        // Define default properties for the flex container
        draggable: true,
        droppable: true,
        copyable: true,
        badgable: false,
        traits: [
          {
            type: 'color-palette',
            label: '',
            name: 'color',
          },
        ],
      },
      updated(property, value, prevValue) {
        console.log(
          'Local hook: model.updated',
          'property',
          property,
          'value',
          value,
          'prevValue',
          prevValue
        );
      },
    },

    view: {
      onRender() {
        this.el.addEventListener('dblclick', () => {
          this.openModal();
        });
      },

      openModal() {
        const modal = editor.Modal;
        modal.setTitle('Add link text and URL');

        const uniqueId = Date.now();

        // Create form element
        const form = document.createElement('form');
        form.id = 'link-form';

        // Create Link Text input
        const textLabel = document.createElement('label');
        textLabel.setAttribute('for', 'link-text');
        textLabel.textContent = 'Link Text';
        const textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.style.color = 'black';
        textInput.style.marginBottom = '10px';
        textInput.id = 'link-text';
        textInput.name = 'link-text';

        // Create Link URL input
        const urlLabel = document.createElement('label');
        urlLabel.setAttribute('for', 'link-url');
        urlLabel.textContent = 'Link URL';
        const urlInput = document.createElement('input');
        urlInput.type = 'text';
        urlInput.id = 'link-url';
        urlInput.style.color = 'black';
        urlInput.name = 'link-url';

        // Create Save button
        const saveButton = document.createElement('button');
        saveButton.type = 'submit';
        saveButton.textContent = 'Save';

        // Append elements to form
        form.appendChild(textLabel);
        form.appendChild(textInput);
        form.appendChild(document.createElement('br'));
        form.appendChild(urlLabel);
        form.appendChild(urlInput);
        form.appendChild(document.createElement('br'));
        form.appendChild(saveButton);

        modal.setContent(form);

        // Add event listener to handle form submission
        form.addEventListener('submit', (e) => {
          e.preventDefault();

          const linkText = textInput.value;
          const linkUrl = urlInput.value;

          const selectedComponent = editor.getSelected();

          const SelectedStyles = selectedComponent.getStyle();

          const newElement = `<a href=${linkUrl}>
                          ${linkText}
                      </a>`;
          selectedComponent.replaceWith(newElement);

          var event = new Event('change');
          selectedComponent.setStyle(SelectedStyles);
          selectedComponent.view.el.dispatchEvent(event);

          editor.trigger('change:canvas');

          console.log(newElement);
          modal.close();
        });

        //modal.setContent(formHtml);

        modal.setTitle('Add link label');

        modal.open();
      },
    },
  });
};

export default Link;
