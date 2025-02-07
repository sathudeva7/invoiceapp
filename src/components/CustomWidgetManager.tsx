import * as React from 'react';
import { BlocksResultProps } from '@grapesjs/react';
import { MAIN_BORDER_COLOR, cx } from './common';

export type CustomBlockManagerProps = Pick<
  BlocksResultProps,
  'mapCategoryBlocks' | 'dragStart' | 'dragStop'
>;

export default function CustomWidgetManager({
  mapCategoryBlocks,
  dragStart,
  dragStop,
}: CustomBlockManagerProps) {
  return (
    <div className="gjs-custom-block-manager text-left">
      {Array.from(mapCategoryBlocks).map(([category, blocks]) => {
        if (category === 'Elements') {
          return (
            <div key={category}>
              
              <div className="grid grid-cols-2 gap-2 p-2">
                {blocks.map((block) => (
                  <div
                    key={block.getId()}
                    draggable
                    className={cx(
                      'flex flex-col items-center border rounded cursor-pointer py-2 px-5 transition-colors',
                      MAIN_BORDER_COLOR
                    )}
                    onDragStart={(ev) => dragStart(block, ev.nativeEvent)}
                    onDragEnd={() => dragStop(false)}
                  >
                    <img src={block.getMedia()} />
                    {/* <div
                      className="text-sm text-center w-full"
                      title={block.getLabel()}
                    >
                      {block.getLabel()}
                    </div> */}
                  </div>
                ))}
              </div>
            </div>
          );
        } else {
          return <div key={category}></div>;
        }
      })}
    </div>
  );
}
