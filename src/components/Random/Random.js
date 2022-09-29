import { Fragment } from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  //   console.log(watch("example")); // watch input value by passing the name of it

  return (
    <Fragment>
      <div className="row">
        <div className="col-md-6 mx-auto my-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="example">Example</label>
              <input
                className="form-control mb-3"
                defaultValue="test"
                {...register("example")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleRequired">Example Required</label>
              <input
                className="form-control mb-3"
                {...register("exampleRequired", { required: true })}
              />
              <p>
                {errors.exampleRequired && <span>This field is required</span>}
              </p>
            </div>
            <input
              className="form-control mb-3"
              {...register("name", { required: true })}
            />
            <p>{errors.name && <span>This field name is required</span>}</p>

            <input className="btn btn-primary" type="submit" />
          </form>
        </div>
      </div>
    </Fragment>
  );
}
