import React from "react";

interface SaudacaoProps {
  nome: string;
}

function Exercicio2Saudacao({ nome }: SaudacaoProps) {
  return <p>Olá, {nome}! Seja bem-vinda!</p>;
}

export default Exercicio2Saudacao;
