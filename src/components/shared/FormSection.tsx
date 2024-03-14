import clsx from 'clsx';

type FormSectionProps = {
  title: string;
  description?: string;
  step: number;
  currentStep: number;
  children: React.ReactNode;
  className?: string;
};
const FormSection = ({ title, description, step, currentStep, children, className }: FormSectionProps) => {
  return (
    <div
      className={clsx(className, 'mb-4 flex flex-col gap-10 overflow-hidden text-nowrap transition-all duration-500', {
        '-ml-[100%]': currentStep > step,
        'basis-full': currentStep >= step,
        'basis-0': currentStep < step,
      })}
    >
      <div>
        <h2 className="flex items-baseline gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-main pb-1.5 text-grey-dark">
            {step}
          </div>
          <span className="w-fit border-b-2 border-yellow-main">{title}</span>
        </h2>
        <p className="mt-1 text-lg italic">{description}</p>
      </div>
      {children}
    </div>
  );
};

export default FormSection;
