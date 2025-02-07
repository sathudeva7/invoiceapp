import * as React from 'react';
import { StylesResultProps } from '@grapesjs/react';
import {
  mdiChevronDown,
  mdiCubeOutline,
  mdiFormatColorFill,
  mdiFormatTextVariant,
  mdiBorderAll,
} from '@mdi/js';
import Icon from '@mdi/react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { MAIN_BG_COLOR } from './common';
import StylePropertyField from './StylePropertyField';
import TextField from '@mui/material/TextField';
import { useEditor } from '@grapesjs/react';

const accordionIcon = (
  <Icon path={mdiChevronDown} size={0.7} className="text-black" />
);

export default function CustomStyleManager({
  sectorss,
}: Omit<StylesResultProps, 'Container'>) {
  const editor = useEditor();
  const styleManager = editor.StyleManager;

  // Retrieve sectors
  const sectors = styleManager.getSectors();

  let inputToRender = (
    <TextField placeholder="Test" value="Text" size="small" fullWidth />
  );

  const renderIcon = (value) => {
    switch (value) {
      case 'Table Component':
        {
          return <Icon path={mdiCubeOutline} size={1} className="text-black" />;
        }
        break;
      case 'Background':
        {
          return (
            <Icon path={mdiFormatColorFill} size={1} className="text-black" />
          );
        }
        break;
      case 'Text Styling':
        {
          return (
            <Icon path={mdiFormatTextVariant} size={1} className="text-black" />
          );
        }
        break;
      case 'Borders & Corners':
        {
          return <Icon path={mdiBorderAll} size={1} className="text-black" />;
        }
        break;
    }
  };

  function capitalizeFirstLetter(string) {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div
      className="gjs-custom-style-manager text-left"
      style={{
        fontFamily: 'Quicksand',
        fontSize: '14px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          fontSize: '15px',
          fontWeight: '600',
          textAlign: 'left',
          marginLeft: '20px',
          height: '40px',
          padding: '10px',
        }}
      >
        {capitalizeFirstLetter(
          editor.getSelected() ? editor.getSelected().get('type') : ''
        )}{' '}
        Component
      </div>
      {sectors.map((sector) => (
        <Accordion key={sector.getId()} className="bg-gray-400" disableGutters>
          <AccordionSummary
            sx={{
              backgroundColor: '#f7f9f6',
              color: 'black',
              'border-bottom': '2px solid #E9EAE9',
            }}
            expandIcon={accordionIcon}
          >
            {renderIcon(sector.getName())}
            <div style={{ fontSize: '15px', fontWeight: '600' }}>
              {sector.getName()}
            </div>
          </AccordionSummary>
          <AccordionDetails className="bg-white flex text-black flex-wrap">
            {sector.getProperties().map((prop) => (
              <StylePropertyField key={prop.getId()} prop={prop} />
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
      {/* <div
        style={{
          fontSize: '15px',
          fontWeight: '600',
          textAlign: 'left',
          height: '40px',
          padding: '10px',
          backgroundColor: '#f7f9f6',
          color: 'black',
          border: '1px solid #c8c8c8',
          marginTop: 'auto',
        }}
      >
        Document is up to date
      </div> */}
    </div>
  );
}
