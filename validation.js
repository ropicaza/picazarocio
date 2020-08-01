const form = document.querySelector("#info")
const name = document.querySelector("#name")
const nameHelp = document.querySelector("#nameHelp")
const lastName = document.querySelector("#lastName")
const lastNameHelp = document.querySelector("#lastNameHelp")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    if (name.value === "" || lastName.value === "") {
        if (name.value === "") {
            nameHelp.innerText = "Por favor, completa tu nombre!"
        }
        if (lastName.value === "") {
            lastNameHelp.innerText = "Por favor, completa tu apellido!"
        }
    } else  {
        form.submit();
    }
})


$('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

$('#myTab a[href="#profile"]').tab('show')
$('#myTab li:first-child a').tab('show')
$('#myTab li:last-child a').tab('show')
$('#myTab li:nth-child(3) a').tab('show') 
