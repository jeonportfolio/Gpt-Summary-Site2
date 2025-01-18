import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; 
import { addNote } from "../store/notesSlice";
const Siderbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    const id = uuidv4();
    const newNote = {
      id, 
      title: '새로운 노트',
      content: "",
      time: Date.now(),
      summary: "",
    };
    dispatch(addNote(newNote));
    navigate(`/notes/${id}`);
  };

  const notes = useSelector((state) => state.notes);
  return (
    <div className="w-[230px] p-4">
        <h1 className="text-2xl font-bold mb-4">한눈에 요약봇</h1>
        <button 
          className="bg-gray-900 hover:bg-gray-800 w-full py-2 px-4 rounded"
          onClick={ handleClick }
        >노트 추가</button>
           
            <div className="mt-4">
                <NavLink
                  to={"/"}
                  className={({ isActive }) => 
                    isActive 
                      ? "text-emerald-300 font-semibold" 
                      : "text-gray-300 hover:text-white" 
                    }
                > 홈
                </NavLink>
                <ul className="mt-4">
                    {notes.map((note) => (
                      <li key={note.id} className="mb-2">
                             <NavLink 
                                  to={`/notes/${note.id}`} 
                                  className={({ isActive }) => 
                                    isActive 
                                      ? "text-emerald-300 font-semibold" 
                                      : "text-gray-300 hover:text-white" 
                                    }
                              >
                                    {note.title}
                             </NavLink>
                      </li>
                    ))}
                </ul>
            </div>
     </div>
  );
};

export default Siderbar;