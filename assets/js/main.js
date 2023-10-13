const BASE_URL = 'https://devsnightmare-halloween.netlify.app/api/imagem';
const imgBtn = document.getElementById('change-img');

const getImg = async () => {
  const data = await fetch(BASE_URL)
    .then((res) => res.json())
    .catch((e) => console.log(e));

  return data.img;
};

const loadImg = async () => {
  const terrorImg = document.getElementById('img');
  terrorImg.src = await getImg();
};

imgBtn.addEventListener('click', loadImg);

loadImg();
