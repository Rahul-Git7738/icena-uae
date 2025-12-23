"use client";

import React, { useState } from "react";
import fileDownload from "js-file-download";

function ImageDownloadPage({
  imageData,
  title,
  company,
  category,
  field,
  marco,
}) {
  const [imageUrl, setImageUrl] = useState(null);

  React.useEffect(() => {
    if (imageData) {
      const url = URL.createObjectURL(imageData);
      setImageUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [imageData]);

  const handleDownload = () => {
    if (imageData) {
      fileDownload(imageData, `${title.replace(/\s/g, "")}.jpg`);
    }
  };

  const component = (
    <div className=" relative w-[100%] h-fit max-h-[70vh] pb-[10vh]  justify-center items-center gap-4">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className={`object-contain w-[100%] h-[60vh] max-h-[60vh]`}
        />
      )}

      <button
        onClick={handleDownload}
        className=" newsletterbtn w-full
  absolute -bottom-2 left-1/2   -translate-x-1/2 bg-black/30 text-white p-2 rounded-md"
      >
        Download Image
      </button>
    </div>
  );

  return [component, imageUrl];
}

export default ImageDownloadPage;
