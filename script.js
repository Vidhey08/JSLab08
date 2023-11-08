// Event listener for creating a hamburger
document.getElementById("create-hamburger").addEventListener("click", function() {
    const bun = document.getElementById("bun").value;
    const vegetables = getSelectedCheckboxes("vegetables");
    const cheeses = getSelectedCheckboxes("cheeses");
    const sauces = getSelectedCheckboxes("sauces");
    const meat = document.getElementById("meat").value;
    const patties = document.querySelector('input[name="patties"]:checked').value;
    const toppings = getSelectedCheckboxes("toppings");

    const descriptionElement = document.getElementById("hamburger-description");

    const descriptionParts = [];
    descriptionParts.push(`Delicious ${patties} ${meat} hamburger with ${bun} bun`);

    if (vegetables.length > 0) {
        descriptionParts.push(`topped with ${vegetables.join(', ')}`);
    }

    if (cheeses.length > 0) {
        descriptionParts.push(`and ${cheeses.join(', ')} cheese`);
    }

    if (sauces.length > 0) {
        descriptionParts.push(`drizzled with ${sauces.join(', ')} sauce`);
    }

    if (toppings.length > 0) {
        descriptionParts.push(`and garnished with ${toppings.join(', ')}`);
    }

    const description = descriptionParts.join('. ') + '.';

    descriptionElement.textContent = description;
});

// Helper function to get selected values of checkboxes with a given name
function getSelectedCheckboxes(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    return Array.from(checkboxes).map(checkbox => checkbox.value);
}
