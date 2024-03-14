import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import FormSection from '@/components/shared/FormSection';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from '@/utils/constants';

const formDataSchema = z.object({
  title: z.string().min(1, 'Title is required.'),
  description: z.string().min(1, 'Decription is required.'),
  image: z
    .instanceof(File)
    .refine((file: File) => file?.size <= MAX_FILE_SIZE, `Image must be under 5MB.`)
    .refine(
      (file: File) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      'Only .jpg, .jpeg, .png and .webp formats are supported.',
    )
    .optional()
    .or(z.literal('')),
});

export type FormValues = z.infer<typeof formDataSchema>;

const AddRecipeForm = () => {
  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { title: '', description: '', image: '' },
    mode: 'onTouched',
    resolver: zodResolver(formDataSchema),
  });

  const [step, setStep] = useState(1);

  // Scroll to first error every time the error
  useEffect(() => {
    const firstError = Object.keys(errors)[0] as keyof FormValues;
    const element = document.querySelector(`label [name="${firstError}"]`)?.closest('label');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }, [errors]);

  const processForm: SubmitHandler<FormValues> = data => {
    console.log(data);
  };

  // Define steps to use for validation.
  const steps = [
    // Step 1
    { items: ['title', 'description', 'image'] },
  ];

  const handleNextStep = () => {
    const stepsToValidate = steps[step - 1].items as Array<keyof FormValues>;
    trigger(stepsToValidate).then(passed => {
      if (passed) {
        setStep(step + 1);
      } else {
        console.log(errors);
      }
    });
  };

  return (
    // TODO: Add step slider
    <div className="w-[80%] overflow-hidden">
      <form onSubmit={handleSubmit(processForm)}>
        <div className="flex w-[100%] flex-row flex-nowrap overflow-hidden">
          <FormSection
            step={1}
            currentStep={step}
            title="Basic info"
            description="Let's start by giving your recipe a title, a brief description and a picture of the final product."
          >
            <Input type="text" name="title" control={control} label="Title" required />
            <Input type="textarea" name="description" control={control} label="Description" required />
            <Input type="image" name="image" label="Image" control={control} />
          </FormSection>
        </div>
        <div className="mt-4">
          {step > 1 && (
            <Button className="float-left" onClick={() => setStep(step - 1)}>
              Previous
            </Button>
          )}
          {step < steps.length && (
            <Button className="float-right" onClick={handleNextStep} type="button">
              Next
            </Button>
          )}
          {step === steps.length && <Button className="float-right">Finish</Button>}
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
