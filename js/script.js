const translations = {
    ru: {
        home: "Главная",
        about: "О нас",
        menu: "Меню",
        gallery: "Галерея",
        booking: "Бронирование",
        contacts: "Контакты",
        eyebrow: "РЕСТОРАН • БЕЛЬЦЫ • МОЛДОВА",
        heroTitle: "Вкус, который создаёт атмосферу.",
        heroDescription:
            "Современная кухня, уютная атмосфера и моменты, которыми хочется делиться.",
        viewMenu: "Посмотреть меню",
        bookTable: "Забронировать столик",
        heroNote: "Хорошая еда. Тёплые встречи. Ваше место.",
        welcomeLabel: "Добро пожаловать в FORMA",
        welcomeTitle: "Пространство для приятных моментов.",
        welcomeDescription:
            "FORMA Restaurant & Bistro — место, где встречаются вкус, стиль и гостеприимство. Мы создаём атмосферу для неспешных обедов, встреч с друзьями и особенных вечеров.",
        learnMore: "Больше о нас →",
        experienceLabel: "Почему FORMA",
        featureOneTitle: "Вкусная кухня",
        featureOneText:
            "Внимание к ингредиентам, вкусу и каждой детали.",
        featureTwoTitle: "Уютная атмосфера",
        featureTwoText:
            "Пространство, в котором приятно проводить время.",
        featureThreeTitle: "Особые встречи",
        featureThreeText:
            "Поводы собраться вместе и создать воспоминания.",
        reservationEyebrow: "ВАШ СЛЕДУЮЩИЙ ПРИЯТНЫЙ ВЕЧЕР",
        reservationTitle: "Будем рады вас видеть.",
        reservationButton: "Забронировать столик",
        footerLocation: "Бельцы, Республика Молдова"
    },

    ro: {
        home: "Acasă",
        about: "Despre noi",
        menu: "Meniu",
        gallery: "Galerie",
        booking: "Rezervare",
        contacts: "Contacte",
        eyebrow: "RESTAURANT • BĂLȚI • MOLDOVA",
        heroTitle: "Gustul care creează atmosferă.",
        heroDescription:
            "Bucătărie modernă, atmosferă primitoare și momente de împărtășit.",
        viewMenu: "Vezi meniul",
        bookTable: "Rezervă o masă",
        heroNote: "Mâncare bună. Întâlniri calde. Locul tău.",
        welcomeLabel: "Bine ați venit la FORMA",
        welcomeTitle: "Un spațiu pentru momente frumoase.",
        welcomeDescription:
            "FORMA Restaurant & Bistro este locul unde se întâlnesc gustul, stilul și ospitalitatea. Creăm o atmosferă plăcută pentru prânzuri relaxante, întâlniri cu prietenii și seri speciale.",
        learnMore: "Mai multe despre noi →",
        experienceLabel: "De ce FORMA",
        featureOneTitle: "Bucătărie gustoasă",
        featureOneText:
            "Atenție la ingrediente, gust și fiecare detaliu.",
        featureTwoTitle: "Atmosferă plăcută",
        featureTwoText:
            "Un spațiu în care este plăcut să petreci timpul.",
        featureThreeTitle: "Întâlniri speciale",
        featureThreeText:
            "Motive să ne întâlnim și să creăm amintiri.",
        reservationEyebrow: "URMĂTOAREA DUMNEAVOASTRĂ SEARĂ PLĂCUTĂ",
        reservationTitle: "Ne bucurăm să vă vedem.",
        reservationButton: "Rezervă o masă",
        footerLocation: "Bălți, Republica Moldova"
    },

    en: {
        home: "Home",
        about: "About",
        menu: "Menu",
        gallery: "Gallery",
        booking: "Reservation",
        contacts: "Contacts",
        eyebrow: "RESTAURANT • BĂLȚI • MOLDOVA",
        heroTitle: "Taste that creates an atmosphere.",
        heroDescription:
            "Modern cuisine, a welcoming atmosphere and moments worth sharing.",
        viewMenu: "Explore the menu",
        bookTable: "Book a table",
        heroNote: "Good food. Warm gatherings. Your place.",
        welcomeLabel: "Welcome to FORMA",
        welcomeTitle: "A space for beautiful moments.",
        welcomeDescription:
            "FORMA Restaurant & Bistro is where taste, style and hospitality come together. We create an inviting atmosphere for relaxed lunches, meetings with friends and special evenings.",
        learnMore: "More about us →",
        experienceLabel: "Why FORMA",
        featureOneTitle: "Delicious cuisine",
        featureOneText:
            "Attention to ingredients, flavour and every detail.",
        featureTwoTitle: "Warm atmosphere",
        featureTwoText:
            "A space where you can enjoy spending time.",
        featureThreeTitle: "Special gatherings",
        featureThreeText:
            "Reasons to come together and create memories.",
        reservationEyebrow: "YOUR NEXT WONDERFUL EVENING",
        reservationTitle: "We look forward to seeing you.",
        reservationButton: "Book a table",
        footerLocation: "Bălți, Republic of Moldova"
    }
};

function setLanguage(language) {
    const selectedTranslations = translations[language];

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
        setLanguage(button.dataset.lang);
    });
});

const yearElement = document.getElementById("current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

setLanguage("ru");