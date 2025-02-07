import * as React from 'react';
import {
  BlocksProvider,
  LayersProvider,
  PagesProvider,
  SelectorsProvider,
  StylesProvider,
  TraitsProvider,
} from '@grapesjs/react';
import {
  mdiBrush,
  mdiLayers,
  mdiViewGridPlus,
  mdiTextBoxMultiple,
  mdiCog,
} from '@mdi/js';
import Icon from '@mdi/react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useState } from 'react';
import CustomBlockManager from './CustomBlockManager';
import { MAIN_BORDER_COLOR, cx } from './common';
import CustomPageManager from './CustomPageManager';
import CustomLayerManager from './CustomLayerManager';
import CustomSelectorManager from './CustomSelectorManager';
import CustomStyleManager from './CustomStyleManager';
import { useEditor } from '@grapesjs/react';
import CustomTraitManager from './CustomTraitManager';

const defaultTabProps = {
  className: '!min-w-0',
};

export default function RightSidebar({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [activeTab, setActiveTab] = useState('Data');
  const editor = useEditor();

  const handleDataVariable = () => {
    const modal = editor.Modal;
    modal.setTitle('Create a New Variable');

    // Create form element
    const form = document.createElement('form');
    form.style.padding = '20px';
    form.style.backgroundColor = '#ffffff';
    form.style.borderRadius = '8px';
    form.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    form.id = 'variable-form';

    // Tabs Container (unchanged)
    const tabsContainer = document.createElement('div');
    tabsContainer.style.display = 'flex';
    tabsContainer.style.marginBottom = '10px';
    tabsContainer.style.borderBottom = '1px solid #e0e0e0';

    const standardTab = document.createElement('button');
    standardTab.textContent = 'Standard';
    standardTab.style.border = 'none';
    standardTab.style.borderBottom = '2px solid #007bff';
    standardTab.style.backgroundColor = 'transparent';
    standardTab.style.padding = '10px';
    standardTab.style.cursor = 'pointer';
    standardTab.style.outline = 'none';

    const airtableTab = document.createElement('button');
    airtableTab.textContent = 'Airtable';
    airtableTab.style.border = 'none';
    airtableTab.style.backgroundColor = 'transparent';
    airtableTab.style.padding = '10px';
    airtableTab.style.cursor = 'pointer';
    airtableTab.style.outline = 'none';

    tabsContainer.appendChild(standardTab);
    tabsContainer.appendChild(airtableTab);

    // Create Variable Name Input
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'variable-name');
    nameLabel.textContent = 'Variable Name';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'variable-name';
    nameInput.name = 'variable-name';
    nameInput.placeholder = 'Enter variable name...';
    nameInput.style.marginTop = '5px';
    nameInput.style.marginBottom = '15px';
    nameInput.style.width = '100%';
    nameInput.style.padding = '8px';
    nameInput.style.border = '1px solid #e0e0e0';
    nameInput.style.borderRadius = '4px';

    // Container for variable types and the "Click to Copy" button
    const variableTypeContainer = document.createElement('div');
    variableTypeContainer.style.display = 'flex'; // To place text and button side-by-side
    variableTypeContainer.style.alignItems = 'center';
    variableTypeContainer.style.marginTop = '5px';
    variableTypeContainer.style.color = '#555';

    const typeSpan = document.createElement('span');
    typeSpan.style.cursor = 'pointer';
    typeSpan.style.textDecoration = 'underline'; // Make it look clickable

    const copyButton = document.createElement('button');
    copyButton.textContent = 'Click to Copy';
    copyButton.style.marginLeft = '10px';
    copyButton.style.cursor = 'pointer';
    copyButton.style.padding = '5px 10px';
    copyButton.style.border = '1px solid #007bff';
    copyButton.style.backgroundColor = '#007bff';
    copyButton.style.color = '#fff';
    copyButton.style.borderRadius = '4px';
    copyButton.style.outline = 'none';

    // Add input event listener to the variable name input
    nameInput.addEventListener('input', (e) => {
      const inputValue = e.target.value;
      typeSpan.innerHTML = ''; // Clear previous content

      if (inputValue.length > 0) {
        // Display the input value and enable copy
        typeSpan.textContent = `"${inputValue}"`;
        copyButton.style.display = 'inline-block'; // Show copy button
      } else {
        copyButton.style.display = 'none'; // Hide copy button when input is empty
      }
    });

    // Function to copy to clipboard
    const copyToClipboard = (value) => {
      navigator.clipboard.writeText(value).then(() => {
        typeSpan.textContent = 'Copied!';
        setTimeout(() => {
          typeSpan.textContent = `"${nameInput.value}"`; // Reset after a short delay
        }, 1000); // Reset after 1 second
      });
    };

    // Click event for copying the value
    typeSpan.addEventListener('click', () => {
      copyToClipboard(nameInput.value);
    });

    copyButton.addEventListener('click', () => {
      copyToClipboard(nameInput.value);
    });

    // Hide copy button initially
    copyButton.style.display = 'none';

    // Append text and button to the container
    variableTypeContainer.appendChild(typeSpan);
    variableTypeContainer.appendChild(copyButton);

    // Instructions Section (unchanged)
    const instructionsContainer = document.createElement('div');
    instructionsContainer.style.marginTop = '10px';

    const instructionsToggle = document.createElement('button');
    instructionsToggle.textContent = '▶ Instructions';
    instructionsToggle.style.border = 'none';
    instructionsToggle.style.backgroundColor = 'transparent';
    instructionsToggle.style.padding = '8px 0';
    instructionsToggle.style.cursor = 'pointer';
    instructionsToggle.style.color = '#555';
    instructionsToggle.style.outline = 'none';
    instructionsToggle.style.display = 'flex';
    instructionsToggle.style.alignItems = 'center';

    const instructionsContent = document.createElement('div');
    instructionsContent.style.display = 'none';
    instructionsContent.style.padding = '10px';
    instructionsContent.style.border = '1px solid #e0e0e0';
    instructionsContent.style.borderRadius = '5px';
    instructionsContent.style.backgroundColor = '#f8f9fa';
    instructionsContent.style.marginTop = '5px';

    const instructionList = document.createElement('ul');
    instructionList.style.paddingLeft = '20px';
    instructionList.style.marginTop = '5px';

    const steps = [
      '1. Enter the name of your new variable.',
      '2. Copy the generated token (will be shown when you enter the variable name).',
      '3. Paste it into a Text element in your template.',
    ];

    steps.forEach((step) => {
      const li = document.createElement('li');
      li.textContent = step;
      instructionList.appendChild(li);
    });

    instructionsContent.appendChild(instructionList);

    instructionsToggle.addEventListener('click', (e) => {
      e.preventDefault();
      if (instructionsContent.style.display === 'none') {
        instructionsContent.style.display = 'block';
        instructionsToggle.textContent = '▼ Instructions';
      } else {
        instructionsContent.style.display = 'none';
        instructionsToggle.textContent = '▶ Instructions';
      }
    });

    instructionsContainer.appendChild(instructionsToggle);
    instructionsContainer.appendChild(instructionsContent);

    // Append elements to form
    form.appendChild(tabsContainer);
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(variableTypeContainer); // Add the variable type container
    form.appendChild(instructionsContainer);

    // Set modal content and open
    modal.setContent(form);
    modal.open();
  };

  return (
    <div
      className={cx(
        'gjs-right-sidebar font-quicksand flex flex-col',
        className
      )}
      style={{
        'min-width': '407px',
        'mac-width': '407px',
        width: '407px',
      }}
    >
      <div className="flex justify-center my-2 mx-2  space-x-1 ">
        <button
          className={`px-2 py-2 w-full text-sm ${
            activeTab === 'Data'
              ? 'bg-gray-200 text-black border border-gray-300 rounded-md'
              : ' text-gray-700'
          } `}
          onClick={() => setActiveTab('Data')}
        >
          Data
        </button>
        <button
          className={`px-2 py-2 w-full text-sm ${
            activeTab === 'Pagina'
              ? 'bg-gray-200 text-black border border-gray-300 rounded-md'
              : ' text-gray-700'
          } `}
          onClick={() => setActiveTab('Pagina')}
        >
          Pagina's
        </button>
      </div>
      <div
        className={cx(
          'overflow-y-auto bg-[#F7F9F6] flex-grow border-t',
          MAIN_BORDER_COLOR
        )}
      >
        <button className="border p-2 rounded-md" onClick={handleDataVariable}>
          New Varaible
        </button>
        {activeTab === 'Data' && (
          <TraitsProvider>
            {(props) => <CustomTraitManager {...props} />}
          </TraitsProvider>
        )}
        {activeTab === 'Pagina' && (
          <PagesProvider>
            {(props) => <CustomPageManager {...props} />}
          </PagesProvider>
        )}
      </div>
    </div>
  );
}
