import { useState } from "react"
import { RiDeleteBin6Line } from "react-icons/ri";

function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    const copyTask = [...tasks, { title, desc }];
    setTasks(copyTask);
    setTitle("");
    setDesc("");
  }

  const removeItem = (id) => {
    const allTasks = [...tasks];
    allTasks.splice(id,1);
    setTasks(allTasks);
  }

  return (
    <div className="h-screen bg-gray-200">
      <header className="bg-gray-950 py-4">
        <div className="w-3/5 mx-auto px-4">
          <h2 className="text-5xl text-center text-white font-semibold">Todo List</h2>
        </div>
      </header>
      <section className="px-4 py-12">
        <div className="lg:w-2/5 mx-auto bg-slate-400 rounded mb-5">
          <div className="p-8 md:w-3/4 mx-auto">
            <form onSubmit={addTask}>
              <input type="text" className="w-full px-2 py-2 mb-3 border border-slate-400 outline-none rounded text-lg placeholder:italic" name="title" placeholder="Type Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea name="desc" id="" cols="30" rows="3" className="w-full mb-3 border border-slate-400 outline-none rounded px-2 py-2 text-lg placeholder:italic" placeholder="Type Description"
                value={desc} onChange={(e) => setDesc(e.target.value)}
              ></textarea>

              <input type="submit" value="Add" className="py-3 px-10 rounded bg-slate-700 text-white flex items-center justify-center mx-auto text-lg font-semibold cursor-pointer" />
            </form>
          </div>
        </div>

        <div className="lg:w-2/5 mx-auto">
          {
            tasks.length > 0 ? (
              tasks.map((task, idx) => (
                <div key={idx} className="flex items-center justify-between px-2 py-3 bg-slate-400 rounded mb-2">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center justify-center text-xl font-semibold h-7 w-7 p-2 rounded cursor-pointer bg-slate-700 text-white">{idx + 1}</span>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-950 first-letter:capitalize">{task.title}</h4>
                    <p className="text-base text-slate-900 first-letter:capitalize">{task.desc}</p>
                  </div>
                  </div>
                  <RiDeleteBin6Line onClick={() => removeItem(idx)} className="transition text-xl font-semibold h-9 w-9 p-2 rounded text-slate-800 cursor-pointer hover:bg-slate-700 hover:text-white" />
                </div>
              ))
            ) :
              <h2 className="text-center px-2 py-3 bg-slate-400 rounded text-xl font-semibold text-slate-950">No Task Avilable</h2>
          }
        </div>
      </section>
    </div>
  )
}

export default App
