import React from 'react'

export default function Responses({ responses, currentUser }) {
  console.log(responses, currentUser)
  return (
    <div>
      <h3>my work</h3>
      {/* {responses.legnth! == 0 ? (
        <div>
          {responses.map((response, index) =>
            <div key=>
            </div>)}
        </div>
        )} */}
      

 
      
        
    </div>
  )
}
{/* 
  {responses.map((response) => 
{currentUser?.id === response.user_id ?
            <div>
              <p>{response.response}</p>
              <p>{response.username}</p>
            </div>
            : <p>nothing to show here... yet</p> */}

            // {responses.map((response) => (
            //   <div>
            //     { currentUser?.id === response.user_id &&
            //       <div>
            //         <p>{response.response}</p>
            //         <p>{response.username}</p>
            //       </div>
            //     : <p>nothing to show here</p>
        
            //       }
            //     </div>
            //   ))}