import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { PostEnum } from "../type";

export const Post = ({ type } : { type: boolean }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostEnum>();

  const onSubmit: SubmitHandler<PostEnum> = (data) => console.log(data);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border border-orange-500 p-10 space-y-10">
        <h1 className="text-center">Create { type ? "supply" : "sale" }</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 flex flex-col"
        >
          <div>
            <label>Barcode: </label>
            <input
              {...register("barcode", { required: true })}
              className="border border-orange-500"
            />
          </div>
          {errors.barcode && <span className="block">Id is required</span>}

          <div>
            <label>Price: </label>
            <input
              {...register("price", { required: true })}
              className="border border-orange-500"
            />
          </div>
          {errors.price && <span className="block">Id is required</span>}

          <div>
            <label>Quantity: </label>
            <input
              {...register("quantity", { required: true })}
              className="border border-orange-500"
            />
          </div>
          {errors.quantity && <span className="block">Id is required</span>}

          <div>
            <label>Time of supply: </label>
            <input
              type="datetime-local"
              step={1}
              {...register("supplyTime", { required: true })}
              className="border border-orange-500"
            />
          </div>
          {errors.supplyTime && <span className="block">Id is required</span>}

          <button className="border border-orange-500 p-1">Submit</button>
        </form>

        <Link to={"/"} className="underline underline-offset-8 hover:text-blue-500">Back Home</Link>
      </div>
    </div>
  );
};
