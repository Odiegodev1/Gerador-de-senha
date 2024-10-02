import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const generatePassword = () => {
    let characters = "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) characters += "0123456789";
    if (includeSymbols) characters += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const copyPassword = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      toast.success("Senha copiada para a área de transferência!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Gere uma senha primeiro!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <section className="bg-slate-700 w-[100vw] h-[100vh] flex flex-col justify-center items-center">
      <ToastContainer />
      <div className="bg-white p-10 border rounded-3xl shadow-black/20 shadow-2xl">
        <div>
          <h2 className="font-bold flex justify-center text-slate-700 mb-8">GERADOR DE SENHA</h2>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              className="w-[300px] h-10 border border-slate-500 rounded-xl text-center"
              value={password}
              placeholder="Generated password"
              readOnly
            />
            <button
              onClick={copyPassword}
              className="px-4 py-2 bg-blue-500 text-white rounded-xl"
            >
              Copiar senha
            </button>
          </div>
        </div>
        <br />

        <div>
          <div className="text-slate-700 font-semibold">
            <label>Password length:</label>
          </div>
          <div>
            <input
              type="number"
              className="w-[55px] h-10 border border-slate-500 rounded-xl text-center mb-5"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>
        </div>

        <div>
          <div className="text-slate-700 font-semibold">
            <label>Include Uppercase Letters:</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="w-[20px] h-10 border border-slate-500"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
            />
          </div>
        </div>

        <div>
          <div className="text-slate-700 font-semibold">
            <label>Include numbers:</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="w-[20px] h-10 border border-slate-500"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
          </div>
        </div>

        <div>
          <div className="text-slate-700 font-semibold">
            <label>Include symbols:</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="w-[20px] h-10 border border-slate-500"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
          </div>
        </div>

        <button
          onClick={generatePassword}
          className="w-full h-10 border hover:bg-green-900 text-white bg-green-500 rounded-xl text-center mt-10 justify-center items-center"
        >
          Generate password
        </button>
      </div>
    </section>
  );
}

export default App;
