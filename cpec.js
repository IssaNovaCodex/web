 function showPage(page, element) {
        let sections = document.querySelectorAll("section");
        sections.forEach(sec => sec.classList.remove("active"));

        document.getElementById(page).classList.add("active");

        // remove active class from all links
        document.querySelectorAll(".nav-link").forEach(link => {
            link.classList.remove("active-link");
        });

        // add active to clicked link
        element.classList.add("active-link");
    }

    // CONTACT FORM VALIDATION
    function sendMessage(event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            document.getElementById("msg").style.color = "red";
            document.getElementById("msg").innerText = "Please fill all fields!";
            return;
        }

        document.getElementById("msg").style.color = "green";
        document.getElementById("msg").innerText =
            "Message sent successfully. Thank you " + name + "!";

        document.querySelector("form").reset();
    }

    // SIMPLE TYPING EFFECT
    let text = "“Welcome to our Technical School, where innovation meets practical skills. We prepare students with the knowledge and hands-on experience needed to succeed in today’s digital and industrial world. Nice to meet you, and we are excited to be part of your learning journey.”";
    let i = 0;

    function typingEffect() {
        if (i < text.length) {
            document.getElementById("typing").innerHTML += text.charAt(i);
            i++;
            setTimeout(typingEffect, 100);
        }
    }

    typingEffect();