import React, { useState } from 'react';
import TEMPLATES, { TEMPLATE_CATEGORIES } from './core/Template.const';
import { useEditor } from '@grapesjs/react';
import Modal from './Modal';

export interface SelectTemplateModalProps {
  openModal: boolean;
  setOpenModal: (value: React.SetStateAction<boolean>) => void;
}
const SelectTemplateModal = ({
  openModal,
  setOpenModal,
}: SelectTemplateModalProps) => {
  const [selectedTab, setSelectedTab] = useState(
    TEMPLATE_CATEGORIES.PERSONAL_PAGES
  );
  const editor = useEditor();
  return (
    <Modal
      isOpen={openModal}
      modalContentClass={
        'max-w-[1050px] bg-white w-full max-h-[580px] h-full rounded-3xl'
      }
      onClose={() => {
        setOpenModal(false);
      }}
    >
      <div className="h-full w-full flex flex-col relative pr-[80px]">
        <button
          variant="ghost"
          onClick={() => setOpenModal(false)}
          className="border-none inline-block absolute right-0 p-8"
        >
          x
        </button>
        <div className="flex h-full items-center justify-center">
          <div className="w-[30%] border-r-[1px] border-blue-207 h-full py-[80px] px-8">
            <button
              variant={'ghost'}
              className="flex gap-4 border-none text-gray-201"
              onClick={() => {
                const wrapper = editor.getWrapper();

                if (wrapper) {
                  wrapper.setStyle({
                    'background-color': 'white',
                    'border-radius': '8px',
                    width: '210mm',
                    height: '297mm',
                  });
                }
                editor.setComponents('<div></div>');
              }}
            >
              + Add a Blank Template
            </button>

            <hr className="bg-blue-207 my-7" />
            <h3 className="font-bold text-xl text-blue-211 mb-6">Templates</h3>
            <div className="flex flex-col gap-6">
              {Object.values(TEMPLATE_CATEGORIES).map((category) => {
                return (
                  <button
                    onClick={() => {
                      setSelectedTab(category);
                    }}
                    variant="filled"
                    className={
                      ('rounded-xl py-2.5',
                      category === selectedTab
                        ? 'bg-blue-211 text-white'
                        : 'bg-transparent text-black hover:bg-blue-211 hover:text-white')
                    }
                    key={'category'}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="w-full h-full py-20 px-16">
            <div className="grid grid-cols-2 gap-4 space-x-2">
              {TEMPLATES[selectedTab].map((template, index) => (
                <button
                  variant="ghost"
                  key={index}
                  className="hover:bg-white/70 flex border-none p-0 gap-3 flex-col items-center max-w-[279px] "
                  onClick={() => {
                    const wrapper = editor.getWrapper();
                    if (wrapper) {
                      wrapper.setStyle({
                        'background-color': template.backgroundColor,
                        'border-radius': '8px',
                      });
                    }
                    editor.setComponents(template.components);
                    //editor.setStyle(template.style);
                  }}
                >
                  <img
                    src={template.thumbnail}
                    className="w-full h-[176px] rounded-3xl overflow-hidden"
                  />
                  <div>{template.heading}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SelectTemplateModal;
