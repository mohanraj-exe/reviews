// local reviews data
const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];

// select items
const img = document.querySelector("#person-img");
img.setAttribute("width", 325);
img.setAttribute("height", 250);

const name_ = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");

// console.log("img:", img, name_, job, info);  

// set starting item  
let currentItem = 0;

// after loading DOM, default content to be appended is:
this.window.addEventListener('DOMContentLoaded', function(){
    // console.log("DOM Content loaded")
    const item = reviews[currentItem];
    img.setAttribute("src", item.img);
    name_.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

// show person based on item
function showPerson(person_array_index){
    const item = reviews[person_array_index];
    img.setAttribute("src", item.img);
    name_.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
} 

// next button
const next_btn = this.document.querySelector(".next-btn");
next_btn.addEventListener("click", function(){

    // console.log("next_button:", next_btn, currentItem++);
    currentItem++;
    if(currentItem > reviews.length -1){
        currentItem = 0
    }
    showPerson(currentItem);
});

// previous button
const previous_btn = this.document.querySelector(".prev-btn");
previous_btn.addEventListener("click", function(){

    // console.log("previous_btn:", previous_btn, currentItem--);
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1
    }
    showPerson(currentItem);
});

// surprise me
const surprise_me_btn = this.document.querySelector(".random-btn");
surprise_me_btn.addEventListener("click", function(){

    const generate_random_array_index = Math.floor(Math.random() * reviews.length);
    showPerson(generate_random_array_index);
    
    // console.log("surprise_me_btn:", surprise_me_btn, generate_random_array_index);
});
