import * as React from 'react';
import { DevicesProvider, WithEditor } from '@grapesjs/react';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { cx } from './common';
import TopbarButtons from './TopbarButtons';
import SelectorTab from './SelectorTab';
import SaveButton from './SaveButton';
import { mdiContentSaveOutline } from '@mdi/js';
import Icon from '@mdi/react';

export default function Topbar({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cx('gjs-top-sidebar flex items-center p-1', className)}>
      <WithEditor>
        <TopbarButtons className="mr-auto px-2" />
      </WithEditor>
      <div className="flex-grow">
        <div className="flex justify-center">
          <WithEditor>
            <SelectorTab />
          </WithEditor>
        </div>
      </div>
      <SaveButton />
    </div>
  );
}
