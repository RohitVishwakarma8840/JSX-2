const Card = () => {

  const data=[
    {
     name:"Without me ",
      description:"it is just a random text from random",
    },

    {
        name:"Him and I  ",
         description:"it is just a another random from me ",
       },
  ]

 const handleClick= ()=>{alert("it's working")};

    return (
     <>
              <div className="w-full h-screen bg-zinc-200 flex flex-col gap-10 justify-center items-center">

    {data.map((items,index)=>(
         <div className="song w-90 px-2 py-2 bg-white rounded-md">
             <h3 className="font-bold text-xl">{items.name}</h3>
             <p className="text-sm mt-2">{items.description}</p>
               <button onClick={handleClick} className="px-2 py-1 bg-blue-400 rounded mt-3 text-sm font-semibold ">Download Now</button>
         </div>

    ))}
     
     </div>

     
     </>
    );
  };
  
  export default Card;
  