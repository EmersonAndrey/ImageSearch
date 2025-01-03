import './App.css';
import Footer from './components/Footer/index.js';
import Header from './components/Header/index.js';
import PhotosList from './components/PhotosList/index.js';
import { useState, useEffect } from 'react';

function App() {

  const [photos, setPhotos] = useState([])
  const [find, setFind] = useState("")
  const [debouncedFind, setDebouncedFind] = useState(find);
  //Armazena o valor de pesquisa após aplicar o "debouncing", ou seja, após o tempo de espera para evitar requisições excessivas.

  const apiKey = "RDPiwBnfQAVQveRqIsXHM0DGjG5R55IRJBKKcZBKdhsCryC5ifrShCFE"
  const url = `https://api.pexels.com/v1/search?query=${find}&per_page=80`;

  const fetchPhotos = async () => {
    if (!debouncedFind) return;

    try {
      const response = await fetch(url, {
        headers: {
          Authorization: apiKey,
        },
      });
      const data = await response.json();
      setPhotos(data.photos);
    } catch (error) {
      console.error("Erro ao buscar as fotos:", error);
    }
  };

  //responsável pelo processo de debouncing. 
  // A cada vez que o usuário digitar algo (modificando o estado find), 
  // ele espera por 500ms antes de atualizar o valor de debouncedFind. 
  // Isso impede que a requisição à API seja feita imediatamente a cada tecla pressionada, melhorando a performance.
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedFind(find);
    }, 500);

    return () => clearTimeout(timer);
  }, [find]);



  //é acionado quando o valor de debouncedFind muda. 
  //Quando o usuário terminar de digitar (após o delay de 500ms), 
  //ele chama a função fetchPhotos para buscar as fotos correspondentes ao novo termo de pesquisa.
  useEffect(() => {
    if (debouncedFind) {
      fetchPhotos();
    }
  }, [debouncedFind]);


  return (
    <div className="app">

      <Header setFind={setFind} />
      <PhotosList photos={photos} />
      <Footer />

    </div>
  );
}

export default App;
