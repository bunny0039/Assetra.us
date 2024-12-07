import Image from "next/image";
import React from "react";

function CustomFileInput({ file, setFile }) {
  const handleOnChangeFile = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div className="flex items-center justify-center w-full">
      <label
        for="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-200 border-dashed rounded-lg cursor-pointer bg-white hover:bg-gray-50 px-10"
      >
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/images/uploadFileIcon.svg"
            alt=""
            width={50}
            height={50}
          />
          {file ? (
            <p className="text-xs font-semibold text-gray-700 mt-0.5">
              {file?.name}
            </p>
          ) : (
            <>
              <p className="mt-3 text-sm text-gray-500">
                <span className="font-semibold underline">Click to upload</span>{" "}
                or drag and drop
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                Maximum file size 100 MB
              </p>
            </>
          )}
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={handleOnChangeFile}
          name="pdf_file"
        />
      </label>
    </div>
  );
}

export default CustomFileInput;
