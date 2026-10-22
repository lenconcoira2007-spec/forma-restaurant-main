// Фильтрация фотографий и переводы галереи FORMA.

document.addEventListener("DOMContentLoaded", () => {
    const filters = document.querySelectorAll(".gallery-filter");
    const items = document.querySelectorAll(".gallery-item");

    // Фильтры галереи.
    filters.forEach((button) => {
        button.addEventListener("click", () => {
            const selectedCategory = button.dataset.filter;

            filters.forEach((filter) => {
                const isActive = filter === button;

                filter.classList.toggle("active", isActive);
                filter.setAttribute("aria-pressed", String(isActive));
            });

            items.forEach((item) => {
                const matchesCategory =
                    selectedCategory === "all" ||
                    item.dataset.category === selectedCategory;

                item.hidden = !matchesCategory;
            });
        });
    });

    // Тексты галереи на трёх языках.
    const galleryTranslations = {
        ru: {
            galleryEyebrow: "МОМЕНТЫ • ВКУС • АТМОСФЕРА",
            galleryTitle: "Галерея FORMA",
            galleryDescription:
                "Взгляните на детали, которые создают особенную атмосферу нашего ресторана: красивые блюда, десерты и тёплые встречи.",
            gallerySectionLabel: "Истории в каждом кадре",
            galleryFilterAll: "Все фотографии",
            galleryFilterAmbience: "Атмосфера",
            galleryFilterDishes: "Блюда",
            galleryFilterDesserts: "Десерты",
            galleryFilterDrinks: "Напитки",
            galleryImage1Title: "Атмосфера FORMA",
            galleryImage1Description:
                "Внимание к деталям и красивая подача.",
            galleryImage2Title: "Свежие ингредиенты",
            galleryImage2Description:
                "Цвет, свежесть и натуральный вкус.",
            galleryImage3Title: "Маленькие удовольствия",
            galleryImage3Description:
                "Закуски, приготовленные с заботой.",
            galleryImage4Title: "Вкус в деталях",
            galleryImage4Description:
                "Гармония вкуса и оформления.",
            galleryImage5Title: "Кулинарное мастерство",
            galleryImage5Description:
                "Вкус, текстура и продуманная подача.",
            galleryImage6Title: "Сладкий момент",
            galleryImage6Description:
                "Десерт для особенного настроения.",
            galleryImage7Title: "Ягодная нежность",
            galleryImage7Description:
                "Лёгкий десерт с ягодами.",
            galleryImage8Title: "Кофейная пауза",
            galleryImage8Description:
                "Ароматный кофе и спокойные моменты.",
            galleryNote:
                "Фотографии используются для демонстрации дизайна галереи."
        },

        ro: {
            galleryEyebrow: "MOMENTE • GUST • ATMOSFERĂ",
            galleryTitle: "Galeria FORMA",
            galleryDescription:
                "Descoperiți detaliile care creează atmosfera specială a restaurantului nostru: preparate frumoase, deserturi și întâlniri plăcute.",
            gallerySectionLabel: "Povești în fiecare fotografie",
            galleryFilterAll: "Toate fotografiile",
            galleryFilterAmbience: "Atmosferă",
            galleryFilterDishes: "Preparate",
            galleryFilterDesserts: "Deserturi",
            galleryFilterDrinks: "Băuturi",
            galleryImage1Title: "Atmosfera FORMA",
            galleryImage1Description:
                "Atenție la detalii și prezentare frumoasă.",
            galleryImage2Title: "Ingrediente proaspete",
            galleryImage2Description:
                "Culoare, prospețime și gust natural.",
            galleryImage3Title: "Mici plăceri",
            galleryImage3Description:
                "Gustări pregătite cu grijă.",
            galleryImage4Title: "Gust în fiecare detaliu",
            galleryImage4Description:
                "Armonie între gust și prezentare.",
            galleryImage5Title: "Măiestrie culinară",
            galleryImage5Description:
                "Gust, textură și prezentare atentă.",
            galleryImage6Title: "Un moment dulce",
            galleryImage6Description:
                "Un desert pentru o stare de spirit specială.",
            galleryImage7Title: "Delicatețe cu fructe de pădure",
            galleryImage7Description:
                "Un desert ușor cu fructe de pădure.",
            galleryImage8Title: "Pauză de cafea",
            galleryImage8Description:
                "Cafea aromată și momente de liniște.",
            galleryNote:
                "Fotografiile sunt utilizate pentru prezentarea designului galeriei."
        },

        en: {
            galleryEyebrow: "MOMENTS • TASTE • ATMOSPHERE",
            galleryTitle: "FORMA Gallery",
            galleryDescription:
                "Discover the details that create our restaurant's special atmosphere: beautiful dishes, desserts and warm gatherings.",
            gallerySectionLabel: "Stories in every frame",
            galleryFilterAll: "All photos",
            galleryFilterAmbience: "Ambience",
            galleryFilterDishes: "Dishes",
            galleryFilterDesserts: "Desserts",
            galleryFilterDrinks: "Drinks",
            galleryImage1Title: "FORMA Atmosphere",
            galleryImage1Description:
                "Attention to detail and beautiful presentation.",
            galleryImage2Title: "Fresh Ingredients",
            galleryImage2Description:
                "Colour, freshness and natural flavour.",
            galleryImage3Title: "Small Pleasures",
            galleryImage3Description:
                "Starters prepared with care.",
            galleryImage4Title: "Flavour in Every Detail",
            galleryImage4Description:
                "A harmony of taste and presentation.",
            galleryImage5Title: "Culinary Craft",
            galleryImage5Description:
                "Flavour, texture and thoughtful presentation.",
            galleryImage6Title: "A Sweet Moment",
            galleryImage6Description:
                "A dessert for a special mood.",
            galleryImage7Title: "Berry Delight",
            galleryImage7Description:
                "A light dessert with berries.",
            galleryImage8Title: "Coffee Break",
            galleryImage8Description:
                "Aromatic coffee and peaceful moments.",
            galleryNote:
                "Photos are used to demonstrate the gallery design."
        }
    };

    function applyGalleryLanguage(language) {
        const dictionary = galleryTranslations[language];

        if (!dictionary) {
            return;
        }

        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const key = element.dataset.i18n;

            if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
                element.textContent = dictionary[key];
            }
        });
    }

    // Переключение языка в шапке сайта.
    document.querySelectorAll(".lang-btn").forEach((button) => {
        button.addEventListener("click", () => {
            applyGalleryLanguage(button.dataset.lang);
        });
    });

    // Русский язык используется при первом открытии.
    applyGalleryLanguage(document.documentElement.lang || "ru");
});