import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { v4 as ID } from "uuid";

const AddTodo = ({ setIsOpen }) => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => console.log(state.todoReducer.todo));
  console.log(todo) || [];

  const handleAddTodo = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const title = form.get("title");
    const description = form.get("description");
    const priority = form.get("priority");
    const status = form.get("status");
    const endDate = form.get("endDate");

    if (!title || !description || !priority || !status || !endDate) {
      // setProcessing(false)
      return toast.error("Please fill the form correctly.");
    }
    console.log(title, description, priority, status, endDate);

    try {
      // Create a new Date object
      const today = new Date();

      // Get the year, month, and date separately
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero indexed
      const date = String(today.getDate()).padStart(2, "0");

      // Format the date in "YYYY-MM-DD" format
      const formattedDate = `${year}-${month}-${date}`;

      //? Create new task
      const newTodo = {
        id: ID(),
        title: title,
        description: description,
        priority: priority,
        status: status,
        startDate: formattedDate,
        endDate: endDate,
      };
      // Get existing tasks from local storage or initialize as an empty array
      const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

      // Add the new task to existing tasks
      const updatedTasks = [...existingTasks, newTodo];

      // Save the updated tasks to local storage
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));

      toast.success("Successfully Created New Task.");
      setIsOpen(false);

      // }

      // Clear the form after successful submission
      e.target.reset();
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message);
    }
  };
  return (
    <div className="">
      <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100 py-5">
        <h1 className="text-2xl text-white font-medium text-center">
          Add New Task
        </h1>
        <form onSubmit={handleAddTodo} className="card-body grid grid-cols-6">
          <div className="form-control col-span-6">
            <label className="label">
              <span className="label-text">Tile</span>
            </label>
            <input
              name="title"
              type="text"
              placeholder="title"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control col-span-6">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              name="description"
              type="text"
              placeholder="description"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">Status</span>
            </label>
            <select
              placeholder="status"
              className="input input-bordered"
              required
              name="status"
              id=""
            >
              <option value="Pending">Pending</option>
              <option value="In-progress">In-Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">Priority</span>
            </label>
            <select
              placeholder="priority"
              className="input input-bordered"
              required
              name="priority"
              id=""
            >
              <option value="P1">P1</option>
              <option value="P2">P2</option>
              <option value="P3">P3</option>
            </select>
          </div>
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">End Date</span>
            </label>
            <input
              name="endDate"
              type="date"
              placeholder="end date"
              className="input input-bordered"
              required
            />
          </div>
          <div className=" mt-6 w-full col-span-6">
            <button type="submit" className="btn w-full btn-primary">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;