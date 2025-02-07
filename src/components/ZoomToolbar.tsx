import * as React from 'react';
import { useEditor } from '@grapesjs/react';
import { useEffect, useState } from 'react';
import {
  mdiMagnifyPlusOutline,
  mdiMagnifyMinusOutline,
  mdiFormatAlignCenter,
  mdiFormatAlignJustify,
  mdiFormatAlignLeft,
  mdiFormatAlignRight,
  mdiMinus,
  mdiDotsHorizontal,
  mdiClose,
} from '@mdi/js';
import { MAIN_BORDER_COLOR, cx } from './common';
import Icon from '@mdi/react';
import { mdiCubeOutline } from '@mdi/js';

const ZoomToolbar = ({ className }: { className?: string }) => {
  const editor = useEditor();
  const [, updateCounter] = useState(0);

  const { Commands, Canvas } = editor;
  const cmdButtons = [
    {
      id: 'zoomin',
      icon: mdiMagnifyPlusOutline,
    },
    {
      id: 'zoomout',
      icon: mdiMagnifyMinusOutline,
    },
  ];
  const [zoom, setZoom] = useState(Canvas.getZoom());

  useEffect(() => {
    Commands.add('zoomin', {
      run: () => {
        // const zoom = Canvas.getZoom();
        Canvas.setZoom(`${Canvas.getZoom() + 5}`);
        setZoom(Canvas.getZoom() + 5);
        updateCounter((current) => current + 1);
      },
    });

    editor.on('component:drag', (componentModel, options) => {
      const canvasEl = Canvas.getBody().parentElement;
      console.log(canvasEl.getBoundingClientRect());
      const el = editor.getSelected().view.el;
      const style = window.getComputedStyle(el);
      const left = parseFloat(style.left);
      const top = parseFloat(style.top);
      const right = parseFloat(style.right);
      console.log(top, left, right);

      if (top < 0) {
        console.log('noo');
        let style = editor.getSelected()?.getStyle() || {};
        style['top'] = 5;
        editor.getSelected().setStyle(style);
      } else if (left < 0) {
        // editor.getSelected().set({ draggable: true });
        let style = editor.getSelected()?.getStyle() || {};
        style['left'] = 5;
        editor.getSelected().setStyle(style);
      } else if (right < 0) {
        let style = editor.getSelected()?.getStyle() || {};
        style['right'] = 0;
        editor.getSelected().setStyle(style);
      }
      // else if (left > 600) {
      //   // editor.getSelected().set({ draggable: true });
      //   let style = editor.getSelected()?.getStyle() || {};
      //   style['left'] = '600px';
      //   editor.getSelected().setStyle(style);
      // }
    });

    editor.on('component:drag:end', () => {
      const el = editor.getSelected().view.el;
      const style = window.getComputedStyle(el);
      const left = parseFloat(style.left);
      const top = parseFloat(style.top);
      const right = parseFloat(style.right);
      console.log(right, 'right');
      if (top < 0) {
        console.log('noo');
        let style = editor.getSelected()?.getStyle() || {};
        style['top'] = 5;
        editor.getSelected().setStyle(style);
      } else if (left < 0) {
        // editor.getSelected().set({ draggable: true });
        let style = editor.getSelected()?.getStyle() || {};
        style['left'] = 5;
        editor.getSelected().setStyle(style);
      } else if (right < 0) {
        let style = editor.getSelected()?.getStyle() || {};
        style['right'] = 0;
        editor.getSelected().setStyle(style);
      }
      // else if (left > 600) {
      //   // editor.getSelected().set({ draggable: true });
      //   let style = editor.getSelected()?.getStyle() || {};
      //   style['left'] = '600px';
      //   editor.getSelected().setStyle(style);
      // }
    });

    editor.StyleManager.removeSector('typography');
    editor.StyleManager.removeSector('general');
    editor.StyleManager.removeSector('flex');
    editor.StyleManager.removeSector('dimension');
    editor.StyleManager.removeSector('decorations');
    editor.StyleManager.removeSector('extra');

    editor.on('component:styleUpdate:background-image', (component) => {
      //removeBackgroundProperty('background-color');
      const style = editor.getSelected().getStyle() || {};

      if (style['background-color']) {
        delete style['background-color']; // Remove the specified property
        component.setStyle(style); // Re-apply the updated style
      }
    });

    editor.on('component:styleUpdate:background-color', (component) => {
      const style = editor.getSelected().getStyle() || {};
      if (style['background-image']) {
        delete style['background-image']; // Remove the specified property
        component.setStyle(style); // Re-apply the updated style
      }
    });

    const MIN_ZOOM = 50; // Minimum allowable zoom percentage
    const MAX_ZOOM = 300; // Maximum allowable zoom percentage
    var scale = 1,
      panning = false,
      pointX = 0,
      pointY = 0,
      start = { x: 0, y: 0 };

    editor.on('canvas:zoom', () => {
      const zoomValOriginal = editor.Canvas.getZoom();

      const zoomVal = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, zoomValOriginal));

      if (zoomVal !== zoomValOriginal) {
        editor.Canvas.setZoom(zoomVal); // Automatically correct the zoom level if out of bounds
      }

      const canvas = editor.Canvas.getElement();
      const scaleValue = zoomVal / 100;
      if (zoomVal > 100) {
        const wrapper = editor.getWrapper();
        const height = `calc(${297 * (zoomVal / 100)}mm)`;
        const width = `calc(${210 * (zoomVal / 100)}mm)`;

        if (wrapper) {
          const frames = document.querySelectorAll('.gjs-cv-canvas__frames');
          console.log(frames);
          frames.forEach((frame) => {
            frame.style.transform = `scale(${scaleValue}) translate(${scaleValue}px, ${
              scaleValue * 8
            }%)`; // Dynamically set height using calc
          });
        }
      } else {
        const frames = document.querySelectorAll('.gjs-cv-canvas__frames');
        console.log(frames);
        frames.forEach((frame) => {
          frame.style.transform = `scale(${scaleValue}) translate(${scaleValue}px, ${
            scaleValue * 8
          }%)`; // Set your desired height
        });
      }
    });

    // Function for handling zooming
    function zoomEvent(delta) {
      const canvas = editor.Canvas;
      const zoomFactor = 4;
      let currentZoom = canvas.getZoom();

      if (delta > 0) {
        currentZoom += zoomFactor; // Zoom in
      } else {
        currentZoom -= zoomFactor; // Zoom out
      }

      canvas.setZoom(currentZoom);
      setZoom(canvas.getZoom());
    }

    // Handler for mouse wheel event
    function handleMouseWheel(event) {
      //event.stopPropagation();

      let isPinch = Math.abs(event.deltaY) < 50;

      if (isPinch) {
        // This is a pinch on a trackpad
        let factor = 1 - 0.01 * event.deltaY;
        scale *= factor;
        event.preventDefault();
        console.log('spinch');
        //element.innerText = `Pinch: scale is ${scale}`;
      } else {
        // This is a mouse wheel
        let strength = 1.4;
        let factor = event.deltaY < 0 ? strength : 1.0 / strength;
        scale *= factor;
        console.log('dds');
        //element.innerText = `Mouse: scale is ${scale}`;
      }

      if (event.ctrlKey || event.metaKey) {
        // Include Meta key for macOS cmd key
        event.preventDefault(); // Prevent the default browser action
        const delta = Math.sign(event.deltaY); // Get positive or negative scroll direction
        zoomEvent(delta);
      }
    }

    // Add the event listener for the mouse wheel event
    // document.addEventListener('wheel', handleMouseWheel, { passive: false });

    Commands.add('zoomout', {
      run: () => {
        // const zoom = Canvas.getZoom();
        Canvas.setZoom(`${Canvas.getZoom() - 5}`);
        setZoom(Canvas.getZoom() - 5);
        updateCounter((current) => current + 1);
      },
    });

    editor.on('load', () => {
      const canvasOffset = Canvas.getOffset();
      console.log('canvasOffset', canvasOffset);
      // Get the wrapper element
      const wrapper = editor.getWrapper().getEl();
      console.log('ffff', wrapper);
      // Event handler function for the mouse wheel event
      function handleMouseWheel(event) {
        if (event.ctrlKey || event.metaKey) {
          console.log('fdf');
          // Include Meta key for macOS
          event.preventDefault(); // Prevent default browser action
          const delta = Math.sign(event.deltaY); // Get positive or negative scroll direction
          zoomEvent(delta);
        }
      }

      // Add the event listener to the GrapesJS wrapper element
      wrapper.addEventListener('wheel', handleMouseWheel, { passive: false });
    });

    // Function to handle zooming
    function zoomEvent(delta) {
      const canvas = editor.Canvas;
      const zoomFactor = 4;
      let currentZoom = canvas.getZoom();

      // Update zoom value based on wheel delta
      if (delta > 0) {
        currentZoom -= zoomFactor;
      } else {
        currentZoom += zoomFactor;
      }

      // Correct zoom value within bounds
      currentZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, currentZoom));
      canvas.setZoom(currentZoom);
      setZoom(canvas.getZoom());
    }

    return () => {
      editor.off('component:styleUpdate:background-image', (component) => {});

      editor.off('component:styleUpdate:background-color', (component) => {});
    };
  }, [editor]);

  //const zoom = Canvas.getZoom();
  return (
    <div
      className={cx(
        'flex  h-[44px] bg-white w-fit-content shadow-md px-3 my-1 py-3.5 rounded-[15px] gap-2',
        className
      )}
    >
      <span className={cx('text-gray-201 text-sm')}>{zoom}%</span>
      <div className="flex gap-1">
        {cmdButtons.map(({ id, icon, disabled, options = {} }: any) => (
          <button
            key={id}
            type="button"
            className={cx('text-sky-300', disabled?.() && 'opacity-50')}
            onClick={() =>
              Commands.isActive(id)
                ? Commands.stop(id)
                : Commands.run(id, options)
            }
            disabled={disabled?.()}
          >
            <Icon size={1} path={icon} className={cx('text-gray-201')} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ZoomToolbar;
