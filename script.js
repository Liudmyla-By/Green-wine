function findYourWine() {
    let kind = prompt("What kind of wine do you prefer?");
    kind = kind.toLowerCase().trim();
    let pet = prompt("Do you love cats or dogs?");
    pet = pet.toLowerCase().trim();
    let answer = document.querySelector(".about-wine");

    if (kind === "rose" & pet === "cats" || kind === "rose" & pet === "cat") {
        answer.innerHTML = "You need the Vinho Verde Rosé 🌸. <br /> It reveals a slightly pink or intense color, young, fresh aromas, reminiscent of red fruits. The taste is harmonious, fresh and persistent.";
    }
    else {
        if (kind === "red" & pet === "cat" || kind === "red" & pet === "cats") {
            answer.innerHTML = "There is the Red 🍷 <br /> Vinhos Verde for you, that has an intense red color and, sometimes, pink or bright red foam and vinous aroma, with emphasis on wild fruits. In the mouth they are fresh and intense, very gastronomic.";
        }
        else {
            if (pet === "dogs" || pet === "dog") {
                answer.innerHTML = "YOU OBVIOUSLY NEED TO LOVE CATS <br /> and try every kind of Green wine😼";
            }
            else {

                if (kind === "white" & pet === "cats" || kind === "white" & pet === "cat") {
                    answer.innerHTML = "You need the Young 😎 White Vinho Verde. <br />  It has a citrus or straw color with rich, fruity and floral aromas, depending on the grape varieties that give rise to them. In the mouth they are harmonious, intense and reveal great freshness.";
                }
                else {
                    answer.innerHTML = "All you need is love, WHITE green wine and lovely cat 😸. <br />  White wines have a citrus or straw color with rich, fruity and floral aromas, depending on the grape varieties that give rise to them. In the mouth they are harmonious, intense and reveal great freshness.";
                }
            }
        }
    }
}
let findYourWinebutton = document.querySelector("button");

findYourWinebutton.addEventListener("click", findYourWine); 