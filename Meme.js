components / Meme.js

import React from "react";

export default function Meme(){
    return(
       <main>
        <form className="form">
            <div>
                <label htmlFor="top-text">Top text</label>
                <input
                     id="top-text"
                     type="text"
                     placeholder="Shut up"
                     className="form--input"
                     />
           </div>
<div>
    <label>Bottom text
        <input
              type="text"
              placeholder="and take my money"
              className="form--input"
        />
    </label>
</div>
      <button
          className="form--button">Get a new meme image
          </button>
        </form>
       </main> 
    )
}