import React from 'react'
import NewTask from './NewTask'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start w-full py-5 gap-5 flex-nowrap mt-10'>
      {data.tasks.map((elem, idx) =>{
        if (elem.active){
          return <AcceptTask key={idx} data={elem} />
        }
        if (elem.newTask){
          return <NewTask key={idx} data={elem} />
        }
        if (elem.completed){
          return <CompleteTask key={idx}  data={elem} />
        }
        if (elem.failed){
          return <FailedTask key={idx} data={elem} />
        }
      })}

      

      

      
    </div>
  )
}

export default TaskList