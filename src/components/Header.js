import React from "react";

const Header = () => {
  return (
    <div className="absolute">
      <img
        alt="bg-image"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg"
      />

      {/* gray overlay effect over background image */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
  );
};

export default Header;
