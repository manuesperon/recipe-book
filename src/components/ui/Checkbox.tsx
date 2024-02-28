'use client';

import clsx from 'clsx';
import { useState } from 'react';

type CheckboxProps = {
  label: string;
  className?: string;
};

const Checkbox = ({ label, className }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <label className={clsx(className, 'flex cursor-pointer items-center')}>
      <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
      <span
        className={clsx('relative inline-block size-5 rounded-sm border border-cream transition-all duration-300', {
          'border-cream-light': isChecked,
        })}
      >
        <svg version="1.1" id="tick" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 37 37">
          <polyline
            className={clsx('tick path fill-none stroke-cream-light', {
              'transition-all duration-300 ease-in': isChecked,
            })}
            points="11.6,20 15.9,24.2 26.4,13.8"
            strokeLinejoin="round"
            strokeWidth={3}
            strokeMiterlimit={10}
            strokeDasharray={50}
            strokeDashoffset={isChecked ? 0 : 50}
          />
        </svg>
      </span>
      <span
        className={clsx(
          'ml-2 origin-left bg-text-strike bg-[0_50%] bg-no-repeat pb-[2px] text-lg transition-all duration-300',
          {
            'bg-[length:100%_1px] text-cream-light': isChecked,
            'bg-[length:0%_1px]': !isChecked,
          },
        )}
      >
        {label}
      </span>
    </label>
  );
};

export default Checkbox;
