import React from 'react'
import Menu from '../Home/Menu'

const TestPage = () => {
    const sampleData= [
        {
          "sn": 1,
          "date": "2024-05-08",
          "link": "https://example.com/1"
        },
        {
          "sn": 2,
          "date": "2024-05-08",
          "link": "https://example.com/2"
        },
        {
          "sn": 3,
          "date": "2024-05-08",
          "link": "https://example.com/3"
        },
        {
          "sn": 4,
          "date": "2024-05-08",
          "link": "https://example.com/4"
        },
        {
          "sn": 5,
          "date": "2024-05-08",
          "link": "https://example.com/5"
        },
        {
          "sn": 6,
          "date": "2024-05-08",
          "link": "https://example.com/6"
        },
        {
          "sn": 7,
          "date": "2024-05-08",
          "link": "https://example.com/7"
        },
        {
          "sn": 8,
          "date": "2024-05-08",
          "link": "https://example.com/8"
        },
        {
          "sn": 9,
          "date": "2024-05-08",
          "link": "https://example.com/9"
        },
        {
          "sn": 10,
          "date": "2024-05-08",
          "link": "https://example.com/10"
        }
      ]
      
  return (
    <div className='dashboard text-gray-700'>
        <div className='dashboard-sub'>
            <Menu/>
         <div className='w-full bg-gray-200 pt-4 md:pt-8 h-full'>
            <div className='px-3 text-gray-700'>
                    <span>Welcome poluxreloaded@gmail.com</span>
                </div>
            <div className='mt-4 text-gray-600 p-4 px-6'>
                    <div className='flex justify-between mb-4 border-b pb-2'>
                        <span>List of prevous test result</span>
                        <span>Total entries: <span>60</span></span>
                    </div>
                    <div className='text-gray-700 w-full'>
                        <table className='border-collapse border border-slate-400 w-full text-left p-2'>
                            <tr className='border border-slate-300'>
                                <th className='p-2'>S/N</th> <th>Date</th> <th>Link</th>
                            </tr>
                            {sampleData.map((item,index)=><tr className='border border-slate-300 '> <td className='p-2'>{item.sn}</td> <td>{item.date}</td> <td><a className='text-blue-900' href={item.link}>View data</a></td> </tr>)}
                        </table>
                    </div>
            </div>
         </div>
        </div>

    </div>
  )
}

export default TestPage