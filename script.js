async function getAllPlants() {
  const url = "https://openapi.programming-hero.com/api/plants";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
async function getAllCategories() {
    const url = "https://openapi.programming-hero.com/api/categories";
      try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }

}
async function displayAllPlants() {
  const data = await getAllPlants();
  const plantsData = data.plants;
  for (plantData of plantsData) {
    console.log(plantData)
    const cardHtml = `
    <div class="card bg-white w-65  shadow-sm rounded-[9px] flex flex-col gap-1">
        <div class=" px-5 pt-5 h-[200px]">
          <img src=${plantData.image} class="rounded-xl w-full h-full object-cover" />
        </div>
        <div class="card-body flex flex-col gap-1">
          <h2 class="card-title font-semibold">${plantData.name}</h2>
          <p>
            ${plantData.description}
          </p>
          <button
            class="btn bg-[#DCFCE7] text-[#15803D] w-fit h-5 rounded-[999px] px-2"
          >
            ${plantData.category}
          </button>

          <div class="card-actions">
            <button
              class="btn btn-primary text-white bg-[#15803D] w-full rounded-[999px]"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;
    const cardContainer = document.getElementById("card-container");

    cardContainer.innerHTML+=cardHtml;
  }
}

async function displayAllCategories() {
    
    const data = await getAllCategories();
    //const categoriesData = data.plants;
    //console.log("Categories Data: ", data);
    const categoriesList = data.categories;
    const categoryContainer=document.getElementById("category-container");
    for (category of categoriesList) {
        const categoryHtml= `<li class="hover:bg-[#15803D] active:bg-[#15803D]  hover:text-white rounded-[5px]"><a>${category.category_name}</a></li>`;
        console.log("Categories Data: ", category);
        categoryContainer.innerHTML=categoryContainer.innerHTML+categoryHtml;
    
    }
}

async function main() {
  displayAllCategories();
  displayAllPlants();
}
main();
