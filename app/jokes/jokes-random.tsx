import React from "react";
import { Suspense } from "react";

interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}



const Jokes = async () => {
  const response = await fetch('https://official-joke-api.appspot.com/random_ten');
  const jokes = await response.json() as Joke[];

  

  return (
    <Suspense fallback={<p>Loading...</p>}>
          <div>
        <h1 className="text-center m-20 font-bold text-5xl">The Killing Joke </h1>
    <div className="flex gap-3 flex-wrap justify-center m-45">
        
      {jokes.map((joke) => (
        <div key={joke.id} className="card card-compact w-96 bg-base-100 shadow-xl ">
        <div className="card-body">
        <h3>{joke.setup}</h3>
         <p>{joke.punchline}</p>
          <div className="card-actions justify-end">
        
          </div>
        </div>
      </div>
      ))}
    </div>
    </div>
    </Suspense>

    
  );
};

export default Jokes;
