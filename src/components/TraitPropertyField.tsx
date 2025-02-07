import * as React from 'react';
import { useEditor } from '@grapesjs/react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import type { Trait } from 'grapesjs';
import { ROUND_BORDER_COLOR, cx } from './common';
import SocialMediaLinks from './SocialMediaLinks';

interface StylePropertyFieldProps extends React.HTMLProps<HTMLDivElement> {
  trait: Trait;
}

export default function TraitPropertyField({
  trait,
  ...rest
}: StylePropertyFieldProps) {
  const editor = useEditor();
  const handleChange = (value: string) => {
    console.log(value);
    trait.setValue(value);
  };

  const onChange = (ev: any) => {
    handleChange(ev.target.value);
  };

  const handleButtonClick = () => {
    const command = trait.get('command');
    if (command) {
      typeof command === 'string'
        ? editor.runCommand(command)
        : command(editor, trait);
    }
  };

  const type = trait.getType();
  const defValue = trait.getDefault() || trait.attributes.placeholder;
  const value = trait.getValue();
  const valueWithDef = typeof value !== 'undefined' ? value : defValue;

  const socialMediaLinks = [
    {
      iconClass: 'fab fa-facebook text-blue-600',
      name: 'Facebook',
      url: 'https://www.facebook.com/',
      placeholder: 'Provide your Facebook URL',
      checked: true,
      img: 'https://mailchef.s3.amazonaws.com/uploads/mailstyler/images/267B3187-B850-6015-5E82-E7EA451F644F_Image_1_5616ef29-87ce-45ab-b046-730e4fb34659.png',
    },
    {
      iconClass: 'fab fa-instagram text-pink-600',
      name: 'Instagram',
      url: 'https://www.instagram.com/',
      placeholder: 'Provide your Instagram URL',
      checked: true,
      img: 'https://mailstyler.s3.amazonaws.com/users/2/images/logo.png',
    },
    {
      iconClass: 'fab fa-tiktok text-gray-600',
      name: 'Tiktok',
      url: 'https://www.tiktok.com/',
      placeholder: 'Provide your Tiktok URL',
      checked: true,
      img: 'https://mailstyler.s3.amazonaws.com/users/2/images/tiktok_logo_icon_round.png',
    },
    {
      iconClass: 'fab fa-linkedin text-blue-500',
      name: 'Linkedin',
      url: '',
      placeholder: 'Provide your Linkedin URL',
      checked: false,
      img: 'https://mailchef.s3.amazonaws.com/uploads/mailstyler/images/3E9CB090-846E-FD06-BECE-24122A75979F_Image_5_3d5da1cf-1f32-41ce-8a09-e5ad22face07.png',
    },
    {
      iconClass: 'fab fa-twitter text-blue-400',
      name: 'X (Twitter)',
      url: '',
      placeholder: 'Provide your Twitter URL',
      checked: false,
      img: 'https://mailchef.s3.amazonaws.com/uploads/mailstyler/images/FACB6B2F-3D61-9194-F391-1A68C265064B_Image_4_0b32ab06-7d24-4250-bfac-f781ab7bf893.png',
    },
  ];

  let inputToRender = (
    <TextField
      placeholder={defValue}
      value={value}
      onChange={onChange}
      size="small"
      fullWidth
    />
  );

  switch (type) {
    case 'select':
      {
        inputToRender = (
          <FormControl fullWidth size="small">
            <Select value={value} onChange={onChange}>
              {trait.getOptions().map((option) => (
                <MenuItem
                  key={trait.getOptionId(option)}
                  value={trait.getOptionId(option)}
                >
                  {trait.getOptionLabel(option)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      }
      break;
    case 'social-media':
      {
        inputToRender = (
          <div className="p-4 bg-gray-800 text-white rounded-lg max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Properties</h2>
            <div className="space-y-4">
              <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <SocialMediaLinks links={socialMediaLinks} editor={editor} />
              </div>
            </div>
          </div>
        );
      }
      break;
    case 'color':
      {
        inputToRender = (
          <TextField
            fullWidth
            placeholder={defValue}
            value={value}
            onChange={onChange}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <div
                    className={`w-[15px] h-[15px] ${ROUND_BORDER_COLOR}`}
                    style={{ backgroundColor: valueWithDef }}
                  >
                    <input
                      type="color"
                      className="w-[15px] h-[15px] cursor-pointer opacity-0"
                      value={valueWithDef}
                      onChange={(ev) => handleChange(ev.target.value)}
                    />
                  </div>
                </InputAdornment>
              ),
            }}
          />
        );
      }
      break;
    case 'checkbox':
      {
        inputToRender = (
          <Checkbox
            checked={value}
            onChange={(ev) => trait.setValue(ev.target.checked)}
            size="small"
          />
        );
      }
      break;
    case 'button':
      {
        inputToRender = (
          <Button fullWidth onClick={handleButtonClick}>
            {trait.getLabel()}
          </Button>
        );
      }
      break;
  }

  return (
    <div {...rest} className={cx('mb-3 px-1 w-full')}>
      <div className={cx('flex mb-2 items-center')}>
        <div className="flex-grow capitalize">{trait.getLabel()}</div>
      </div>
      {inputToRender}
    </div>
  );
}
