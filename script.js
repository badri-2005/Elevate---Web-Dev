const toggleForm = () => {
    const container = document.querySelector('.container1');
    container.classList.toggle('active');
};



document.getElementById("loginForm").addEventListener('submit', function(event) {
    event.preventDefault();

    const un = document.getElementById('username');
    const pa = document.getElementById('password');

    if (!un || !pa) {
        console.error("Username or Password element not found!");
        return;
    }

    const unv = un.value.trim();
    const pav = pa.value.trim();

    if (unv === '') {
        setError(un, "User Name cannot be Empty!");
    } else {
        setSuccess(un);
    }

    if (pav === '') {
        setError(pa, "Password cannot be Empty!");
    } else {
        setSuccess(pa);
    }

    if (unv !== '' && pav !== '') {
        setLogin(un, pa, "Login successful!");
    }
});

function setError(element, message) {
    const formGroup = element.parentElement;
    if (!formGroup) {
        console.error("Form group not found for element:", element);
        return;
    }
    formGroup.className = "form-group error";
    const small = formGroup.querySelector('small');
    if (small) {
        small.innerText = message;
    } else {
        console.error("Small element not found in form group:", formGroup);
    }
}

function setSuccess(element) {
    const formGroup = element.parentElement;
    if (!formGroup) {
        console.error("Form group not found for element:", element);
        return;
    }
    formGroup.className = "form-group success";
}


function setLogin(element, element1, message) {
    const formGroup = element.parentElement;
    const form = element1.parentElement;

    if (!formGroup) {
        console.error("Form group not found for element:", element);
        return;
    }

    if (!form) {
        console.error("Form group not found for element1:", element1);
        return;
    }

    formGroup.className = "form-group success";
    form.className = "form-group success";

    const small = formGroup.querySelector('small');
    const small2 = form.querySelector('small');

    if (small && small2) {
        small.innerText = message;
        small2.innerText = message;
        window.location.href = "./dashboard.html";
    } else {
        console.error("Small element not found in form group:", formGroup);
    }
}


//faq acc
document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');
      console.log(accordions);
    accordions.forEach((accordion) => {
      const header = accordion.querySelector('.accordion__header');
      const content = accordion.querySelector('.accordion__content');
      const icon = accordion.querySelector('.accordion__icon i');

      header.addEventListener('click', () => {
        const isOpen = content.style.display === 'block';

        // Close all accordions
        accordions.forEach((acc) => {
          acc.querySelector('.accordion__content').style.display = 'none';
          acc.querySelector('.accordion__icon i').classList.replace('ri-subtract-line', 'ri-add-line');
        });

        // Toggle the clicked accordion
        if (!isOpen) {
          content.style.display = 'block';
          icon.classList.replace('ri-add-line', 'ri-subtract-line');
        }
      });
    });
  });

function classToggle() {
  const navs = document.querySelectorAll('.nav-items');

  navs.forEach(nav => nav.classList.toggle('nav2'));
}

document.querySelector('.nav-items .nav2 ul li')
  .addEventListener('click', classToggle);

let btn = document.querySelector("#contact-btn");

btn.addEventListener("click",()=>{
    btn.innerHTML = "Sent";
    btn.style.backgroundColor = "#677eff";
    console.log("button clicked")
})
