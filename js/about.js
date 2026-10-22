
/* ========================================
   FORMA Restaurant & Bistro
   Переводы страницы «О нас»
======================================== */

const aboutTranslations = {
    ru: {
        home: "Главная",
        about: "О нас",
        menu: "Меню",
        gallery: "Галерея",
        booking: "Бронирование",
        contacts: "Контакты",
        footerLocation: "Бельцы, Республика Молдова",

        aboutEyebrow: "НАША ИСТОРИЯ • НАШ ПОДХОД",
        aboutTitle: "Больше, чем ресторан.",
        aboutLead:
            "FORMA — пространство, где вкус, атмосфера и гостеприимство объединяются в одно целое.",
        aboutExplore: "Открыть меню",
        aboutBook: "Забронировать столик",

        aboutStoryLabel: "Идея FORMA",
        aboutStorySmall: "ПРОСТОТА В ДЕТАЛЯХ",
        aboutStoryTitle: "Место, куда хочется возвращаться.",
        aboutStoryTextOne:
            "FORMA Restaurant & Bistro — современное пространство в Бельцах для вкусных открытий, спокойных обедов и тёплых встреч.",
        aboutStoryTextTwo:
            "Мы верим, что хорошее впечатление складывается из деталей: продуманного меню, приятной обстановки и искреннего внимания к каждому гостю.",
        aboutStoryNote: "Ваше время. Ваш вкус. Ваша FORMA.",

        aboutValuesLabel: "Наши принципы",
        aboutValuesTitle: "Что делает нас FORMA",
        aboutValuesDescription:
            "Три принципа, которые определяют атмосферу нашего бистро.",
        aboutValueOneTitle: "Внимание к вкусу",
        aboutValueOneText:
            "Мы ценим сочетания ингредиентов, баланс и внимание к деталям в каждом блюде.",
        aboutValueTwoTitle: "Атмосфера уюта",
        aboutValueTwoText:
            "Создаём пространство, в котором приятно встречаться, разговаривать и отдыхать.",
        aboutValueThreeTitle: "Искреннее гостеприимство",
        aboutValueThreeText:
            "Для нас важно, чтобы каждый гость чувствовал себя желанным и мог насладиться своим временем.",

        aboutPromiseEyebrow: "ВАШ СЛЕДУЮЩИЙ ПРИЯТНЫЙ МОМЕНТ",
        aboutPromiseTitle: "Встретимся в FORMA.",
        aboutPromiseText:
            "Выберите любимые блюда и проведите время в приятной атмосфере.",
        aboutPromiseButton: "Забронировать столик"
    },

    ro: {
        home: "Acasă",
        about: "Despre noi",
        menu: "Meniu",
        gallery: "Galerie",
        booking: "Rezervare",
        contacts: "Contacte",
        footerLocation: "Bălți, Republica Moldova",

        aboutEyebrow: "POVESTEA NOASTRĂ • ABORDAREA NOASTRĂ",
        aboutTitle: "Mai mult decât un restaurant.",
        aboutLead:
            "FORMA este un spațiu în care gustul, atmosfera și ospitalitatea se îmbină armonios.",
        aboutExplore: "Descoperă meniul",
        aboutBook: "Rezervă o masă",

        aboutStoryLabel: "Ideea FORMA",
        aboutStorySmall: "SIMPLITATEA STĂ ÎN DETALII",
        aboutStoryTitle: "Un loc în care vrei să revii.",
        aboutStoryTextOne:
            "FORMA Restaurant & Bistro este un spațiu modern în Bălți pentru descoperiri culinare, prânzuri relaxante și întâlniri plăcute.",
        aboutStoryTextTwo:
            "Credem că o experiență frumoasă se construiește din detalii: un meniu bine gândit, o atmosferă plăcută și atenție sinceră pentru fiecare oaspete.",
        aboutStoryNote: "Timpul tău. Gustul tău. FORMA ta.",

        aboutValuesLabel: "Principiile noastre",
        aboutValuesTitle: "Ce definește FORMA",
        aboutValuesDescription:
            "Trei principii care definesc atmosfera bistroului nostru.",
        aboutValueOneTitle: "Atenție la gust",
        aboutValueOneText:
            "Apreciem combinațiile de ingrediente, echilibrul și atenția acordată fiecărui detaliu al preparatelor.",
        aboutValueTwoTitle: "Atmosferă primitoare",
        aboutValueTwoText:
            "Creăm un spațiu în care este plăcut să te întâlnești cu ceilalți, să vorbești și să te relaxezi.",
        aboutValueThreeTitle: "Ospitalitate sinceră",
        aboutValueThreeText:
            "Ne dorim ca fiecare oaspete să se simtă binevenit și să se bucure de timpul petrecut aici.",

        aboutPromiseEyebrow: "URMĂTORUL TĂU MOMENT PLĂCUT",
        aboutPromiseTitle: "Ne întâlnim la FORMA.",
        aboutPromiseText:
            "Alege preparatele preferate și petrece timpul într-o atmosferă plăcută.",
        aboutPromiseButton: "Rezervă o masă"
    },

    en: {
        home: "Home",
        about: "About",
        menu: "Menu",
        gallery: "Gallery",
        booking: "Reservation",
        contacts: "Contacts",
        footerLocation: "Bălți, Republic of Moldova",

        aboutEyebrow: "OUR STORY • OUR APPROACH",
        aboutTitle: "More than a restaurant.",
        aboutLead:
            "FORMA is a place where taste, atmosphere and hospitality come together.",
        aboutExplore: "Explore the menu",
        aboutBook: "Book a table",

        aboutStoryLabel: "The idea behind FORMA",
        aboutStorySmall: "SIMPLICITY IN THE DETAILS",
        aboutStoryTitle: "A place you'll want to return to.",
        aboutStoryTextOne:
            "FORMA Restaurant & Bistro is a modern space in Bălți for culinary discoveries, relaxed lunches and warm gatherings.",
        aboutStoryTextTwo:
            "We believe a great experience is made up of details: a thoughtfully designed menu, a pleasant setting and genuine attention to every guest.",
        aboutStoryNote: "Your time. Your taste. Your FORMA.",

        aboutValuesLabel: "Our principles",
        aboutValuesTitle: "What makes us FORMA",
        aboutValuesDescription:
            "Three principles that shape the atmosphere of our bistro.",
        aboutValueOneTitle: "Attention to taste",
        aboutValueOneText:
            "We value ingredient combinations, balance and attention to detail in every dish.",
        aboutValueTwoTitle: "A welcoming atmosphere",
        aboutValueTwoText:
            "We create a space where people can meet, talk and relax.",
        aboutValueThreeTitle: "Genuine hospitality",
        aboutValueThreeText:
            "We want every guest to feel welcome and enjoy their time with us.",

        aboutPromiseEyebrow: "YOUR NEXT ENJOYABLE MOMENT",
        aboutPromiseTitle: "Meet us at FORMA.",
        aboutPromiseText:
            "Choose your favourite dishes and enjoy time in a pleasant atmosphere.",
        aboutPromiseButton: "Book a table"
    }
};

function setAboutLanguage(language) {
    const selectedTranslations = aboutTranslations[language];

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
        setAboutLanguage(button.dataset.lang);
    });
});

setAboutLanguage("ru");
