document.addEventListener("DOMContentLoaded", () => {
    const filters = document.querySelectorAll(".menu-filter");
    const cards = document.querySelectorAll(".menu-card");

    // Если на странице нет меню, ничего не выполняем.
    if (!filters.length || !cards.length) {
        return;
    }

    filters.forEach((button) => {
        button.addEventListener("click", () => {
            const selectedCategory = button.dataset.filter;

            // Обновляем активную кнопку.
            filters.forEach((filter) => {
                const isActive = filter === button;

                filter.classList.toggle("active", isActive);
                filter.setAttribute("aria-pressed", String(isActive));
            });

            // Показываем все блюда или выбранную категорию.
            cards.forEach((card) => {
                const matchesCategory =
                    selectedCategory === "all" ||
                    card.dataset.category === selectedCategory;

                card.hidden = !matchesCategory;
            });
        });
    });
});
// Переводы страницы меню: русский, румынский и английский.

const menuPageTranslations = {
    ru: {
        menuPageEyebrow: "ВКУС • КАЧЕСТВО • УДОВОЛЬСТВИЕ",
        menuPageTitle: "Наше меню",
        menuPageDescription:
            "Откройте для себя блюда, приготовленные с вниманием к ингредиентам, вкусу и каждой детали.",
        menuCatalogLabel: "Выберите что-то особенное",
        menuFilterAll: "Всё меню",
        menuFilterStarters: "Закуски",
        menuFilterMains: "Основные блюда",
        menuFilterDesserts: "Десерты",
        menuFilterDrinks: "Напитки",
        menuTagStarter: "Закуска",
        menuTagMain: "Основное блюдо",
        menuTagDessert: "Десерт",
        menuTagDrink: "Напиток",
        dish1Name: "Салат с сезонными овощами",
        dish1Description: "Свежие овощи, зелень и лёгкая заправка.",
        dish2Name: "Брускетты с томатами",
        dish2Description:
            "Хрустящий хлеб, томаты, базилик и оливковое масло.",
        dish3Name: "Паста с томатным соусом",
        dish3Description: "Паста, томатный соус, травы и тёртый сыр.",
        dish4Name: "Мясо на гриле",
        dish4Description: "Сочное мясо с гарниром и фирменным соусом.",
        dish5Name: "Шоколадный торт",
        dish5Description:
            "Нежный шоколадный десерт с насыщенным вкусом какао.",
        dish6Name: "Йогуртовый десерт с ягодами",
        dish6Description:
            "Лёгкий крем, сезонные ягоды и хрустящая крошка.",
        dish7Name: "Домашний лимонад",
        dish7Description: "Лимон, мята, лёд и свежие фрукты.",
        dish8Name: "Кофе",
        dish8Description:
            "Ароматный кофе, приготовленный перед подачей.",
        menuNote:
            "Изображения и цены представлены как демонстрационный вариант меню."
    },

    ro: {
        menuPageEyebrow: "GUST • CALITATE • PLĂCERE",
        menuPageTitle: "Meniul nostru",
        menuPageDescription:
            "Descoperiți preparate pregătite cu atenție la ingrediente, gust și fiecare detaliu.",
        menuCatalogLabel: "Alegeți ceva special",
        menuFilterAll: "Tot meniul",
        menuFilterStarters: "Gustări",
        menuFilterMains: "Feluri principale",
        menuFilterDesserts: "Deserturi",
        menuFilterDrinks: "Băuturi",
        menuTagStarter: "Gustare",
        menuTagMain: "Fel principal",
        menuTagDessert: "Desert",
        menuTagDrink: "Băutură",
        dish1Name: "Salată cu legume de sezon",
        dish1Description: "Legume proaspete, verdețuri și un dressing ușor.",
        dish2Name: "Bruschete cu roșii",
        dish2Description:
            "Pâine crocantă, roșii, busuioc și ulei de măsline.",
        dish3Name: "Paste cu sos de roșii",
        dish3Description: "Paste, sos de roșii, ierburi și brânză rasă.",
        dish4Name: "Carne la grătar",
        dish4Description: "Carne suculentă cu garnitură și sosul casei.",
        dish5Name: "Tort de ciocolată",
        dish5Description:
            "Desert delicat de ciocolată cu gust intens de cacao.",
        dish6Name: "Desert cu iaurt și fructe de pădure",
        dish6Description:
            "Cremă ușoară, fructe de pădure de sezon și crumble crocant.",
        dish7Name: "Limonadă de casă",
        dish7Description: "Lămâie, mentă, gheață și fructe proaspete.",
        dish8Name: "Cafea",
        dish8Description: "Cafea aromată, preparată înainte de servire.",
        menuNote:
            "Imaginile și prețurile sunt prezentate ca exemplu demonstrativ de meniu."
    },

    en: {
        menuPageEyebrow: "TASTE • QUALITY • PLEASURE",
        menuPageTitle: "Our Menu",
        menuPageDescription:
            "Discover dishes prepared with attention to ingredients, flavour and every detail.",
        menuCatalogLabel: "Choose something special",
        menuFilterAll: "All menu",
        menuFilterStarters: "Starters",
        menuFilterMains: "Main courses",
        menuFilterDesserts: "Desserts",
        menuFilterDrinks: "Drinks",
        menuTagStarter: "Starter",
        menuTagMain: "Main course",
        menuTagDessert: "Dessert",
        menuTagDrink: "Drink",
        dish1Name: "Seasonal Vegetable Salad",
        dish1Description: "Fresh vegetables, greens and a light dressing.",
        dish2Name: "Tomato Bruschetta",
        dish2Description:
            "Crispy bread, tomatoes, basil and olive oil.",
        dish3Name: "Pasta with Tomato Sauce",
        dish3Description: "Pasta, tomato sauce, herbs and grated cheese.",
        dish4Name: "Grilled Meat",
        dish4Description: "Juicy meat with a side dish and house sauce.",
        dish5Name: "Chocolate Cake",
        dish5Description:
            "A delicate chocolate dessert with a rich cocoa flavour.",
        dish6Name: "Yogurt Dessert with Berries",
        dish6Description:
            "Light cream, seasonal berries and a crunchy crumble.",
        dish7Name: "Homemade Lemonade",
        dish7Description: "Lemon, mint, ice and fresh fruit.",
        dish8Name: "Coffee",
        dish8Description: "Aromatic coffee, prepared fresh to order.",
        menuNote:
            "Images and prices are presented as a sample demonstration menu."
    }
};

function applyMenuLanguage(language) {
    const dictionary = menuPageTranslations[language];

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

// Переводим меню при выборе языка в шапке сайта.
document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
        applyMenuLanguage(button.dataset.lang);
    });
});

// При первом открытии используем русский язык.
applyMenuLanguage(document.documentElement.lang || "ru");