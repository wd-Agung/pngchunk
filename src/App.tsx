import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <div class="flex items-center justify-center flex-col h-screen text-white font-bold bg-gray-800">
      <header class="m-20">
        <div class="text-5xl font-extrabold.">
          <span>PNG </span>
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Chunks
          </span>
          <span> Inspector</span>
        </div>
      </header>
      <div>
        <div class="flex items-center justify-center w-96" onDrop={() => console.log('test')}>
          <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to open a PNG file</span></p>
                <p class="text-xs text-gray-500 dark:text-gray-400">or drag and drop the file</p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" onChange={(e) => console.log('onchange', e)}/>
          </label>
        </div> 
      </div>
    </div>
  );
};

export default App;
