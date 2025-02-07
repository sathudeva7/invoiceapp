import { Editor } from 'grapesjs';
import {
  mdiMagnifyPlusOutline,
  mdiMagnifyMinusOutline,
  mdiBorderTopVariant,
  mdiBorderLeftVariant,
  mdiBorderAllVariant,
  mdiBorderRightVariant,
  mdiBorderBottomVariant,
  mdiFormatAlignCenter,
  mdiFormatAlignJustify,
  mdiFormatAlignLeft,
  mdiFormatAlignRight,
  mdiMinus,
  mdiCubeOutline,
  mdiDotsHorizontal,
  mdiClose,
} from '@mdi/js';
const StyleConfiguration = (editor: Editor) => {
  const sector2 = editor.StyleManager.addSector(
    'background',
    {
      name: 'Background',
      open: true,
      icon: mdiCubeOutline,
      properties: [
        {
          label: 'background color',
          type: 'bg-color',
          property: 'background-color',
          isFull: true,
        },
        {
          label: 'background picture',
          type: 'bg-img',
          property: 'background-image',
          isFull: true,
        },
      ],
    },
    { at: 1 }
  );

  const sector3 = editor.StyleManager.addSector(
    'text-style',
    {
      name: 'Text Styling',
      open: true,
      icon: mdiCubeOutline,
      buildProps: [
        'font-family',
        'text-align',
        'font-size',
        'font-weight',
        'line-height',
        'letter-spacing',
        'color',
      ],
      properties: [
        { label: 'font type', property: 'font-family' },
        {
          property: 'text-align',
          type: 'radio',
          name: 'text alignment',
          default: '',
          options: [
            {
              value: 'center',
              id: 'center',
              label: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_2532)">
              <path d="M22 3.66675H0V5.50008H22V3.66675Z" fill="#374957"/>
              <path d="M18.3332 8.25H3.6665V10.0833H18.3332V8.25Z" fill="#374957"/>
              <path d="M18.3332 17.4167H3.6665V19.2501H18.3332V17.4167Z" fill="#374957"/>
              <path d="M22 12.8335H0V14.6668H22V12.8335Z" fill="#374957"/>
              </g>
              <defs>
              <clipPath id="clip0_1_2532">
              <rect width="22" height="22" fill="white"/>
              </clipPath>
              </defs>
              </svg>`,
            },
            {
              value: 'justify',
              id: 'justify',
              label: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_2533)">
              <path d="M22 3.66675H0V5.50008H22V3.66675Z" fill="#374957"/>
              <path d="M22 8.25H0V10.0833H22V8.25Z" fill="#374957"/>
              <path d="M22 17.4167H0V19.2501H22V17.4167Z" fill="#374957"/>
              <path d="M22 12.8335H0V14.6668H22V12.8335Z" fill="#374957"/>
              </g>
              <defs>
              <clipPath id="clip0_1_2533">
              <rect width="22" height="22" fill="white"/>
              </clipPath>
              </defs>
              </svg>`,
            },
            {
              value: 'left',
              id: 'left',
              label: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_2534)">
              <path d="M22 3.66675H0V5.50008H22V3.66675Z" fill="#374957"/>
              <path d="M14.6667 8.25H0V10.0833H14.6667V8.25Z" fill="#374957"/>
              <path d="M14.6667 17.4167H0V19.2501H14.6667V17.4167Z" fill="#374957"/>
              <path d="M22 12.8335H0V14.6668H22V12.8335Z" fill="#374957"/>
              </g>
              <defs>
              <clipPath id="clip0_1_2534">
              <rect width="22" height="22" fill="white"/>
              </clipPath>
              </defs>
              </svg>`,
            },
            {
              value: 'right',
              id: 'right',
              label: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_2535)">
              <path d="M22 3.66675H0V5.50008H22V3.66675Z" fill="#374957"/>
              <path d="M22.0002 8.25H7.3335V10.0833H22.0002V8.25Z" fill="#374957"/>
              <path d="M22.0002 17.4167H7.3335V19.2501H22.0002V17.4167Z" fill="#374957"/>
              <path d="M22 12.8335H0V14.6668H22V12.8335Z" fill="#374957"/>
              </g>
              <defs>
              <clipPath id="clip0_1_2535">
              <rect width="22" height="22" fill="white"/>
              </clipPath>
              </defs>
              </svg>`,
            },
          ],
        },
        {
          property: 'text-transform',
          type: 'radio',
          name: 'casing',
          default: '',
          options: [
            {
              value: 'none',
              id: 'none',
              label: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.707 6.70697L17.293 5.29297L12 10.586L6.70697 5.29297L5.29297 6.70697L10.586 12L5.29297 17.293L6.70697 18.707L12 13.414L17.293 18.707L18.707 17.293L13.414 12L18.707 6.70697Z" fill="#374957"/>
              </svg>`,
            },
            {
              value: 'capitalize',
              id: 'capitalize',
              label: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_2565)">
              <path d="M20.1668 7.33301V8.27351C19.3781 7.66685 18.4118 7.33638 17.4168 7.33301C16.2013 7.33301 15.0355 7.81589 14.1759 8.67544C13.3164 9.53498 12.8335 10.7008 12.8335 11.9163C12.8335 13.1319 13.3164 14.2977 14.1759 15.1572C15.0355 16.0168 16.2013 16.4997 17.4168 16.4997C18.4118 16.4963 19.3781 16.1658 20.1668 15.5592V16.4997H22.0002V7.33301H20.1668ZM17.4168 14.6663C16.8729 14.6663 16.3412 14.5051 15.889 14.2029C15.4368 13.9007 15.0843 13.4712 14.8762 12.9687C14.668 12.4662 14.6136 11.9133 14.7197 11.3798C14.8258 10.8464 15.0877 10.3564 15.4723 9.9718C15.8569 9.5872 16.3469 9.32529 16.8803 9.21918C17.4138 9.11307 17.9667 9.16753 18.4692 9.37567C18.9717 9.58381 19.4012 9.93629 19.7034 10.3885C20.0055 10.8408 20.1668 11.3724 20.1668 11.9163C20.1668 12.6457 19.8771 13.3452 19.3614 13.8609C18.8456 14.3766 18.1462 14.6663 17.4168 14.6663Z" fill="#374957"/>
              <path d="M11 16.4999H13.0497L6.52483 3.4502L0 16.4999H2.04967L3.883 12.8332H9.16667L11 16.4999ZM4.79967 10.9999L6.52483 7.54953L8.25 10.9999H4.79967Z" fill="#374957"/>
              </g>
              <defs>
              <clipPath id="clip0_1_2565">
              <rect width="22" height="22" fill="white"/>
              </clipPath>
              </defs>
              </svg>`,
            },
            {
              value: 'lowercase',
              id: 'lowercase',
              label: `<svg width="23" height="10" viewBox="0 0 23 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.4254 0V1.02326C19.5673 0.363221 18.516 0.003667 17.4334 0C16.1109 0 14.8425 0.525378 13.9073 1.46056C12.9722 2.39574 12.4468 3.66411 12.4468 4.98665C12.4468 6.3092 12.9722 7.57757 13.9073 8.51275C14.8425 9.44793 16.1109 9.97331 17.4334 9.97331C18.516 9.96964 19.5673 9.61009 20.4254 8.95005V9.97331H22.4201V0H20.4254ZM17.4334 7.97865C16.8417 7.97865 16.2632 7.80317 15.7712 7.47441C15.2791 7.14564 14.8956 6.67836 14.6692 6.13164C14.4427 5.58493 14.3835 4.98334 14.4989 4.40295C14.6144 3.82256 14.8993 3.28943 15.3178 2.871C15.7362 2.45256 16.2693 2.1676 16.8497 2.05215C17.4301 1.93671 18.0317 1.99596 18.5784 2.22241C19.1251 2.44887 19.5924 2.83236 19.9212 3.32439C20.2499 3.81642 20.4254 4.39489 20.4254 4.98665C20.4254 5.78018 20.1102 6.54121 19.5491 7.10231C18.988 7.66342 18.227 7.97865 17.4334 7.97865Z" fill="#374957"/>
              <path d="M7.97865 0V1.02326C7.12056 0.363221 6.06923 0.003667 4.98665 0C3.66411 0 2.39574 0.525378 1.46056 1.46056C0.525378 2.39574 0 3.66411 0 4.98665C0 6.3092 0.525378 7.57757 1.46056 8.51275C2.39574 9.44793 3.66411 9.97331 4.98665 9.97331C6.06923 9.96964 7.12056 9.61009 7.97865 8.95005V9.97331H9.97331V0H7.97865ZM4.98665 7.97865C4.39489 7.97865 3.81642 7.80317 3.32439 7.47441C2.83236 7.14564 2.44887 6.67836 2.22241 6.13164C1.99596 5.58493 1.93671 4.98334 2.05215 4.40295C2.1676 3.82256 2.45256 3.28943 2.871 2.871C3.28943 2.45256 3.82256 2.1676 4.40295 2.05215C4.98334 1.93671 5.58493 1.99596 6.13164 2.22241C6.67836 2.44887 7.14564 2.83236 7.47441 3.32439C7.80317 3.81642 7.97865 4.39489 7.97865 4.98665C7.97865 5.78018 7.66342 6.54121 7.10231 7.10231C6.54121 7.66342 5.78018 7.97865 4.98665 7.97865Z" fill="#374957"/>
              </svg>
              `,
            },
            {
              value: 'uppercase',
              id: 'uppercase',
              label: `<svg width="26" height="13" viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.473 12.4245H12.4245L6.21226 0L0 12.4245H1.95148L3.69698 8.9335H8.72753L10.473 12.4245ZM4.56974 7.18799L6.21226 3.90295L7.85478 7.18799H4.56974Z" fill="#374957"/>
              <path d="M23.8786 12.4245H25.83L19.6178 0L13.4055 12.4245H15.357L17.1025 8.9335H22.133L23.8786 12.4245ZM17.9753 7.18799L19.6178 3.90295L21.2603 7.18799H17.9753Z" fill="#374957"/>
              </svg>`,
            },
          ],
        },
        {
          type: 'number',
          name: 'font size',
          label: 'font size',
          property: 'font-size',
          units: ['px', '%'],
          min: 0,
          default: '20',
        },
        {
          type: 'number',
          label: 'line height',
          property: 'line-height',
          units: ['px', '%'],
          min: 0,
          default: '20',
        },
        {
          type: 'number',
          label: 'letter spacing',
          property: 'letter-spacing',
          units: ['px', '%'],
          min: 0,
          default: '1',
        },
        {
          type: 'select',
          label: 'font-weight',
          property: 'font-weight',
          default: 'normal',
          options: [
            {
              value: 100,
              id: 'lighter',
              label: 'Normal',
            },
            {
              value: 600,
              id: 'normal',
              label: 'Medium',
            },
            {
              value: 700,
              id: 'bold',
              label: 'Bold',
            },
          ],
        },
        {
          type: 'font-format',
          label: 'font style',
          name: 'font style',
        },
      ],
    },
    { at: 2 }
  );

  const sector4 = editor.StyleManager.addSector(
    'border',
    {
      name: 'Borders & Corners',
      open: true,
      icon: mdiCubeOutline,
      buildProps: ['border-lg', 'border-radius'],
      properties: [
        {
          property: 'border-lg',
          label: 'border',
          type: 'border-lg',
          default: 'border',
          options: [
            {
              value: 'border-top',
              id: 'border-top',
              label: mdiBorderTopVariant,
            },
            {
              value: 'border-left',
              id: 'border-left',
              label: mdiBorderLeftVariant,
            },
            {
              value: 'border',
              id: 'border',
              label: mdiBorderAllVariant,
            },
            {
              value: 'border-right',
              id: 'border-right',
              label: mdiBorderRightVariant,
            },
            {
              value: 'border-bottom',
              id: 'border-bottom',
              label: mdiBorderBottomVariant,
            },
          ],
        },
        // {
        //   property: 'border-style',
        //   type: 'radio',
        //   name: 'border style',
        //   default: 'solid',
        //   options: [
        //     {
        //       value: 'none',
        //       id: 'none',
        //       label: mdiClose,
        //     },
        //     {
        //       value: 'solid',
        //       id: 'solid',
        //       label: mdiMinus,
        //     },
        //     {
        //       value: 'dashed',
        //       id: 'dashed',
        //       label: mdiFormatAlignLeft,
        //     },
        //     {
        //       value: 'dotted',
        //       id: 'dotted',
        //       label: mdiDotsHorizontal,
        //     },
        //   ],
        // },
        {
          label: 'border color',
          type: 'bg-color',
          property: 'border-color',
          isFull: true,
        },
        {
          property: 'border-width',
          label: 'border width',
          type: 'slider',
          default: '0%',
          // Additional props
          units: ['px', '%'],
          min: 0,
          max: 100,
        },
        {
          property: 'border-radius',
          label: 'border corners',
          type: 'slider',
          default: '0%',
          // Additional props
          units: ['px', '%'],
          min: 0,
          max: 100,
        },
      ],
    },
    { at: 3 }
  );
};

export default StyleConfiguration;
