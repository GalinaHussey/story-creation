"use client";

import { useTemplateContext } from "../_context/TemplateContext";
import { useForm, SubmitHandler } from "react-hook-form";
import FormRow from "./FormRow";
import Button from "./Button";

type Inputs = {
  name: string;
  color: string;
  friend: string;
  toy: string;
  place: string;
};

function TemplateForm() {
  const { setIsShowing } = useTemplateContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data));
    // You can add your form submission logic here, like making an API call
    setIsShowing(false);
  };

  function handleClose() {
    setIsShowing(false);
  }

  return (
    <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
      <div className="bg-white m-auto p-8">
        <div className="flex flex-col items-center">
          <h3 className="text-primary-950 text-3xl font-medium capitalize py-4">
            Personalize your story
          </h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormRow label="Child's name" error={errors?.name?.message}>
              <input
                className="bg-gray-50 text-primary-950 border-solid border border-gray-300 rounded shadow-sm py-2 px-3 focus:border-primary-500 focus:border-2 focus:outline-none"
                type="text"
                id="name"
                defaultValue="name"
                {...register("name", { required: true })}
              />
            </FormRow>

            <FormRow label="What is their favorite color?">
              <input
                className="bg-gray-50 text-primary-950 border-solid border border-gray-300 rounded shadow-sm py-2 px-3 focus:border-primary-500 focus:border-2 focus:outline-none"
                type="text"
                id="color"
                defaultValue="color"
                {...register("color", { required: true })}
              />
            </FormRow>

            <FormRow label="Who is their best friend (person or animal)?">
              <input
                className="bg-gray-50 text-primary-950 border-solid border border-gray-300 rounded shadow-sm py-2 px-3 focus:border-primary-500 focus:border-2 focus:outline-none"
                type="text"
                id="friend"
                defaultValue="friend"
                {...register("friend", { required: true })}
              />
            </FormRow>

            <FormRow label="What is their favorite toy or item?">
              <input
                className="bg-gray-50 text-primary-950 border-solid border border-gray-300 rounded shadow-sm py-2 px-3 focus:border-primary-500 focus:border-2 focus:outline-none"
                type="text"
                id="toy"
                defaultValue="toy"
                {...register("toy", { required: true })}
              />
            </FormRow>

            <FormRow label="What is the name of the magical place they visit?">
              <input
                className="bg-gray-50 text-primary-950 border-solid border border-gray-300 rounded shadow-sm py-2 px-3 focus:border-primary-500 focus:border-2 focus:outline-none "
                type="text"
                id="place"
                defaultValue="place"
                {...register("place", { required: true })}
              />
            </FormRow>

            {/* errors will return when field validation fails  */}
            {errors.color && <span>This field is required</span>}
            <FormRow>
              <Button type="button" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit">Submit</Button>
            </FormRow>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default TemplateForm;
