import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { DeleteEnum } from "../type"

export const Delete = ({ type } : { type: boolean }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DeleteEnum>();

  const onSubmit: SubmitHandler<DeleteEnum> = (data) => console.log(data);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border border-orange-500 p-10 space-y-10">
        <h1 className="text-center">Delete { type ? "supply" : "sale" }</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 flex flex-col"
        >
          <div>
            <label>Id: </label>
            <input
              {...register("id", { required: true })}
              className="border border-orange-500"
            />
          </div>
          {errors.id && <span className="block">Id is required</span>}
          <button className="border border-orange-500 p-1">Submit</button>
        </form>

        <Link
          to={"/"}
          className="underline underline-offset-8 hover:text-blue-500"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
};
