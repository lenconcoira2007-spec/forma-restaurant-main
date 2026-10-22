
/* ========================================
   FORMA Restaurant & Bistro
   Переводы и проверка формы бронирования
======================================== */

const bookingTranslations = {
    ru: {
        home: "Главная",
        about: "О нас",
        menu: "Меню",
        gallery: "Галерея",
        booking: "Бронирование",
        contacts: "Контакты",
        footerLocation: "Бельцы, Республика Молдова",

        bookingEyebrow: "ВАШ СТОЛИК В FORMA",
        bookingTitle: "Запланируйте приятный вечер.",
        bookingLead:
            "Заполните форму, чтобы отправить запрос на бронирование столика.",

        bookingFormLabel: "Детали бронирования",
        bookingInfoEyebrow: "МЫ БУДЕМ РАДЫ ВАС ВИДЕТЬ",
        bookingInfoTitle: "Ваш вечер начинается здесь.",
        bookingInfoText:
            "Укажите удобные дату и время, количество гостей и контактные данные. Мы используем информацию из формы для обработки вашего запроса.",
        bookingInfoNote:
            "Пожалуйста, проверьте данные перед отправкой.",
        bookingMenuLink: "Посмотреть меню →",

        bookingFormEyebrow: "ВАША ЗАЯВКА",
        bookingFormTitle: "Забронировать столик",
        bookingRequiredNote: "Поля со звёздочкой обязательны.",

        bookingNameLabel: "Ваше имя *",
        bookingNamePlaceholder: "Введите ваше имя",
        bookingEmailLabel: "Электронная почта *",
        bookingPhoneLabel: "Телефон *",
        bookingDateLabel: "Дата *",
        bookingTimeLabel: "Время *",
        bookingTimePlaceholder: "Выберите время",
        bookingGuestsLabel: "Количество гостей *",
        bookingGuestsPlaceholder: "Выберите количество гостей",
        bookingMessageLabel: "Пожелания (необязательно)",
        bookingMessagePlaceholder: "Например, пожелания по размещению",
        bookingSubmit: "Отправить запрос",

        bookingSuccess:
            "Форма заполнена корректно. Это демонстрационный сайт: заявка не отправлена в ресторан."
    },

    ro: {
        home: "Acasă",
        about: "Despre noi",
        menu: "Meniu",
        gallery: "Galerie",
        booking: "Rezervare",
        contacts: "Contacte",
        footerLocation: "Bălți, Republica Moldova",

        bookingEyebrow: "MASA TA LA FORMA",
        bookingTitle: "Planifică o seară plăcută.",
        bookingLead:
            "Completează formularul pentru a trimite o solicitare de rezervare.",

        bookingFormLabel: "Detaliile rezervării",
        bookingInfoEyebrow: "NE BUCURĂM SĂ TE VEDEM",
        bookingInfoTitle: "Seara ta începe aici.",
        bookingInfoText:
            "Indică data și ora dorite, numărul de persoane și datele de contact. Informațiile din formular sunt destinate procesării solicitării.",
        bookingInfoNote:
            "Te rugăm să verifici datele înainte de trimitere.",
        bookingMenuLink: "Vezi meniul →",

        bookingFormEyebrow: "SOLICITAREA TA",
        bookingFormTitle: "Rezervă o masă",
        bookingRequiredNote: "Câmpurile marcate cu asterisc sunt obligatorii.",

        bookingNameLabel: "Numele tău *",
        bookingNamePlaceholder: "Introdu numele tău",
        bookingEmailLabel: "Adresa de e-mail *",
        bookingPhoneLabel: "Telefon *",
        bookingDateLabel: "Data *",
        bookingTimeLabel: "Ora *",
        bookingTimePlaceholder: "Alege ora",
        bookingGuestsLabel: "Numărul de persoane *",
        bookingGuestsPlaceholder: "Alege numărul de persoane",
        bookingMessageLabel: "Preferințe (opțional)",
        bookingMessagePlaceholder: "De exemplu, preferințe privind locul",
        bookingSubmit: "Trimite solicitarea",

        bookingSuccess:
            "Formularul este completat corect. Acesta este un site demonstrativ: solicitarea nu a fost trimisă restaurantului."
    },

    en: {
        home: "Home",
        about: "About",
        menu: "Menu",
        gallery: "Gallery",
        booking: "Reservation",
        contacts: "Contacts",
        footerLocation: "Bălți, Republic of Moldova",

        bookingEyebrow: "YOUR TABLE AT FORMA",
        bookingTitle: "Plan a wonderful evening.",
        bookingLead:
            "Fill in the form to submit a table reservation request.",

        bookingFormLabel: "Reservation details",
        bookingInfoEyebrow: "WE LOOK FORWARD TO SEEING YOU",
        bookingInfoTitle: "Your evening starts here.",
        bookingInfoText:
            "Choose your preferred date and time, number of guests and contact details. The form information is intended for processing your request.",
        bookingInfoNote:
            "Please check your details before submitting.",
        bookingMenuLink: "Explore the menu →",

        bookingFormEyebrow: "YOUR REQUEST",
        bookingFormTitle: "Book a table",
        bookingRequiredNote: "Fields marked with an asterisk are required.",

        bookingNameLabel: "Your name *",
        bookingNamePlaceholder: "Enter your name",
        bookingEmailLabel: "Email address *",
        bookingPhoneLabel: "Phone *",
        bookingDateLabel: "Date *",
        bookingTimeLabel: "Time *",
        bookingTimePlaceholder: "Choose a time",
        bookingGuestsLabel: "Number of guests *",
        bookingGuestsPlaceholder: "Choose the number of guests",
        bookingMessageLabel: "Special requests (optional)",
        bookingMessagePlaceholder: "For example, seating preferences",
        bookingSubmit: "Submit request",

        bookingSuccess:
            "The form is valid. This is a demo website: the request has not been sent to the restaurant."
    }
};

function setBookingLanguage(language) {
    const selectedTranslations = bookingTranslations[language];

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

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
        const key = element.dataset.i18nPlaceholder;

        if (selectedTranslations[key] !== undefined) {
            element.placeholder = selectedTranslations[key];
        }
    });

    document.querySelectorAll(".lang-btn").forEach((button) => {
        const isActive = button.dataset.lang === language;

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });
}

/* Переключение языков */

document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
        setBookingLanguage(button.dataset.lang);
    });
});

/* Минимальная дата — сегодня */

const bookingDate = document.getElementById("booking-date");

function getLocalDateString() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

if (bookingDate) {
    bookingDate.min = getLocalDateString();
}

/* Проверка формы */

const bookingForm = document.getElementById("booking-form");
const bookingNotice = document.getElementById("booking-form-notice");

if (bookingForm && bookingNotice) {
    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!bookingForm.checkValidity()) {
            bookingForm.reportValidity();
            return;
        }

        const language =
            document.documentElement.lang in bookingTranslations
                ? document.documentElement.lang
                : "ru";

        bookingNotice.textContent =
            bookingTranslations[language].bookingSuccess;

        bookingNotice.focus();
    });

    bookingForm.addEventListener("input", () => {
        bookingNotice.textContent = "";
    });

    bookingForm.addEventListener("change", () => {
        bookingNotice.textContent = "";
    });
}

/* Устанавливаем русский язык при открытии страницы */

setBookingLanguage("ru");
