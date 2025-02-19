// pages/index.js
import React from 'react';

const Planos = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-red-900 flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
        {/* Plano Mensal */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-center">Plano Mensal</h2>
          <p className="text-3xl font-semibold text-center">R$90,00</p>
          <ul className="mt-4 space-y-2 text-center">
            <li>Acesso a todos os aparelhos</li>
            <li>Horários - 05:00 às 23:00</li>
          </ul>
        </div>

        {/* Plano Anual */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-center">Plano Anual</h2>
          <p className="text-3xl font-semibold text-center">R$900,00</p>
          <ul className="mt-4 space-y-2 text-center">
            <li>Acesso a todos os aparelhos</li>
            <li>Horários - 05:00 às 23:00</li>
          </ul>
        </div>

        {/* Plano VIP */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-center">Plano VIP</h2>
          <p className="text-3xl font-semibold text-center">R$130,00</p>
          <ul className="mt-4 space-y-2 text-center">
            <li>Acesso a todos os aparelhos</li>
            <li>Horários - 05:00 às 23:00</li>
            <li>Acesso à zumba</li>
            <li>Acesso à hidroginástica</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Planos;

