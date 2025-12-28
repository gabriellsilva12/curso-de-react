import { ChevronLeftIcon } from 'lucide-react'
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from '../components/title'

function TaskPage() {
    const [searchParams] = useSearchParams();
    const title = searchParams.get('title');
    const description = searchParams.get('description')
    const navigate = useNavigate()
    
    return (
    <div className='w-full min-h-screen bg-slate-500 flex justify-center p-6'>
      
      <div className='w-[500px] space-y-4'>
        <div className="flex justify-center relative mb-6">
             <button onClick={() => navigate(-1)} className="p-1 bg-slate-600 rounded-md text-white absolute left-0 bottom-0 top-0">
                 <ChevronLeftIcon />
             </button>
            <Title> Detalhes da Tarefa </Title>
        </div>

        <div className="bg-slate-200 p-4 rounded-md shadow">
            <h2 className="text-xl font-bold text-slate-600">{title}</h2>
            <p className=" text-slate-600">{description}</p>
        </div>
      </div>

    </div>
    )
}

export default TaskPage;