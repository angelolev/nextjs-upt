export default function Home() {
  return (
    <div>
      <main className="wrapper">
        <h1>El fut...presente de la web</h1>
        <p>Next.js 13</p>
        <p>
          Next.js trabaja renderizando los componentes de tu aplicación en el
          lado del servidor en cambio React los renderiza en el navegador (lado
          del cliente).
        </p>
        <p>Usar Next.js te provee de varias funciones como:</p>
        <ul>
          <li>
            Mejorar el desempeño de nuestra aplicación/sitio web en el lado del
            cliente. Esto es gracias a que el renderizado a sido hecho en el
            lado del servidor.
          </li>
          <li>
            {" "}
            Mejor Optimización de motores de búsqueda (SEO). Esto es porque una
            página HTML completamente renderizada llega al buscador, lo cual es
            más funcional y eficiente para los crawlers de los motores de
            búsqueda. Optimización de imágenes.
          </li>
          <li>Cero configuración.</li>
        </ul>

        <p>
          React.js por si solo no te provee de todas estas increíbles funciones.
          Pero esto no significa que no tengas que aprender o dejar de usar
          React.js es más debes de conocer React.js para poder iniciar de una
          manera más sencilla Next.js. Además de que Next.js está construido
          sobre React.js
        </p>
      </main>
    </div>
  );
}
