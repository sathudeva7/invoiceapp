import React, { useState } from 'react';
import { useEditor } from '@grapesjs/react';

interface CommandButton {
  id: string;
  iconPath: string;
  options?: Record<string, any>;
  disabled?: () => boolean;
}

const SelectorTab = () => {
  const [activeTab, setActiveTab] = useState('Design');
  const editor = useEditor();
  const { UndoManager, Commands } = editor;

  return (
    <div
      style={{
        fontFamily: 'Quicksand',
        'font-size': '15px',
        'font-weight': '700',
        'border-radius': '3px',
        'line-height': '18.75px',
        color: '#1C2E27',
      }}
      className="flex border bg-white border-gray-300 justify-center space-x-1 my-4 p-[2px]"
    >
      <button
        className={`w-[199px] px-4 py-2 text-sm ${
          activeTab === 'Design' ? 'bg-[#F1F4F2]' : 'bg-white'
        } `}
        style={{ 'border-radius': '3px' }}
        onClick={() => {
          Commands.stop('core:preview', {});
          setActiveTab('Design');
        }}
      >
        Design
      </button>
      <button
        className={`w-[199px] px-4 py-2 text-sm ${
          activeTab === 'Resultaat' ? 'bg-[#F1F4F2]' : 'bg-white'
        } `}
        style={{ 'border-radius': '3px' }}
        onClick={() => {
          Commands.run('core:preview', {});
          setActiveTab('Resultaat');
        }}
      >
        Resultaat
      </button>
    </div>
  );
};

export default SelectorTab;
