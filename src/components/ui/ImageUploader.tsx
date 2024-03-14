import { FocusEventHandler, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FieldError } from 'react-hook-form';
import clsx from 'clsx';

import Button from './Button';

import { ACCEPTED_IMAGE_TYPES } from '@/utils/constants';

type ImageUploaderProps = {
  onChange: (...event: any[]) => void;
  error?: FieldError;
  value?: File | string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const ImageUploader = ({ className, onChange, error, value, ...props }: ImageUploaderProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [currentFile, setCurrentFile] = useState<File | null>();
  const [url, setUrl] = useState<string | null>(null);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  useEffect(() => {
    if (error) setCurrentFile(null);
  }, [error]);

  // Set current file state variable if the image is not empty.
  useEffect(() => {
    if (typeof value === 'object') {
      setCurrentFile(value);
      setUrl(URL.createObjectURL(value));
    } else {
      setCurrentFile(null);
    }
  }, [value]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.files?.[0]);
  };

  return (
    <div tabIndex={0} className={clsx(className, 'relative')}>
      <input
        type="file"
        ref={fileInputRef}
        {...props}
        onChange={handleUpload}
        className="absolute inset-0 h-80 w-80 cursor-pointer opacity-0"
        accept={ACCEPTED_IMAGE_TYPES.join(',')}
      />

      {currentFile && url && !error && (
        <>
          <Image width={100} height={100} src={url} alt="Image preview" />
          <span className="text-md">{currentFile?.name}</span>
        </>
      )}
      <Button
        onClick={handleButtonClick}
        onBlur={props.onBlur as FocusEventHandler<HTMLButtonElement>}
        className="z-10"
      >
        Upload image
      </Button>
    </div>
  );
};

export default ImageUploader;
