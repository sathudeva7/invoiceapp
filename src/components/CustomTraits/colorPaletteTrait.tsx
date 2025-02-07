const colorPaletteTrait = (editor) => {
  return {
    createInput() {
      const container = document.createElement('div');
      container.style.backgroundColor = '#282828';
      // The container for the color swatches and the add button
      const wrapperContainer = document.createElement('div');
      wrapperContainer.style.display = 'flex';
      wrapperContainer.style.flexDirection = 'row';
      wrapperContainer.style.alignItems = 'center';
      wrapperContainer.style.justifyContent = 'space-between';

      const buttonText = document.createElement('div');
      buttonText.style.fontSize = '14px';
      buttonText.style.fontWeight = '400';
      buttonText.textContent = 'Background Color';

      // Function to create a color swatch
      function createColorSwatch(color) {
        const swatch = document.createElement('div');
        swatch.style.width = '30px';
        swatch.style.height = '30px';
        swatch.style.borderRadius = '5px';
        swatch.style.backgroundColor = color;
        swatch.style.cursor = 'pointer';
        swatch.addEventListener('click', () => {
          const selectedComponent = editor.getSelected();
          selectedComponent &&
            selectedComponent.addStyle({ 'background-color': color });
        });
        return swatch;
      }

      // Function to update the palette display
      function updatePalette(color) {
        // Clear existing swatches
        wrapperContainer.innerHTML = '';
        wrapperContainer.appendChild(buttonText);

        const divContainer = document.createElement('div');
        divContainer.style.display = 'flex';
        divContainer.style.border = '1px solid #504F4F';
        divContainer.style.borderRadius = '5px';
        // Add the new swatch to the container
        divContainer.appendChild(createColorSwatch(color));

        // Add the "Add New Color" button
        const addButton = document.createElement('button');
        addButton.style.display = 'flex';
        addButton.style.alignItems = 'center';
        addButton.style.padding = '5px';
        addButton.style.backgroundColor = '#504F4F'; // Example background color
        addButton.style.color = 'white';
        addButton.type = 'button';

        const logo = document.createElement('img');
        logo.src = '';
        logo.alt = 'Logo';
        logo.style.width = '20px';
        logo.style.height = '20px';
        logo.style.marginRight = '5px';

        addButton.appendChild(logo);

        addButton.onclick = function () {
          // Use a native color input to pick a color
          const colorInput = document.createElement('input');
          colorInput.type = 'color';
          colorInput.style.display = 'none'; // Hide the actual input
          colorInput.onchange = function (e) {
            const newColor = e.target.value;
            updatePalette(newColor);
          };
          colorInput.oninput = function (e) {
            const newColor = e.target.value;
            const selectedComponent = editor.getSelected();
            selectedComponent &&
              selectedComponent.addStyle({ 'background-color': newColor });
          };
          divContainer.appendChild(colorInput); // Append to the DOM to ensure it can be clicked
          colorInput.click(); // Simulate a click to open the color picker
        };

        divContainer.appendChild(addButton);
        wrapperContainer.appendChild(divContainer);
      }

      // Initial palette setup with a default color
      updatePalette('#000000');

      container.appendChild(wrapperContainer);
      return container;
    },
  };
};

export { colorPaletteTrait };
