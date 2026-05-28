const solutionsBtn = document.querySelector(".dropdown2 a");

const solutionsMenu = document.getElementById("solutions-menu");

solutionsBtn.addEventListener("click", function(e){

    e.preventDefault();

    solutionsMenu.classList.toggle("show");

});

document.addEventListener("click", function(e){

    if(
        !solutionsBtn.contains(e.target) &&
        !solutionsMenu.contains(e.target)
    ){
        solutionsMenu.classList.remove("show");
    }

});