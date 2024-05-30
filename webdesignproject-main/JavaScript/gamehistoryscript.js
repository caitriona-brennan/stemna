//random fact game
function rndInteger(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return rndInt = Math.floor(Math.random() * (max - min + 1)) + min;
}

function play(){
        var rndInt;
        rndInt = rndInteger(1,8);
    if (rndInt == 1){
      document.getElementById("storyname").innerHTML="Maria L. - Software Engineer:"+"<br></br>";
      document.getElementById("result").innerHTML="Transitioning into tech was the best decision I ever made. It's a field where my creativity and problem-solving skills thrive. As a woman, I've found immense support and encouragement from my colleagues, and I feel empowered to take on any challenge."+"<br></br>";
    }
    if (rndInt == 2){
      document.getElementById("storyname").innerHTML="Sarah K. - Data Scientist:"+"<br></br>";
      document.getElementById("result").innerHTML="Being a woman in tech has allowed me to break stereotypes and pave my own path. The opportunities for growth and innovation are endless. I've been able to work on projects that make a real impact, and every day feels like a new adventure."+"<br></br>";
    }
    if (rndInt == 3){
      document.getElementById("storyname").innerHTML="Emily R. - Cybersecurity Analyst:"+"<br></br>";
      document.getElementById("result").innerHTML="Tech is a dynamic and ever-evolving field, and I love that it constantly challenges me to learn and adapt. As a woman, I've encountered obstacles along the way, but overcoming them has only made me stronger and more determined to succeed."+"<br></br>";
    }
    if (rndInt == 4){
      document.getElementById("storyname").innerHTML="Jessica M. - UX Designer:"+"<br></br>";
      document.getElementById("result").innerHTML="Creating seamless and intuitive user experiences is incredibly rewarding. Tech has given me the platform to merge my passion for design with cutting-edge technology. It's a field where I can truly make a difference and inspire others."+"<br></br>";
    }
    if (rndInt == 5){
      document.getElementById("storyname").innerHTML="Amanda S. - Product Manager: "+"<br></br>";
      document.getElementById("result").innerHTML="Tech offers endless opportunities for innovation and growth. As a woman leading product teams, I've learned the importance of diversity and inclusion in driving success. Together, we can build products that truly reflect the needs of our diverse world."+"<br></br>";
    }
    if (rndInt == 6){
      document.getElementById("storyname").innerHTML="Rachel H. - AI Researcher:"+"<br></br>";
      document.getElementById("result").innerHTML="Working at the forefront of artificial intelligence is both thrilling and challenging. As a woman in AI, I'm constantly pushing the boundaries of what's possible and shaping the future of technology. It's a field where every breakthrough brings us closer to solving complex problems."+"<br></br>";
    }
    if (rndInt == 7){
      document.getElementById("storyname").innerHTML="Nadia B. - Software Developer:"+"<br></br>";
      document.getElementById("result").innerHTML="Tech allows me to combine my love for coding with my desire to make a positive impact. As a woman, I've found my voice in a male-dominated industry, and I'm proud to be part of a community that values diversity and inclusivity."+"<br></br>";
    }
    if (rndInt == 8){
      document.getElementById("storyname").innerHTML="Sophie T. - Tech Entrepreneur:"+"<br></br>";
      document.getElementById("result").innerHTML="Starting my own tech company has been a journey filled with ups and downs, but it's also been incredibly rewarding. As a woman founder, I'm passionate about creating opportunities for other women in tech and building a more inclusive future for the industry."+"<br></br>";
    }
}



//change numbers 


document.addEventListener('DOMContentLoaded', () => {
   const targets = document.querySelectorAll('.target');

   // Callback function to execute when intersection occurs
   const callback = (entries, observer) => {
      entries.forEach(entry => {
         const image = entry.target.querySelector('img');
         const hoverSrc = entry.target.getAttribute('data-hover-src');
         const defaultSrc = entry.target.getAttribute('data-default-src');
           if (entry.isIntersecting) {
               console.log('Element is in the middle of the viewport');
               image.src=hoverSrc;
           } else {
            image.src=defaultSrc;
           }
       });
   };

   // Create an Intersection Observer instance
   const options = {
       root: null, // relative to document viewport
       rootMargin: '-50% 0px -50% 0px', // trigger when the element is in the middle 50% of the viewport
       threshold: 0 // trigger as soon as the element intersects the viewport
   };
   const observer = new IntersectionObserver(callback, options);

   // Start observing the target element
   targets.forEach(target => observer.observe(target));
});