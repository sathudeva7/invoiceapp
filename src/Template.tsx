import { useEditor } from '@grapesjs/react';
import React, { useState } from 'react';
import SelectTemplateModal from './SelectTemplateModal';
import { useEffect } from 'react';

const Template = () => {
  const editor = useEditor();

  const [draggingStart, setDraggingStart] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [componentsAdded, setComponentsAdded] = useState(false);

  const setVisibleSection = () => {
    const wrapper = editor?.getWrapper();

    if (wrapper && wrapper?.components?.()?.length >= 1) {
      setComponentsAdded(true);
    } else {
      setComponentsAdded(false);
    }
  };

  useEffect(() => {
    setVisibleSection();
    const setDragging = () => {
      setVisibleSection();
      setDraggingStart(true);
    };
    const endDragging = () => {
      setVisibleSection();
      setDraggingStart(false);
    };
    editor.on('block:drag:start', setDragging);
    editor.on('block:drag:stop', endDragging);
    editor.on('component:add', setVisibleSection);
    editor.on('component:remove', setVisibleSection);

    return () => {
      editor.off('component:add', setVisibleSection);
      editor.off('component:remove', setVisibleSection);
      editor.off('block:drag:start', setDragging);
      editor.off('block:drag:stop', endDragging);
    };
  }, [editor]);

  return (
    <div>
      {draggingStart || componentsAdded ? null : (
        <div className="flex items-center justify-center min-h-screen bg-gray-100"> {/* Parent container to center the content */}
        
          
        <div
          key="empty-section"
          className="bg-white text-black border border-gray-200 absolute h-[400px]  z-10 rounded-3xl p-5 flex flex-col items-center justify-center w-3/4 gap-1"
        >
          <h1 className="font-bold"> This Page is empty</h1>
          <p>Add a section from a template, or drag blocks from the left</p>
          <button
            className="py-4 font-semibold flex gap-2"
            onClick={() => {
              const components = editor.getHtml();
              const style = editor.getCss();
              console.log(components, style);
              setOpenModal(true);
            }}
          >
            + Add a Section
          </button>
        </div>
        </div>

      )}
      <SelectTemplateModal openModal={openModal} setOpenModal={setOpenModal} />
      </div>
  );
};

export default Template;
