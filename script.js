let sectionTitle = document.getElementById("section-title");
let sectionDescription = document.getElementById("section-description");
let featureImage = document.getElementById("feature-image");

let tabData = [
  {
    title: "History",
    description: "I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.",
    imageSrc: "history.jpg"
  },
  {
    title: "Vision",
    description: "Man bun PBR&B keytar copper mug prism, hell of helvetica. Syrith crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko toh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.",
    imageSrc: "vision.jpg"
  },
  {
    title: "Goals",
    description: "Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key, Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.",
    imageSrc: "goals.jpg"
  }
];

let buttons = document.querySelectorAll(".tab-button");

buttons.forEach((button, index) => {
  button.addEventListener("click", function() {
    sectionTitle.innerHTML = tabData[index].title;
    sectionDescription.innerHTML = tabData[index].description;
    featureImage.src = tabData[index].imageSrc;
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
  });
});
