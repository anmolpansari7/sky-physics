let slide_part = document.querySelector(".slide_part");
let form1 = document.querySelector(".form_1");
let registration_form_next_btn = document.querySelector(".next_section_link");
let registration_form_previous_btn = document.querySelector(
  ".previous_section_link"
);

registration_form_next_btn.addEventListener("click", function () {
  form1.style.marginLeft = "-100%";
});

registration_form_previous_btn.addEventListener("click", function () {
  form1.style.marginLeft = "0";
});
