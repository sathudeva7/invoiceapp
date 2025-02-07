import React, { useState, useEffect, useCallback } from 'react';
import { Box, Button } from '@mui/material';
import Icon from '@mdi/react';
import {
  mdiBorderTopVariant,
  mdiBorderLeftVariant,
  mdiBorderAllVariant,
  mdiBorderRightVariant,
  mdiBorderBottomVariant,
  mdiMinus,
  mdiDotsHorizontal,
  mdiClose,
} from '@mdi/js';

import { styled } from '@mui/material/styles';
import MuiInput from '@mui/material/Input';
import { BTN_CLS, ROUND_BORDER_COLOR, cx } from './common';

const Input = styled(MuiInput)`
  width: 42px;
`;

const BorderComponent = ({ editor, prop }) => {
  const selectedComponent = editor.getSelected();
  const selectedStyle = selectedComponent?.getStyle() || {};
  const [borders, setBorders] = useState(['border']);

  const [borderStyle, setBorderStyle] = useState('solid');
 console.log('pp',selectedStyle)
  editor.on("component:selected", (component) => {
    console.log('ccc')
    const selectedStyle = selectedComponent?.getStyle() || {};
    console.log(selectedStyle)
  })

  // useEffect(() => {
  //   const borderArr = [];
  //   if (selectedStyle['border-bottom-style'] !== 'none') {
  //     borderArr.push('border-bottom');
  //   }
  //   if (selectedStyle['border-left-style'] !== 'none') {
  //     borderArr.push('border-left');
  //   }
  //   if (selectedStyle['border-right-style'] !== 'none') {
  //     borderArr.push('border-right');
  //   }
  //   if (selectedStyle['border-top-style'] !== 'none') {
  //     borderArr.push('border-top');
  //   }
  //   setBorders(borderArr);
  // }, [selectedStyle]); 

  //handleStyles(selectedStyle)
  

  const handleBorderChange = (borderVal) => {
    if (borderVal === 'border') {
      // Remove all other elements and just set 'border'
      setBorders(['border']);
      console.log('Special border added:', borderVal);
    } else {
      if (borders.includes('border')) {
        // Remove 'border' and add the new value
        setBorders([borderVal]);
        console.log('Border replaced with:', borderVal);
      } else if (borders.includes(borderVal)) {
        // Remove the element if it exists
        setBorders(borders.filter(b => b !== borderVal));
        console.log('Border removed:', borderVal);
      } else {
        // Add the new value
        setBorders([...borders, borderVal]);
        console.log('Border added:', borderVal);
      }
    }
  };


  const handleStyleChange = (val) => {
    setBorderStyle(val);
      
  };


  useEffect(() => {
    updateBorderStyles()
  },[borders, borderStyle])

  const radioProp =  [
    {
      value: 'none',
      label: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.707 6.70697L17.293 5.29297L12 10.586L6.70697 5.29297L5.29297 6.70697L10.586 12L5.29297 17.293L6.70697 18.707L12 13.414L17.293 18.707L18.707 17.293L13.414 12L18.707 6.70697Z" fill="#374957"/>
      </svg>
      `,
    },
    {
      value: 'solid',
      label: `<svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="50" height="2" fill="#D9D9D9" stroke="#374957" stroke-width="2"/>
      </svg>`,
    },
    {
      value: 'dashed',
      label: `<svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="50" height="2" fill="#D9D9D9" stroke="#374957" stroke-width="2" stroke-dasharray="6 6"/>
      </svg>
      `,
    },
    {
      value: 'dotted',
      label: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_75_204)">
      <path d="M2 14.0002C3.10457 14.0002 4 13.1048 4 12.0002C4 10.8957 3.10457 10.0002 2 10.0002C0.89543 10.0002 0 10.8957 0 12.0002C0 13.1048 0.89543 14.0002 2 14.0002Z" fill="#374957"/>
      <path d="M11.9998 14.0002C13.1043 14.0002 13.9997 13.1048 13.9997 12.0002C13.9997 10.8957 13.1043 10.0002 11.9998 10.0002C10.8952 10.0002 9.99976 10.8957 9.99976 12.0002C9.99976 13.1048 10.8952 14.0002 11.9998 14.0002Z" fill="#374957"/>
      <path d="M22.0002 14.0002C23.1048 14.0002 24.0002 13.1048 24.0002 12.0002C24.0002 10.8957 23.1048 10.0002 22.0002 10.0002C20.8957 10.0002 20.0002 10.8957 20.0002 12.0002C20.0002 13.1048 20.8957 14.0002 22.0002 14.0002Z" fill="#374957"/>
      </g>
      <defs>
      <clipPath id="clip0_75_204">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      `,
    },
  ],

  const updateBorderStyles = () => {

    if (!selectedComponent) return;

    const style = selectedComponent?.getStyle() || {};
    // Clear all border styles first
    ['-top', '-right', '-bottom', '-left'].forEach(side => {
      style[`border${side}-style`] = 'none';
    });
    console.log(borders)
    
    // Apply new borders
    if (borders.includes('border-top')) style['border-top-style'] = borderStyle;
    if (borders.includes('border-right')) style['border-right-style'] = borderStyle;
    if (borders.includes('border-bottom')) style['border-bottom-style'] = borderStyle;
    if (borders.includes('border-left')) style['border-left-style'] = borderStyle;
    if (borders.includes('border')) {
      style['border-top-style'] = borderStyle;
      style['border-right-style'] = borderStyle;
      style['border-bottom-style'] = borderStyle;
      style['border-left-style'] = borderStyle;
    } 

    selectedComponent.setStyle(style);
  };

  const loadBorderBg = (prop) => {
    if (selectedStyle['prop'] != 'none') {
      return true;
    }
  }

  return (
    <Box className="flex flex-col items-center ">
        <Box className="text-left w-36 mr-[11rem]">border</Box>
      <Box className="grid grid-cols-3 gap-4">
        <Box />
        <Icon
          path={mdiBorderTopVariant}
          size={1}
          className={selectedStyle['border-top-style'] != 'none' ? 'bg-[#dcdcdc]' : ''}
          onClick={() => handleBorderChange('border-top')}
        />
        <Box />
        <Icon
          path={mdiBorderLeftVariant}
          size={1}
          className={ selectedStyle['border-left-style'] != 'none'  ? 'bg-[#dcdcdc]' : ''}
          onClick={() => handleBorderChange('border-left')}
        />
        <Icon
          path={mdiBorderAllVariant}
          size={1}
          className={ borders.includes('border') ? 'bg-[#dcdcdc]' : ''}
          onClick={() => handleBorderChange('border')}
        />
        <Icon
          path={mdiBorderRightVariant}
          size={1}
          className={selectedStyle['border-right-style'] != 'none'  ? 'bg-[#dcdcdc]' : ''}
          onClick={() => handleBorderChange('border-right')}
        />
        <Box />
        <Icon
          path={mdiBorderBottomVariant}
          size={1}
          className={selectedStyle['border-bottom-style'] != 'none' ? 'bg-[#dcdcdc]' : ''}
          onClick={() => handleBorderChange('border-bottom')}
        />
        <Box />
      </Box>

      <Box className="mt-4 w-full flex flex-col ">
        <Box className="text-left w-36 mr-[11rem] ">Border style</Box>
        <div style={{"border": "2px solid #E9EAE9", "border-radius":"3px"}} className="flex">
        {radioProp.map((option) => (
              <button
                key={option.value}
                className={` w-[90px] h-[38px] p-2 flex justify-center items-center ${borderStyle == option.value ? 'bg-gray-300': ''}`}
                value={option.value}
                onClick={() => handleStyleChange(option.value)}
              >
                <div
                style={{'width': '40px'}}
                  dangerouslySetInnerHTML={{
                  __html: option.label as string | TrustedHTML,
                }}
                />
              </button>
            ))}
        </div>

      </Box>
    </Box>
  );
};

export default BorderComponent;
