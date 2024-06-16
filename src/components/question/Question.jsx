import React from 'react'

const Question = ({questionItem,index}) => {
    console.log(questionItem)
    const {question,options,desc}=questionItem
    //console.log(question)
  return (
    <div className='text-gray-600 my-8'>
        <div>
            <p>Que ({index+1})</p>
            <span className='font-semibold'>{question}</span>
        </div>
        {/* option 1 */}
        <div className='flex gap-4 mt-2'>
            <div>
                <input  id={"que"+index+0} type='radio' name={desc} value={options[0]}/>
            </div>
            <div>
                <label className='cursor-pointer' htmlFor={"que"+index+0} >{options[0]}</label>  
            </div>
        </div>
        {/* option 2 */}
        <div  className='flex gap-4 mt-2'>
            <div>
                <input  id={"que"+index+1} type='radio' name={desc} value={options[1]}/>
            </div>
            <div >
                <label className='cursor-pointer' htmlFor={"que"+index+1} >{options[1]}</label>  
            </div>
        </div>
         {/* option 3 */}
         <div  className='flex gap-4 mt-2'>
            <div>
                <input  id={"que"+index+2} type='radio' name={desc} value={options[2]}/>
            </div>
            <div >
                <label className='cursor-pointer' htmlFor={"que"+index+2} >{options[2]}</label>  
            </div>
        </div>
         {/* option 4 */}
         <div  className='flex gap-4 mt-2'>
            <div>
                <input  id={"que"+index+3} type='radio' name={desc} value={options[3]}/>
            </div>
            <div >
                <label className='cursor-pointer' htmlFor={"que"+index+3} >{options[3]}</label>  
            </div>
        </div>
    </div>
  )
}

export default Question