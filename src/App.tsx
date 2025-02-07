import * as React from 'react';
import GjsEditor, {
  AssetsProvider,
  Canvas,
  WithEditor,
  ModalProvider,
} from '@grapesjs/react';
import type { Editor, EditorConfig } from 'grapesjs';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { MAIN_BORDER_COLOR } from './components/common';
import CustomModal from './components/CustomModal';
import CustomAssetManager from './components/CustomAssetManager';
import Topbar from './components/Topbar';
import RightSidebar from './components/RightSidebar';
import './style.css';
import { BlockCategory, WIDGET_BLOCK } from './core/Blocks.const';
import LoadOverrides from './components/Overrides';
import LeftSidebar from './components/LeftSidebar';
import Template from './Template';
import TraitManager from './components/CustomTraits/TraitManager';
import Ruler from './components/Ruler';
import AppHeader from './components/AppHeader';
import ZoomToolbar from './components/ZoomToolbar';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

const gjsOptions: EditorConfig = {
  height: '100vh',
  storageManager: false,
  undoManager: { trackSelection: false },
  selectorManager: { componentFirst: true },
  dragMode: 'absolute',
  blockManager: {
    custom: true,
    blocks: [
      ...WIDGET_BLOCK.map((wid) => {
        return {
          ...wid,
          category: BlockCategory.WidgetBlock,
        };
      }),
    ],
  },
  canvas: {
    scripts: ['https://cdn.tailwindcss.com'],
    styles: ['./style.css'],
  },
  style: 'body{background-color:#000000;}',
  projectData: {
    assets: [
      'https://via.placeholder.com/350x250/78c5d6/fff',
      'https://via.placeholder.com/350x250/459ba8/fff',
      'https://via.placeholder.com/350x250/79c267/fff',
      'https://via.placeholder.com/350x250/c5d647/fff',
      'https://via.placeholder.com/350x250/f28c33/fff',
    ],
    content: '<h1>GrapesJS React Custom UI</h1>',
    pages: [
      {
        name: 'Home page',
        component: ``,
      },
    ],
  },
};

export default function App() {
  const onEditor = (editor: Editor) => {
    console.log('Editor loaded');
    (window as any).editor = editor;

    editor.setStyle('body { background-color: blue}');
  };

  return (
    // @ts-ignore
    <ThemeProvider theme={theme}>
      <GjsEditor
        id="gjs"
        className="gjs-custom-editor overflow-y-hidden  text-black bg-[#F7F9F6]"
        grapesjs="https://unpkg.com/grapesjs"
        grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
        options={gjsOptions}
        plugins={[
          {
            id: 'gjs-blocks-basic',
            src: 'https://unpkg.com/grapesjs-blocks-basic',
          },
          {
            id: 'grapesjs-rulers',
            src: 'https://unpkg.com/grapesjs-rulers',
          },
          LoadOverrides,
          TraitManager,
        ]}
        onEditor={onEditor}
      >
        {/* <WithEditor>
          <Template />
        </WithEditor> */}
        <AppHeader className="min-h-[60px] bg-[#555]" />

        <div className={`flex h-full border-t ${MAIN_BORDER_COLOR}`}>
          <LeftSidebar
            className={`gjs-column-r border-l ${MAIN_BORDER_COLOR}`}
          />
          <Ruler length={297} unit="mm" interval={10} orientation="vertical" />
          <div
            style={{ overflow: 'scroll' }}
            className="gjs-column-m scroll-property flex flex-col items-center flex-grow "
          >
            <div className="fixed-top-bar w-full flex flex-col items-center">
              <Topbar className="min-h-[52px] w-full bg-[#F7F9F6]" />
              <div className="bg-[#F7F9F6] w-full">
                <Ruler
                  length={210}
                  unit="mm"
                  interval={10}
                  orientation="horizontal"
                />
              </div>
            </div>

            <div
              style={{ overflow: 'scroll', marginBottom: '20%' }}
              className="canvas-size  mt-6  bg-[#F7F9F6] w-full"
            >
              <Canvas className="flex-grow gjs-custom-editor-canvas  " />

              <div className="absolute bottom-2 left-1/2 z-10">
                <WithEditor>
                  <ZoomToolbar />
                </WithEditor>
              </div>
            </div>
          </div>
          <WithEditor>
            <RightSidebar
              className={`gjs-column-r border-l ${MAIN_BORDER_COLOR}`}
            />
          </WithEditor>
        </div>
        <ModalProvider>
          {({ open, title, content, close }) => (
            <CustomModal
              open={open}
              title={title}
              children={content}
              close={close}
            />
          )}
        </ModalProvider>
        <AssetsProvider>
          {({ assets, select, close, Container }) => (
            <Container>
              <CustomAssetManager
                assets={assets}
                select={select}
                close={close}
              />
            </Container>
          )}
        </AssetsProvider>
      </GjsEditor>
    </ThemeProvider>
  );
}
