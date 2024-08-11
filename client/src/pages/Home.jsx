import React from "react";

function Home() {
  return (

    <div className="mx-auto overflow-hidden" style={{ backgroundImage: `url(images/domenico-loia-hGV2TfOh0ns-unsplash.jpg`, maxHeight:'100%' }}>
      <h1 class="font-bold text-grey-600 text-wrap font-serif"> <span className="italic">WELCOME</span></h1>
      <p class='font-sans text-grey-600 text-xs'>To</p>
      <h7 class= "text-center font-sans font-extrabold shadow-lg border-l-slate-50 tracking-tighter text-blue-600 text-6xl dark:text-white"  >CPERepo</h7>
      <h3 class="font-sans text-justify"><span class='italic'></span>your home for project paper management, storage and collaboration</h3>
      <div className="flex justify-center">
        <a className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' href='/login'>Get Started</a>
      </div>
      <section>
      <div class="justify-center grid grid-cols-3 gap-6 shadow-lg">
        <div class="bg-blue-500 flex py-2 px-8 rounded justify-center">
          <p class='text-center  font-sans font-extrabold text-white'>Storing</p>
        </div>
      </div>
      </section>
    </div>
    
  );
}


export default Home;

