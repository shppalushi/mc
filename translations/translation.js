$(document).ready(() => {
    loadTranslations(`translations/en.json`);
})

function changeLanguage(event) {
    if ($(event.target).attr(`id`) == 'langEnglish') {
        loadTranslations(`translations/en.json`);
    }
    else if ($(event.target).attr(`id`) == 'langSpanish') {
        loadTranslations(`translations/Spanish.json`);
    }
}

function loadTranslations(langFile) {
    var fr = fetch(langFile)
        .then(response => response.json())
        .then(data => {
            for (var key in data) {
                $(`#${key}`).text(`${data[key]}`)
            }
        })
}
