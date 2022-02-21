$(document).ready(() => {
    loadTranslations(`translations/en.json`);
})

function changeLanguage(event) {
    if ($(`html`).width() <= 992) {
        $(`#menu-btn`).click();
    }
    $(`#selectChangeLangauge`).html($(event.target).html() + `<span></span>`);
    if ($(event.target).attr(`id`) == 'langEnglish') {
        loadTranslations(`translations/en.json`);
    }
    else if ($(event.target).attr(`id`) == 'langSpanish') {
        loadTranslations(`translations/Spanish.json`);
    }
    else if ($(event.target).attr(`id`) == 'langGerman') {
        loadTranslations(`translations/german.json`);
    }
}

function loadTranslations(langFile) {
    var fr = fetch(langFile)
        .then(response => response.json())
        .then(data => {
            for (var key in data) {
                $(`#${key}`).text(`${data[key]}`)
                if (key == `evenMoreThan`) {
                    console.log($(`#${key}`).text())
                }
            }
            $(`.idea-rn`).parent().html(`<i class="icon_lightbulb_alt idea-rn"></i>${data['iIdea']}`);
            $(`.easel-rn`).parent().html(`<i class="icon_easel easel-rn"></i>${data['iDesign']}`);
            $(`.pencil-rn`).parent().html(`<i class="icon_pencil-edit pencil-rn"></i>${data['iDevelop']}`);
            $(`.datareport-rn`).parent().html(`<i class="icon_datareport datareport-rn"></i>${data['iResult']}`);
        })
}
