document.addEventListener("DOMContentLoaded", function() {
  // Crear el estilo CSS dinámicamente
  const style = document.createElement('style');
  style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
    
    body {
      margin: 0;
      padding: 0;
      background: #2f3640;
      font-family: 'Poppins', sans-serif;
    }

    .title {
      position: absolute;
      top: 20px;
      width: 100%;
      text-align: center;
      color: white;
      font-size: 24px;
      font-weight: bold;
    }

    .card-holder {
      display: flex;
      width: 100%;
      height: 200px;
      position: absolute;
      top: 50%;
      left: 45%;
      transform: translate(-50%, -50%);
      justify-content: center;
    }

    .card img, .card iframe {
      width: 100%;
      border-radius: inherit;
    }

    .card.large {
      width: 350px; /* Incrementamos el tamaño */
      height: 350px;
      z-index: 1000;
      transform: perspective(600px) rotateY(0deg) translateZ(70px); /* Más sobresaliente */
      box-shadow: 0px 0px 25px rgba(0, 0, 0, 1); /* Más prominente */
      margin-right: -15px;
    }

    .card {
      width: 200px;
      height: 200px;
      display: inline-flex;
      background: #333;
      border-radius: 30px;
      transition: all .4s ease;
      margin-right: -150px;
      box-shadow: 0 18px 31px -8px rgba(0, 0, 0, .5);
      transform: perspective(600px) rotateY(45deg);
    }

    .card:hover {
      transform: perspective(600px) rotateY(0deg) translateZ(50px);
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 1);
    }

    .card:not(.last):hover {
      margin-right: -15px;
    }
  `;
  document.head.appendChild(style);

  // Crear el título
  const title = document.createElement('div');
  title.classList.add('title');
  title.textContent = 'Posts Facebook/Instagram';
  document.body.appendChild(title);

  // 1. Creamos el contenedor de las tarjetas
  const cardHolder = document.createElement('div');
  cardHolder.classList.add('card-holder');
  
  // 2. Array con las URLs de las imágenes y el iframe
  const cardContent = [
    "https://raw.githubusercontent.com/Fran15711/posts-centinela/refs/heads/main/277676956_100571519290747_777838267438678629_n.png",
    "https://raw.githubusercontent.com/Fran15711/posts-centinela/refs/heads/main/284065183_129767546371144_3502953787139191758_n.jpg",
    "https://raw.githubusercontent.com/Fran15711/posts-centinela/refs/heads/main/284074272_129767959704436_3623771538267678596_n.jpg",
    "https://raw.githubusercontent.com/Fran15711/posts-centinela/refs/heads/main/284272116_129759836371915_4416024355644136984_n.jpg",
    "https://raw.githubusercontent.com/Fran15711/posts-centinela/refs/heads/main/341630754_764353528611407_5312613463637829651_n.jpg",
    "https://raw.githubusercontent.com/Fran15711/posts-centinela/refs/heads/main/344728189_6188663897848793_7687526872678469906_n.jpg",
    "https://raw.githubusercontent.com/Fran15711/posts-centinela/refs/heads/main/344745065_986271249176083_2476903472709429952_n.jpg",
    "https://raw.githubusercontent.com/Fran15711/posts-centinela/refs/heads/main/350848651_189067934098600_3643919618394268389_n.jpg",
    "https://raw.githubusercontent.com/Fran15711/posts-centinela/refs/heads/main/350851443_675672694309861_4582408891465568311_n.jpg",
    "https://raw.githubusercontent.com/Fran15711/posts-centinela/refs/heads/main/279349290_121137037234195_7162487818517705684_n.jpg",
    "https://raw.githubusercontent.com/Fran15711/posts-centinela/refs/heads/main/278466321_110735964940969_6595183790906507315_n.jpg",
    "https://raw.githubusercontent.com/Fran15711/posts-centinela/refs/heads/main/277706505_100575889290310_3707404877028408204_n.png"
  ];

  // 3. Creamos las tarjetas dinámicamente
  cardContent.forEach((url, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    
    if (url.includes('youtube.com')) {
      // Si es un iframe (YouTube), creamos el iframe
      const iframe = document.createElement('iframe');
      iframe.src = url;
      iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      card.appendChild(iframe);
    } else {
      // Si es una imagen, creamos una etiqueta img
      const img = document.createElement('img');
      img.src = url;
      card.appendChild(img);
    }

    // Agregamos la tarjeta al contenedor
    cardHolder.appendChild(card);
  });

  // 4. Agregamos el contenedor de tarjetas al body
  document.body.appendChild(cardHolder);

  // 5. Agregamos la funcionalidad de clic para alternar la clase 'large'
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(function(card) {
    card.addEventListener("click", function() {
      // Alternamos la clase 'large' en la tarjeta clickeada
      card.classList.toggle("large");
      
      // Cerramos las otras tarjetas (eliminando la clase 'large' de las demás)
      cards.forEach(function(otherCard) {
        if (otherCard !== card) {
          otherCard.classList.remove("large");
        }
      });
    });
  });
});
