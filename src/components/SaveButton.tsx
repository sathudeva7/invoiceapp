import React from 'react';
import { mdiContentSaveOutline } from '@mdi/js';
import Icon from '@mdi/react';

export default function SaveButton() {
  return (
    <button
      style={{
        fontFamily: 'Quicksand',
        'border-radius': '3px',
        'font-size': '15px',
        'font-weight': '700px',
        'line-height': '18.75px',
      }}
      className="flex items-center justify-center px-4 py-2 border w-[177px] bg-[#374957] text-white "
    >
      <div>Opslaan</div>
      <div>
        <Icon path={mdiContentSaveOutline} size={1} className="ml-2" />
      </div>
    </button>
  );
}
