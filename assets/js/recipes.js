document.addEventListener("DOMContentLoaded", function() {
    console.log("ok");
    fetch('../assets/recipes.json').then(response => response.json()).then(json => {
        json.recipes.forEach(element => {
            let elementExist =  document.querySelector('.recipes');
            
            if (!elementExist) {
                elementExist =  document.querySelector('.favorites');

                if (element.favorite === false) {
                    return;
                }
            }

            elementExist.insertAdjacentHTML("beforeend",`
                <article class="recipe" data-id-recipe="${element.id}">
                    <div class="container">
                        <a href="#"><img src="../assets/img/${element.image}" alt="${element.name}"></a>
                        <div class="description">
                            <h2>${element.name}</h2>
                            <div class="price"><span>${element.price} €</span></div>
                        </div>
                    </div>
                </article>
            `);
        });
    });
});