document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const suggestionsContainer = document.getElementById("suggestions-container");

    // Sample array of suggestions
    const suggestions = ["United Kingdom", "United States", "Canada"];

    searchInput.addEventListener("input", function() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().includes(searchTerm));
        displaySuggestions(filteredSuggestions);
    });

    searchButton.addEventListener("click", function() {
        const searchTerm = searchInput.value.toLowerCase();
        // You can add more specific logic here to handle the search term if needed

        // Redirect to map.html
        window.location.href = "map.html";
    });

    function displaySuggestions(suggestions) {
        suggestionsContainer.innerHTML = "";
        suggestions.forEach(suggestion => {
            const suggestionElement = document.createElement("div");
            suggestionElement.classList.add("suggestion-item");
            suggestionElement.innerText = suggestion;
            suggestionElement.addEventListener("click", function() {
                searchInput.value = suggestion;
                suggestionsContainer.innerHTML = "";
            });
            suggestionsContainer.appendChild(suggestionElement);
        });
    }
});
