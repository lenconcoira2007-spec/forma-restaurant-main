
/* ========================================
   FORMA Restaurant & Bistro
   Переводы страницы «Контакты»
======================================== */

const contactsTranslations = {
    ru: {
        home: "Главная",
        about: "О нас",
        menu: "Меню",
        gallery: "Галерея",
        booking: "Бронирование",
        contacts: "Контакты",
        footerLocation: "Бельцы, Республика Молдова",

        contactsEyebrow: "МЫ НА СВЯЗИ • БЕЛЬЦЫ, МОЛДОВА",
        contactsTitle: "Давайте встретимся в FORMA.",
        contactsLead:
            "Здесь вы найдёте контактную информацию и сможете посмотреть расположение Бельц на карте.",
        contactsBookingButton: "Забронировать столик",

        contactsInfoLabel: "Контактная информация",
        contactsInfoTitle: "Будем рады вашему сообщению.",
        contactsInfoText:
            "Используйте демонстрационные данные ниже как часть учебного проекта. Перед публикацией реального ресторана их необходимо заменить подтверждёнными контактами.",

        contactsAddressTitle: "Город",
        contactsAddress: "Бельцы, Республика Молдова",
        contactsMapLink: "Посмотреть на карте ↗",

        contactsPhoneTitle: "Телефон",
        contactsPhone: "+373 00 000 000 — демонстрационный номер",
        contactsPhoneNote: "Номер необходимо заменить",

        contactsEmailTitle: "Электронная почта",
        contactsEmailNote: "Демонстрационный адрес для проекта",

        contactsHoursTitle: "График работы",
        contactsHours: "Ежедневно: 12:00–22:00",
        contactsHoursNote: "Пример графика для учебного проекта",

        contactsMapEyebrow: "НАЙДИТЕ НАС",
        contactsMapTitle: "Бельцы на карте.",
        contactsMapText:
            "На карте показан город Бельцы. Точный адрес ресторана в демонстрационном проекте пока не указан.",
        contactsOpenMap: "Открыть карту",
        contactsMapCaption:
            "Карта показывает город, а не точное местоположение ресторана.",

        contactsCtaEyebrow: "ВАШ СЛЕДУЮЩИЙ ПРИЯТНЫЙ ВЕЧЕР",
        contactsCtaTitle: "До встречи в FORMA.",
        contactsCtaText:
            "Выберите удобное время и оставьте запрос на бронирование.",
        contactsCtaButton: "Перейти к бронированию"
    },

    ro: {
        home: "Acasă",
        about: "Despre noi",
        menu: "Meniu",
        gallery: "Galerie",
        booking: "Rezervare",
        contacts: "Contacte",
        footerLocation: "Bălți, Republica Moldova",

        contactsEyebrow: "SUNtem AICI • BĂLȚI, MOLDOVA",
        contactsTitle: "Hai să ne întâlnim la FORMA.",
        contactsLead:
            "Aici găsești informațiile de contact și poți vedea orașul Bălți pe hartă.",
        contactsBookingButton: "Rezervă o masă",

        contactsInfoLabel: "Informații de contact",
        contactsInfoTitle: "Ne-ar face plăcere să ne scrii.",
        contactsInfoText:
            "Datele de mai jos sunt demonstrative și fac parte dintr-un proiect educațional. Înainte de publicarea unui restaurant real, acestea trebuie înlocuite cu informații de contact confirmate.",

        contactsAddressTitle: "Oraș",
        contactsAddress: "Bălți, Republica Moldova",
        contactsMapLink: "Vezi pe hartă ↗",

        contactsPhoneTitle: "Telefon",
        contactsPhone: "+373 00 000 000 — număr demonstrativ",
        contactsPhoneNote: "Numărul trebuie înlocuit",

        contactsEmailTitle: "E-mail",
        contactsEmailNote: "Adresă demonstrativă pentru proiect",

        contactsHoursTitle: "Program",
        contactsHours: "Zilnic: 12:00–22:00",
        contactsHoursNote: "Program exemplificativ pentru proiect",

        contactsMapEyebrow: "GĂSEȘTE-NE",
        contactsMapTitle: "Bălți pe hartă.",
        contactsMapText:
            "Harta afișează orașul Bălți. Adresa exactă a restaurantului nu este încă indicată în proiectul demonstrativ.",
        contactsOpenMap: "Deschide harta",
        contactsMapCaption:
            "Harta indică orașul, nu locația exactă a restaurantului.",

        contactsCtaEyebrow: "URMĂTOAREA TA SEARĂ PLĂCUTĂ",
        contactsCtaTitle: "Ne vedem la FORMA.",
        contactsCtaText:
            "Alege ora potrivită și trimite o solicitare de rezervare.",
        contactsCtaButton: "Mergi la rezervare"
    },

    en: {
        home: "Home",
        about: "About",
        menu: "Menu",
        gallery: "Gallery",
        booking: "Reservation",
        contacts: "Contacts",
        footerLocation: "Bălți, Republic of Moldova",

        contactsEyebrow: "WE ARE HERE • BĂLȚI, MOLDOVA",
        contactsTitle: "Let's meet at FORMA.",
        contactsLead:
            "Find our contact information and view the city of Bălți on the map.",
        contactsBookingButton: "Book a table",

        contactsInfoLabel: "Contact information",
        contactsInfoTitle: "We'd be happy to hear from you.",
        contactsInfoText:
            "The details below are demonstration data for an educational project. Before a real restaurant is published, they must be replaced with verified contact information.",

        contactsAddressTitle: "City",
        contactsAddress: "Bălți, Republic of Moldova",
        contactsMapLink: "View on map ↗",

        contactsPhoneTitle: "Phone",
        contactsPhone: "+373 00 000 000 — demonstration number",
        contactsPhoneNote: "This number must be replaced",

        contactsEmailTitle: "Email",
        contactsEmailNote: "Demonstration address for the project",

        contactsHoursTitle: "Opening hours",
        contactsHours: "Daily: 12:00–22:00",
        contactsHoursNote: "Example hours for the educational project",

        contactsMapEyebrow: "FIND US",
        contactsMapTitle: "Bălți on the map.",
        contactsMapText:
            "The map shows the city of Bălți. The exact restaurant address has not yet been specified in this demonstration project.",
        contactsOpenMap: "Open map",
        contactsMapCaption:
            "The map shows the city, not the restaurant's exact location.",

        contactsCtaEyebrow: "YOUR NEXT ENJOYABLE EVENING",
        contactsCtaTitle: "See you at FORMA.",
        contactsCtaText:
            "Choose a convenient time and submit a table reservation request.",
        contactsCtaButton: "Go to reservations"
    }
};

function setContactsLanguage(language) {
    const selectedTranslations = contactsTranslations[language];

    if (!selectedTranslations) {
        return;
    }

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;

        if (selectedTranslations[key] !== undefined) {
            element.textContent = selectedTranslations[key];
        }
    });

    document.querySelectorAll(".lang-btn").forEach((button) => {
        const isActive = button.dataset.lang === language;

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });
}

document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
        setContactsLanguage(button.dataset.lang);
    });
});

/* Устанавливаем русский язык при открытии страницы */

setContactsLanguage("ru");
