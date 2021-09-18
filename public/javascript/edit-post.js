async function editFormHandler(event) {
  event.preventDefault();

  // var test = function () {
  //   console.log('button is working');
  // }

  const pet_name = document.querySelector('input[name="pet-name"]').value.trim();
  const pet_age = document.querySelector('input[name="pet-age"]').value.trim();
  const pet_type = document.querySelector('input[name="pet-type"]').value.trim();
  const pet_health = document.querySelector('input[name="pet-health"]').value.trim();

  console.log(pet_name);
  console.log(pet_age);
  console.log(pet_type);
  console.log(pet_health);



  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      pet_name,
      pet_age,
      pet_type,
      pet_health,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }

  console.log(pet_name);
  console.log(pet_age);
  console.log(pet_type);
  console.log(pet_health);
}

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
