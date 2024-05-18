const testimonials = [
    {
      name: "Pravin Raju T M",
      photoUrl:"assets/pic1.png",
      text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
    },
    {
      name: "kishore Kumar",
      photoUrl:
        "assets/pic2.jpg",
      text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
    },
    {
      name: "Kiran",
      photoUrl:
        "assets/boy.jpg",
          text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
    },
  ];
  
  const imgEl = document.querySelector("img");
  const textEl = document.querySelector(".text");
  const usernameEl = document.querySelector(".username");
  
  let idx = 0;
  
  updateTestimonial();
  
  function updateTestimonial() {
    const { name, photoUrl, text } = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;
    if (idx === testimonials.length) {
      idx = 0;
    }
    setTimeout(() => {
      updateTestimonial();
    }, 10000);
  }