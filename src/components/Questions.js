import React,{useState} from 'react'

const Question = ({questionData}) => {
   
    const [expandContent, setExpandContent] = useState(true)
    let {id,title,info} = questionData
    const expand = () =>{
    setExpandContent(!expandContent)
    }
   
  return (
 
    <div className='questionWrapper'>
        <div  className='questionContainer'>
        <h5 id='title'>{title}</h5>

        <button id='displayBtn' onClick={expand}> 
        {expandContent?"+":"-"}
        
         </button>

        </div>
        {expandContent?null:<p id='info'>{info}</p>}
</div>




  )
}

export default Question