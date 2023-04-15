import { useForm, SubmitHandler } from "react-hook-form";

type GetId = {
  id: string;
};

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<GetId>();
  const onSubmit: SubmitHandler<GetId> = (data) => console.log(data);

  console.log(watch("id"));

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border border-orange-500 p-10">
        <h1 className="text-center mb-10">Get Supply</h1>
        <h1 className="text-center mb-5">Get Supply by id</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="">Id: </label>
            <input
              {...(register("id"), { required: true })}
              className="border border-orange-500"
            />
          </div>

          {errors.id && <span>Id is required</span>}

          <button className="border border-orange-500 p-1">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
