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
import { useState, useEffect } from 'react';
import CustomBlockManager from './CustomBlockManager';
import CustomWidgetManager from './CustomWidgetManager';
import { MAIN_BORDER_COLOR, cx } from './common';
import CustomPageManager from './CustomPageManager';
import CustomLayerManager from './CustomLayerManager';
import CustomSelectorManager from './CustomSelectorManager';
import CustomStyleManager from './CustomStyleManager';
import CustomTraitManager from './CustomTraitManager';

const defaultTabProps = {
  className: '!min-w-0',
};

export default function LeftSidebar({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [activeTab, setActiveTab] = useState('Components');

  useEffect(() => {
    console.log(activeTab);
  }, [activeTab]);

  const COLUMN_BLOCK = [
    {
      id: '1 Column',
      label: '1 Column',
      media: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="1" y="0.900391" width="32" height="32" rx="3" stroke="white" stroke-width="1.69"/>
  </svg>
  `,
      activate: true,
      content: `<div id="column-container" style="margin: 0px auto; width: 100%;">
            <div id="inner-section" style="margin: 0px auto; width: 900px; align-items: stretch; display: flex; margin: 0px auto; padding: 20px 0px; flex-direction: row; pointer-events: auto;">
            <div id="add-icon" class="elem" style="display: flex; flex-direction: column; flex-basis: 100%; padding: 10px; justify-content: center; align-items: center;">
        <span>Add Content</span>
            </div>
            </div>
            </div>`,
    },
  ];

  const WIDGET_BLOCK = [
    {
      id: 'Link',
      label: 'Link',
      media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"></path>
    </svg>`,
      activate: true,
      content: `<a href="#" class="text-blue-500 hover:text-blue-700 underline">Double click to change Link text and URL</a>`,
    },
    {
      id: 'Social Media',
      label: 'Social Media',
      media: `<svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 3.13428C20.0717 3.13428 19.1815 3.50303 18.5251 4.1594C17.8687 4.81578 17.5 5.70602 17.5 6.63428C17.5007 6.85379 17.5221 7.07274 17.5638 7.28825L9.2627 12.1304C8.63043 11.5948 7.82864 11.3009 7 11.3009C6.07174 11.3009 5.1815 11.6697 4.52513 12.3261C3.86875 12.9824 3.5 13.8727 3.5 14.8009C3.5 15.7292 3.86875 16.6194 4.52513 17.2758C5.1815 17.9322 6.07174 18.3009 7 18.3009C7.82736 18.2993 8.62739 18.0047 9.25814 17.4692L17.5638 22.3136C17.5221 22.5291 17.5007 22.7481 17.5 22.9676C17.5 23.8959 17.8687 24.7861 18.5251 25.4425C19.1815 26.0989 20.0717 26.4676 21 26.4676C21.9283 26.4676 22.8185 26.0989 23.4749 25.4425C24.1313 24.7861 24.5 23.8959 24.5 22.9676C24.5 22.0394 24.1313 21.1491 23.4749 20.4927C22.8185 19.8364 21.9283 19.4676 21 19.4676C20.1719 19.4687 19.3709 19.7634 18.7396 20.2993L10.4362 15.4549C10.4779 15.2394 10.4993 15.0205 10.5 14.8009C10.4993 14.5814 10.4779 14.3625 10.4362 14.147L18.7373 9.30485C19.3696 9.84046 20.1714 10.1344 21 10.1343C21.9283 10.1343 22.8185 9.76553 23.4749 9.10915C24.1313 8.45277 24.5 7.56254 24.5 6.63428C24.5 5.70602 24.1313 4.81578 23.4749 4.1594C22.8185 3.50303 21.9283 3.13428 21 3.13428Z" fill="white"/>
          </svg>
          `,
      content: `<div id="social-container" class="container max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
    <h1 class="text-2xl font-bold mb-4">Follow Us</h1>
    <div id="social-media" class="social-media flex justify-center space-x-4 mt-4">
  
    </div>
  </div>`,
    },
  ];

  return (
    <div
      className={cx(
        'gjs-right-sidebar font-quicksand flex bg-white flex-col border',
        className
      )}
      style={{
        'min-width': '407px',
        'mac-width': '407px',
        width: '407px',
      }}
    >
      <div
        className="flex justify-center my-2 mx-2 space-x-1 "
        style={{
          fontFamily: 'Quicksand',
          'font-size': '15px',
          'font-weight': '700',
        }}
      >
        <button
          className={`px-2 py-2 mx-2 w-full text-sm ${
            activeTab === 'Components'
              ? 'bg-[#F1F4F2] text-black border  rounded-md'
              : ' text-gray-700'
          } `}
          onClick={() => setActiveTab('Components')}
        >
          Componenten
        </button>
        <button
          className={`px-2 py-2 mx-2 w-full text-sm ${
            activeTab === 'Styling'
              ? 'bg-[#F1F4F2] text-black border  rounded-md'
              : ' text-gray-700'
          } `}
          onClick={() => setActiveTab('Styling')}
        >
          Stijling
        </button>
      </div>

      <div
        className={cx(
          'overflow-y-auto bg-[#F7F9F6] flex-grow border-t scroll-property',
          MAIN_BORDER_COLOR
        )}
      >
        {activeTab === 'Components' && (
          <BlocksProvider>
            {(props) => <CustomBlockManager {...props} />}
          </BlocksProvider>
        )}
        {activeTab === 'Styling' && (
          <>
            <StylesProvider>
              {(props) => <CustomStyleManager {...props} />}
            </StylesProvider>
          </>
        )}
      </div>
    </div>
  );
}
