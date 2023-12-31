
function createPin(data)
{
    let pin = document.createElement("div")
    pin.classList.add("pin")

    pin.innerHTML = `
        <div class="pin-text">
            <h2 class="pin-title">${data["title"]}</h2>
            <p class="pin-description">${data["description"]}</p>
        </div>

        <img class="pin-img" src="${data["image-url"]}" alt="">

        <div class="pin-footer">
            <div class="pin-date">${data["date"]}</div>
            <a class="btn" href="${data["url"]}">Consulter</a>
        </div>`

    return pin
}

function createPins(data)
{
    let pinContainer = document.querySelector("#pin-container")

    data.forEach(pinData => {
        let pin = createPin(pinData)
        pinContainer.appendChild(pin)

    })
}

fetch('./data.json').then((response) => response.json())
                    .then((json) => createPins(json) )
