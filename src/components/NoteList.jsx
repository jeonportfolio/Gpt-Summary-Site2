import { format } from "date-fns";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NoteList = () => {
  const notes = useSelector((state) => state.notes);
  return (
    <div className="max-w-[1030px] m-auto rounded-lg bg-emerald-900 p-4">
        <div className="flex justify-end space-x-4 mb-4">
            <button className="bg-gray-900 py-2 px-4 rounded">최근</button>
            <button className="bg-gray-900 py-2 px-4 rounded">이름 순</button>
        </div>
        <ul>
            {
                notes.map((note) => (
                    <li key={note.id}>
                        <Link to={`/notes/${note.id}` }
                              className="flex items-center justify-between bg-emerald-700 p-4 rounded-lg mb-2 hover:bg-emerald-600" 
                        >
                            <div>
                                <h3 className="text-lg font-semibold">{note.title}</h3>
                                <p className="text-sm text-gray400">
                                    {note.content.slice(0, 100)}
                                </p>
                            </div>
                            <div>
                                <time className="text-sm text-gray-400">{format(note.time, 'yyyy MM dd HH:mm')}</time>
                            </div>
                        </Link>
                    </li>
                ))
            }
            
        </ul>
    </div>
  );
};

export default NoteList