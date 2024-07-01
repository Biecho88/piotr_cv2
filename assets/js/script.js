let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,

    };
   
    const serviceID = "service_hapbbxs";
    const templateID = "template_y7rzenl"

    emailjs
        .send(serviceID,templateID,params)
        .then((res) =>{
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("number").value = "";
                document.getElementById("subject").value = "";
                document.getElementById("message").value = "";
                consol.log(res);
                alert("Your email has been sent. Thanks You")
        })
        .catch((err) => consol.log(err));
}