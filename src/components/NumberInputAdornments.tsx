import React from 'react';
import { mdiContentSaveOutline } from '@mdi/js';
import Icon from '@mdi/react';

export default function NumberInputAdornments() {
  return (
    <div class="flex flex-col items-center">
    <label class="text-sm font-medium mb-1" for="font-size-input">font size</label>
    <div class="flex items-center border rounded px-2 py-1 bg-white">
      <input id="font-size-input" type="number" class="input-number w-12 text-center outline-none" value="19"/>
      <span class="text-sm ml-1">px</span>
      <div class="flex flex-col ml-2">
        <button class="text-gray-500 hover:text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" /></svg></button>
        <button class="text-gray-500 hover:text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg></button>
      </div>
    </div>
  </div>
  );
}