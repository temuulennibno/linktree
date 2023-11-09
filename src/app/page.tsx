import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className=" rounded-lg p-6 m-4 w-full max-w-lg">
        <header className="py-6">
          <h1 className="text-3xl font-bold text-center">Link tree</h1>
        </header>
        <main className="bg-white rounded-lg shadow p-6 m-4">
          <form className="mb-4 flex flex-col items-end">
            <label className="block text-grey-darker text-sm font-bold mb-2 self-start" htmlFor="url">
              Enter your URL
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="url" type="text" placeholder="Your URL" />
            <p className="text-sm text-gray-500 self-start">Your profile will look like link.tree/mr_beast</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" type="button">
              Get profile
            </button>
          </form>
        </main>
        <footer className="py-6 text-center">
          <p className="text-sm text-gray-700">© 2023 Link tree</p>
        </footer>
      </div>
    </div>
  );
}
