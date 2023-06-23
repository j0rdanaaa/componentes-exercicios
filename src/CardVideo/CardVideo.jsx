import React from "react";
import { InfosUsuario } from "./InfosUsuario";
import { PaginaPrincipal } from "./CardVideoStyle";
const titulo = "Título do vídeo";

export function reproduzVideo() {
  alert("O vídeo está sendo reproduzido");
}

export function CardVideo({newObj}) {
  return (

      <PaginaPrincipal> onClick={reproduzVideo}
        <img src={newObj.imagem} alt="" />
        <h4>{newObj.titulo}</h4>

        <InfosUsuario />
      </PaginaPrincipal>
    
  );
}
