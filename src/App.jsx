export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      {/* Título principal, gris tipo código */}
      <div className="text-gray-300 text-2xl md:text-4xl font-mono mb-8 select-text">
        Aquí habita Gema AI
      </div>
      {/* Texto secundario, verde tipo OK, y rojo para lo sarcástico */}
      <div className="bg-[#181818] p-8 rounded-2xl shadow-lg font-mono text-lg md:text-2xl select-text max-w-2xl">
        <span className="text-green-400 block mb-2">
          Red neuronal creada solo para mí, analizando blockchains porque el resto no me interesa.
        </span>
        <span className="text-green-400 block mb-2">
          Señales de trading crudas, hechas a mi medida.
        </span>
        <span className="block">
          <span className="text-red-500 font-bold">¿Compartirlas? Ni soñando.</span>
        </span>
        <span className="text-gray-500 block mt-4 italic">
          Nota: <span className="text-red-500 font-bold">Esto es mi laboratorio privado. No insistas, no vendo, no regalo, y mucho menos explico.</span>
        </span>
      </div>
    </div>
  );
}

