// Напиши скрипт для створення галереї зображень на підставі масиву даних. 
// HTML містить список ul.gallery.

// <ul class="gallery"></ul>

// Використовуй масив об'єктів images для створення елементів <img>, 
// вкладених в <li>. Для створення розмітки використовуй шаблонні рядки 
//  метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.




const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const adList = document.querySelector('.gallery');
const elements = images
.map((option) => `<li class="item"><img class="images" src="${option.url}" alt="${option.alt}" width="375" height="220" /></li>`)
.join("");
adList.insertAdjacentHTML("afterbegin", elements);

adList.style.display = "flex";
adList.style.flexWrap = "wrap";
adList.style.marginLeft = "-30px";
adList.style.marginTop = "-30px";
const styleImg = document.querySelectorAll('.item');
styleImg.forEach((elem) => {
  elem.style.flexBasis = "calc(100% / 3 - 30px)";
  elem.style.marginLeft = "30px";
  elem.style.marginTop = "30px";
 })

