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

        <button id='displayBtn' onClick={expand}> + </button>

        </div>
        {expandContent?null:<span>{info}</span>}
</div>




  )
}

export default Question