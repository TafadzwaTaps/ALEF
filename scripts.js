document.addEventListener('DOMContentLoaded', function () {
    i18next
        .use(i18nextHttpBackend)
        .use(i18nextBrowserLanguageDetector)
        .init({
            fallbackLng: 'en',
            debug: true,
            backend: {
                loadPath: '/static/locales/{{lng}}/{{ns}}.json'
            }
        }, function (err, t) {
            updateContent();
        });

    function updateContent() {
        document.querySelectorAll('[data-i18n]').forEach(function (element) {
            element.innerHTML = i18next.t(element.getAttribute('data-i18n'));
        });
    }

    i18next.on('languageChanged', function () {
        updateContent();
    });

    window.translatePage = function (lng) {
        i18next.changeLanguage(lng);
    };
});
