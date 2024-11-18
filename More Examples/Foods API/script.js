function fetchRandomMeal() {
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php';

    fetch(url)
      .then(response => response.json()) // Parse the JSON response
      .then(data => {
        const meal = data.meals[0]; // Extract meal data from the API response

        // Update the meal container with fetched meal details
        const mealContainer = document.querySelector('#meal-container');
        mealContainer.innerHTML = `
          <div class="meal-info">
            <h2>${meal.strMeal}</h2>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <p><strong>Category:</strong> ${meal.strCategory}</p>
            <p><strong>Area:</strong> ${meal.strArea}</p>
            <p><strong>Tags:</strong> ${meal.strTags}</p>
          </div>
          <div class="ingredients">
            <p><strong>Ingredients:</strong></p>
            <ul>
              ${getIngredients(meal)}
            </ul>
          </div>
          <div class="instructions">
            <p><strong>Instructions:</strong></p>
            <p>${meal.strInstructions}</p>
            <p><strong>Source:</strong> <a href="${meal.strSource}" class="link" target="_blank">Recipe Source</a></p>
            <p><strong>Watch on YouTube:</strong> <a href="${meal.strYoutube}" class="link" target="_blank">Video Link</a></p>
          </div>
        `;
      })
      .catch(error => {
        console.error('Error:', error);
        document.querySelector('#meal-container').innerHTML = '<p>Error fetching the recipe.</p>';
      });
  }

  function getIngredients(meal) {
    let ingredientsHtml = '';
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== '') {
        ingredientsHtml += `<li>${measure} ${ingredient}</li>`;
      }
    }
    return ingredientsHtml;
  }