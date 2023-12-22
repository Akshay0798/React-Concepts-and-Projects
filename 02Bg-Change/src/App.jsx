import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }} //? Sets the background color of this div
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("#C71585")} //? only this thing is important
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#C71585" }}
          >
            MediumVioletRed
          </button>

          <button
            onClick={() => setColor("#FF4500")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#FF4500" }}
          >
            OrangeRed
          </button>

          <button
            onClick={() => setColor("#E6E6FA")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#E6E6FA" }}
          >
            Lavender
          </button>

          <button
            onClick={() => setColor("#8B0000")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#8B0000" }}
          >
            DarkRed
          </button>

          <button
            onClick={() => setColor("#FFD700")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#FFD700" }}
          >
            Gold
          </button>

          <button
            onClick={() => setColor("#800080")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#800080" }}
          >
            Purple
          </button>

          <button
            onClick={() => setColor("#191970")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#191970" }}
          >
            MidnightBlue
          </button>

          <button
            onClick={() => setColor("#FFE4E1")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#FFE4E1" }}
          >
            MistyRose
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
