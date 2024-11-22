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
  return (
    <>
      <header className="bg-gray-950 py-4">
        <div className="w-3/5 mx-auto px-4">
          <h2 className="text-5xl text-center text-white font-semibold">Todo List</h2>
        </div>
      </header>
      <section className="bg-gray-200 py-12">
        <div className="w-2/5 mx-auto px-4 bg-slate-400 rounded mb-5">
          <div className="p-8 w-3/4 mx-auto">
            <form onSubmit={addTask}>
              <input type="text" className="w-full px-2 py-2 mb-3 border border-slate-400 outline-none rounded text-lg placeholder:italic" name="title" placeholder="Type Title Here"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea name="desc" id="" cols="30" rows="3" className="w-full mb-3 border border-slate-400 outline-none rounded px-2 py-2 text-lg placeholder:italic" placeholder="Type Description Here"
                value={desc} onChange={(e) => setDesc(e.target.value)}
              ></textarea>

              <input type="submit" value="Add" className="py-3 px-10 rounded bg-slate-700 text-white flex items-center justify-center mx-auto text-lg font-semibold cursor-pointer" />
            </form>
          </div>
        </div>

        <div className="w-2/5 mx-auto">
          {
            tasks.length > 0 ? (
              tasks.map((task, idx) => (
                <div key={idx} className="flex items-center justify-between px-2 py-3 bg-slate-400 rounded mb-2">
                  <div>
                    <h4 className="text-xl font-semibold text-slate-950">{task.title}</h4>
                    <p className="text-base text-slate-800">{task.desc}</p>
                  </div>
                  <RiDeleteBin6Line className="text-xl font-semibold text-slate-800 cursor-pointer" />
                </div>
              ))
            ) :
              <h2 className="text-center px-2 py-3 bg-slate-400 rounded text-xl font-semibold text-slate-950">No Task Avilable</h2>
          }
        </div>
      </section>
    </>
  )
}

export default App
