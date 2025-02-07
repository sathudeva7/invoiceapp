import * as React from 'react';

const SocialMediaLinks = ({ links, editor }) => {
  const handleCheck = (link) => {
    const selectedElement = editor.getSelected();

    if (selectedElement) {
      // Find the specific element by ID
      const elementToToggle = selectedElement.find(`#${link}`)[0];

      if (elementToToggle) {
        // Toggle visibility based on checkbox state
        if (link.checked) {
          elementToToggle.setStyle({ display: 'none' });
        } else {
          elementToToggle.setStyle({ display: 'block' });
        }
      }
    }
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-4">Properties</h2>
      <div className="space-y-4">
        {links.map((link, index) => (
          <div
            id={link.name}
            className="flex items-center space-x-2"
            key={index}
          >
            <i className={link.iconClass} aria-hidden="true"></i>
            <div className="flex-1 space-y-2">
              <div className="flex flex-row">
                <input
                  type="checkbox"
                  checked={link.checked}
                  onChange={() => handleCheck(link)}
                />
                <img src={link.img} />
                <label className="block text-sm font-medium">{link.name}</label>
              </div>
              <input
                className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:outline-none"
                type="text"
                defaultValue={link.url}
                placeholder={link.placeholder}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaLinks;
