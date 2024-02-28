const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_elfv0d9";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Sent!");
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});

const d = document;
const $img2 = d.getElementById("img2");
const $img3 = d.getElementById("img3");
const $img4 = d.getElementById("img4");

const showImg = (entries, observer) => {
  entries.map((el) => {
    if (el.isIntersecting) {
      el.target.classList.add("slideInLeft");
      el.target.classList.remove("no-visible");
    }
  });
};

const observer = new IntersectionObserver(showImg, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.3,
});

observer.observe($img2);
observer.observe($img3);
observer.observe($img4);
