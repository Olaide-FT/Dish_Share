const recipes = [
    {
        id: 1,
        title: "Creamy Garlic Pasta",
        description: "A silky pasta dish with garlic, cream, parmesan, and fresh herbs for a cozy dinner.",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=1200&q=80",
        prepTime: "25 mins",
        difficulty: "Easy",
        ingredients: [
            "250g fettuccine pasta",
            "3 garlic cloves, minced",
            "1 cup cooking cream",
            "1/2 cup grated parmesan",
            "2 tbsp butter",
            "1 tbsp olive oil",
            "Salt and black pepper",
            "Fresh parsley for garnish"
        ],
        instructions: [
            "Boil the pasta in salted water until al dente, then drain.",
            "Heat olive oil and butter in a pan, then sauté garlic until fragrant.",
            "Pour in cream and stir gently over low heat.",
            "Add parmesan, salt, and pepper, then whisk until smooth.",
            "Toss in the pasta and coat evenly with the sauce.",
            "Serve warm with parsley and extra parmesan."
        ]
    },
    {
        id: 2,
        title: "Spicy Chicken Shawarma Bowl",
        description: "A loaded bowl with seasoned chicken, rice, crunchy vegetables, and creamy garlic sauce.",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
        prepTime: "35 mins",
        difficulty: "Medium",
        ingredients: [
            "2 chicken breasts, sliced",
            "1 tsp paprika",
            "1 tsp cumin",
            "1/2 tsp cayenne pepper",
            "2 cups cooked rice",
            "Lettuce, tomato, cucumber",
            "1/2 cup garlic yogurt sauce",
            "1 tbsp olive oil"
        ],
        instructions: [
            "Season the chicken with spices and olive oil.",
            "Pan-sear until cooked through and slightly charred.",
            "Prepare your serving bowl with rice and chopped vegetables.",
            "Add the chicken on top.",
            "Drizzle generously with garlic sauce.",
            "Serve immediately while warm."
        ]
    },
    {
        id: 3,
        title: "Crispy French Fries",
        description: "Golden fries with a crisp exterior and fluffy center, perfect for snacks or sides.",
        image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=1200&q=80",
        prepTime: "30 mins",
        difficulty: "Easy",
        ingredients: [
            "4 large potatoes",
            "Vegetable oil for frying",
            "1 tsp salt",
            "1/2 tsp paprika",
            "1/2 tsp garlic powder"
        ],
        instructions: [
            "Peel and cut potatoes into even strips.",
            "Soak in cold water for 20 minutes, then pat dry.",
            "Fry once at medium heat until tender.",
            "Fry again at higher heat until golden and crispy.",
            "Season with salt, paprika, and garlic powder.",
            "Serve hot with your favourite dip."
        ]
    },
    {
        id: 4,
        title: "Herb Grilled Salmon",
        description: "Tender salmon fillets infused with lemon, herbs, and olive oil for a fresh, elegant meal.",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80",
        prepTime: "20 mins",
        difficulty: "Medium",
        ingredients: [
            "2 salmon fillets",
            "1 tbsp olive oil",
            "1 lemon, juiced",
            "1 tsp dried oregano",
            "1 tsp parsley",
            "Salt and black pepper"
        ],
        instructions: [
            "Season the salmon with olive oil, lemon juice, herbs, salt, and pepper.",
            "Let it marinate for 10 minutes.",
            "Grill or pan-sear skin-side down first.",
            "Cook until the salmon flakes easily with a fork.",
            "Serve with a fresh salad or roasted vegetables."
        ]
    },
    {
        id: 5,
        title: "Garden Veggie Salad",
        description: "A bright bowl of lettuce, avocado, tomato, cucumber, and carrots with citrus dressing.",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80",
        prepTime: "15 mins",
        difficulty: "Easy",
        ingredients: [
            "Mixed lettuce leaves",
            "1 avocado, sliced",
            "1 cucumber, sliced",
            "2 tomatoes, chopped",
            "1 carrot, shredded",
            "2 tbsp olive oil",
            "1 tbsp lemon juice",
            "Salt and pepper"
        ],
        instructions: [
            "Wash and prepare all vegetables.",
            "Arrange them in a large serving bowl.",
            "Mix olive oil, lemon juice, salt, and pepper to make the dressing.",
            "Pour over the salad and toss gently.",
            "Serve immediately."
        ]
    },
    {
        id: 6,
        title: "Beef Burger Deluxe",
        description: "Juicy beef patty layered with cheese, lettuce, tomato, and a rich house sauce.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
        prepTime: "28 mins",
        difficulty: "Medium",
        ingredients: [
            "2 burger buns",
            "2 beef patties",
            "2 cheese slices",
            "Lettuce leaves",
            "Tomato slices",
            "Onion rings",
            "2 tbsp burger sauce"
        ],
        instructions: [
            "Grill or pan-cook the beef patties until done.",
            "Toast the burger buns lightly.",
            "Layer sauce, lettuce, tomato, and onion on the base bun.",
            "Add patty and cheese.",
            "Top with the second bun and serve hot."
        ]
    },
    {
        id: 7,
        title: "Chicken Alfredo Bake",
        description: "A rich baked pasta with chicken, creamy sauce, and a bubbling golden cheese finish.",
        image: "https://i.pinimg.com/736x/74/6c/37/746c37d23bebe6e36dab8012c8b7a5e8.jpg",
        prepTime: "45 mins",
        difficulty: "Hard",
        ingredients: [
            "300g penne pasta",
            "2 cups cooked chicken",
            "1 1/2 cups alfredo sauce",
            "1 cup mozzarella cheese",
            "1/2 cup parmesan",
            "1 tsp black pepper"
        ],
        instructions: [
            "Boil the pasta until just tender.",
            "Mix pasta, chicken, sauce, pepper, and half the cheese.",
            "Transfer to a baking dish.",
            "Top with remaining cheese.",
            "Bake until bubbly and golden.",
            "Rest for 5 minutes before serving."
        ]
    },
    {
        id: 8,
        title: "Toasted Chicken Tacos",
        description: "Soft tortillas loaded with juicy chicken, salsa, cabbage, and lime crema.",
        image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=1200&q=80",
        prepTime: "22 mins",
        difficulty: "Easy",
        ingredients: [
            "6 taco tortillas",
            "2 cups shredded cooked chicken",
            "1 cup cabbage slaw",
            "1/2 cup salsa",
            "1/4 cup lime crema",
            "1 tbsp olive oil"
        ],
        instructions: [
            "Warm the tortillas lightly in a pan.",
            "Mix chicken with a bit of oil and seasoning, then heat through.",
            "Fill each tortilla with chicken, slaw, and salsa.",
            "Finish with lime crema.",
            "Serve right away."
        ]
    },
    {
        id: 9,
        title: "Tomato Basil Soup",
        description: "A velvety soup made with roasted tomatoes, garlic, basil, and a touch of cream.",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80",
        prepTime: "40 mins",
        difficulty: "Medium",
        ingredients: [
            "6 tomatoes, halved",
            "1 onion, chopped",
            "3 garlic cloves",
            "1 cup vegetable stock",
            "1/4 cup cream",
            "Fresh basil",
            "Olive oil, salt, pepper"
        ],
        instructions: [
            "Roast tomatoes, onion, and garlic until soft.",
            "Blend with stock until smooth.",
            "Pour into a pot and simmer for 10 minutes.",
            "Add cream, basil, salt, and pepper.",
            "Serve hot with bread."
        ]
    }
];

const recipesGrid = document.getElementById("recipesGrid");
const searchInput = document.getElementById("searchInput");
const difficultyFilter = document.getElementById("difficultyFilter");
const favoritesToggle = document.getElementById("favoritesToggle");
const favoritesToggleText = document.getElementById("favoritesToggleText");
const favoritesCount = document.getElementById("favoritesCount");
const favoritesSection = document.getElementById("favoritesSection");
const clearFavoritesView = document.getElementById("clearFavoritesView");
const emptyState = document.getElementById("emptyState");
const heroFavoritesBtn = document.getElementById("heroFavoritesBtn");

const recipeModal = document.getElementById("recipeModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalPanel = document.getElementById("modalPanel");
const closeModal = document.getElementById("closeModal");
const modalCloseSecondary = document.getElementById("modalCloseSecondary");
const modalImage = document.getElementById("modalImage");
const modalDifficulty = document.getElementById("modalDifficulty");
const modalTime = document.getElementById("modalTime");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalIngredients = document.getElementById("modalIngredients");
const modalInstructions = document.getElementById("modalInstructions");
const modalFavoriteBtn = document.getElementById("modalFavoriteBtn");
const modalFavoriteText = document.getElementById("modalFavoriteText");

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

let favorites = JSON.parse(localStorage.getItem("dishshareFavorites")) || [];
let showFavoritesOnly = false;
let activeRecipeId = null;

function saveFavorites() {
    localStorage.setItem("dishshareFavorites", JSON.stringify(favorites));
}

function isFavorite(id) {
    return favorites.includes(id);
}

function toggleFavorite(id) {
    if (isFavorite(id)) {
        favorites = favorites.filter(favId => favId !== id);
    } else {
        favorites.push(id);
    }

    saveFavorites();
    updateFavoritesUI();
    renderRecipes();

    if (activeRecipeId === id) {
        updateModalFavoriteState(id);
    }
}

function updateFavoritesUI() {
    favoritesCount.textContent = favorites.length;
    favoritesToggleText.textContent = showFavoritesOnly ? "Showing Favorites" : "View Favorites";
    favoritesSection.classList.toggle("hidden", !showFavoritesOnly);
}

function getFilteredRecipes() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const level = difficultyFilter.value;

    return recipes.filter(recipe => {
        const matchesSearch =
            recipe.title.toLowerCase().includes(searchTerm) ||
            recipe.description.toLowerCase().includes(searchTerm) ||
            recipe.ingredients.some(item => item.toLowerCase().includes(searchTerm));

        const matchesDifficulty = level === "all" || recipe.difficulty === level;
        const matchesFavorites = !showFavoritesOnly || isFavorite(recipe.id);

        return matchesSearch && matchesDifficulty && matchesFavorites;
    });
}

function createRecipeCard(recipe) {
    const favorited = isFavorite(recipe.id);

    return `
    <article class="group rounded-[1.8rem] bg-white border border-line shadow-soft overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-card">
      <div class="relative">
        <img
          src="${recipe.image}"
          alt="${recipe.title}"
          class="w-full h-64 object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <button
          class="favorite-btn absolute top-4 right-4 w-11 h-11 rounded-full bg-white/95 backdrop-blur border border-[#f1e4d2] shadow-soft flex items-center justify-center transition hover:scale-105"
          data-id="${recipe.id}"
          aria-label="Toggle favorite"
        >
          ${getHeartIcon(favorited)}
        </button>
      </div>

      <div class="p-5 sm:p-6">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="rounded-full bg-[#fff0c7] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-[#8d6b14]">${recipe.difficulty}</span>
          <span class="rounded-full border border-line bg-[#fffdf9] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-[#6d6d6d]">${recipe.prepTime}</span>
        </div>

        <h3 class="mt-4 text-2xl font-black tracking-tight leading-tight">${recipe.title}</h3>
        <p class="mt-3 text-sm text-muted leading-7">${recipe.description}</p>

        <div class="mt-5 flex items-center justify-between gap-3">
          <button
            class="details-btn inline-flex items-center justify-center rounded-full bg-mustard px-5 py-3 text-sm font-bold text-ink hover:bg-[#ddb13f] transition"
            data-id="${recipe.id}"
          >
            View Recipe
          </button>

          <button
            class="favorite-text-btn text-sm font-bold ${favorited ? "text-[#c5762b]" : "text-[#555]"} hover:text-black transition"
            data-id="${recipe.id}"
          >
            ${favorited ? "Saved" : "Save"}
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderRecipes() {
    const filteredRecipes = getFilteredRecipes();

    if (!filteredRecipes.length) {
        recipesGrid.innerHTML = "";
        emptyState.classList.remove("hidden");
        return;
    }

    emptyState.classList.add("hidden");
    recipesGrid.innerHTML = filteredRecipes.map(createRecipeCard).join("");

    bindCardActions();
}

function bindCardActions() {
    document.querySelectorAll(".details-btn").forEach(button => {
        button.addEventListener("click", () => {
            const recipeId = Number(button.dataset.id);
            openModal(recipeId);
        });
    });

    document.querySelectorAll(".favorite-btn, .favorite-text-btn").forEach(button => {
        button.addEventListener("click", (event) => {
            event.stopPropagation();
            const recipeId = Number(button.dataset.id);
            toggleFavorite(recipeId);
        });
    });
}

function getHeartIcon(filled = false) {
    if (filled) {
        return `
      <svg class="w-5 h-5 text-[#e5883d]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A6 6 0 0 1 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"/>
      </svg>
    `;
    }

    return `
    <svg class="w-5 h-5 text-[#6b6b6b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  `;
}

function openModal(recipeId) {
    const recipe = recipes.find(item => item.id === recipeId);
    if (!recipe) return;

    activeRecipeId = recipeId;
    modalImage.src = recipe.image;
    modalImage.alt = recipe.title;
    modalDifficulty.textContent = recipe.difficulty;
    modalTime.textContent = recipe.prepTime;
    modalTitle.textContent = recipe.title;
    modalDescription.textContent = recipe.description;

    modalIngredients.innerHTML = recipe.ingredients
        .map(item => `<li class="flex items-start gap-2"><span class="mt-2 w-2 h-2 rounded-full bg-mustard shrink-0"></span><span>${item}</span></li>`)
        .join("");

    modalInstructions.innerHTML = recipe.instructions
        .map(step => `<li>${step}</li>`)
        .join("");

    updateModalFavoriteState(recipeId);

    recipeModal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");

    requestAnimationFrame(() => {
        modalPanel.classList.remove("scale-95", "opacity-0");
        modalPanel.classList.add("scale-100", "opacity-100");
    });
}

function closeRecipeModal() {
    modalPanel.classList.remove("scale-100", "opacity-100");
    modalPanel.classList.add("scale-95", "opacity-0");

    setTimeout(() => {
        recipeModal.classList.add("hidden");
        document.body.classList.remove("overflow-hidden");
        activeRecipeId = null;
    }, 220);
}

function updateModalFavoriteState(recipeId) {
    const favorited = isFavorite(recipeId);
    modalFavoriteText.textContent = favorited ? "Remove from Favorites" : "Save to Favorites";

    modalFavoriteBtn.innerHTML = `
    <span class="inline-flex items-center gap-2">
      ${favorited
            ? `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A6 6 0 0 1 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"/></svg>`
            : `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`
        }
      <span>${modalFavoriteText.textContent}</span>
    </span>
  `;
}

function toggleFavoritesView(forceState = null) {
    showFavoritesOnly = typeof forceState === "boolean" ? forceState : !showFavoritesOnly;
    updateFavoritesUI();
    renderRecipes();

    if (showFavoritesOnly) {
        document.getElementById("favoritesSection").scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

searchInput.addEventListener("input", renderRecipes);
difficultyFilter.addEventListener("change", renderRecipes);

favoritesToggle.addEventListener("click", () => toggleFavoritesView());
heroFavoritesBtn.addEventListener("click", () => toggleFavoritesView(true));
clearFavoritesView.addEventListener("click", () => toggleFavoritesView(false));

modalBackdrop.addEventListener("click", closeRecipeModal);
closeModal.addEventListener("click", closeRecipeModal);
modalCloseSecondary.addEventListener("click", closeRecipeModal);

modalFavoriteBtn.addEventListener("click", () => {
    if (activeRecipeId !== null) {
        toggleFavorite(activeRecipeId);
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !recipeModal.classList.contains("hidden")) {
        closeRecipeModal();
    }
});

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

updateFavoritesUI();
renderRecipes();