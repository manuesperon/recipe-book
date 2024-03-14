import clsx from 'clsx';
import { FieldValues, UseControllerProps, useController } from 'react-hook-form';
import ImageUploader from './ImageUploader';

type TextInputProps<T extends FieldValues> = {
  label?: string;
  className?: string;
  type: 'text' | 'textarea' | 'image';
  required?: boolean;
} & UseControllerProps<T>;

const Input = <T extends FieldValues>({
  name,
  control,
  label,
  type,
  required = false,
  className,
  ...props
}: TextInputProps<T>) => {
  const {
    field: { value, ref, ...field },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const inputStyles = clsx('focus:focus-styles rounded-xl border-2 bg-transparent px-2 text-2xl', {
    'border-red-main ': error,
    'border-yellow-main': !error,
    'h-[200px]': type === 'textarea',
    'h-12': type === 'text',
    'flex h-80 w-80 cursor-pointer flex-col justify-end items-center gap-4 border-dotted p-4 focus:outline-dotted':
      type === 'image',
  });

  return (
    <label className={clsx(className, 'relative flex flex-col gap-2', { 'w-fit': type === 'image' })}>
      {label && (
        <p className="text-xl">
          {label} <span className="italic text-yellow-main">{required ? '*' : '(optional)'}</span>
        </p>
      )}
      {error?.message && <p className="mb-2 text-sm text-red-main">{error.message}</p>}
      {type === 'text' && <input value={value} {...props} {...field} type="text" className={inputStyles} />}
      {type === 'textarea' && <textarea value={value} {...props} {...field} className={inputStyles} />}
      {type === 'image' && <ImageUploader {...props} {...field} value={value} error={error} className={inputStyles} />}
    </label>
  );
};

export default Input;
