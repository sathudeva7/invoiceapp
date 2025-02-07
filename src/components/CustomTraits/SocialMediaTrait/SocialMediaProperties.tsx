import React from 'react';
import SocialMediaInput from './SocialMediaInput';

const SocialMediaProperties = () => {
  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Properties</h2>
      <div className="space-y-4">
        <SocialMediaInput
          iconClass="fab fa-facebook-square text-blue-600"
          label="Facebook"
          defaultValue="https://www.facebook.com/"
        />
        <SocialMediaInput
          iconClass="fab fa-instagram text-pink-600"
          label="Instagram"
          defaultValue="https://www.instagram.com/"
        />
        <SocialMediaInput
          iconClass="fab fa-tiktok text-black"
          label="Tiktok"
          defaultValue="https://www.tiktok.com/"
        />
        <SocialMediaInput
          iconClass="fab fa-linkedin text-blue-700"
          label="Linkedin"
          placeholder="Provide your Linkedin URL"
        />
        <SocialMediaInput
          iconClass="fab fa-twitter-square text-blue-500"
          label="X (Twitter)"
          placeholder="Provide your Twitter URL"
        />
      </div>
    </div>
  );
};

export default SocialMediaProperties;
