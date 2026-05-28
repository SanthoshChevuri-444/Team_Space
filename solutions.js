const solutionsBtn =
document.getElementById("solutions-btn");

const solutionsMenu =
document.getElementById("solutions-menu");

solutionsBtn.addEventListener("click", function(e){

    e.preventDefault();

    solutionsMenu.classList.toggle("show");

});

/* CLOSE DROPDOWN WHEN CLICKING OUTSIDE */

document.addEventListener("click", function(e){

    if(
        !solutionsBtn.contains(e.target) &&
        !solutionsMenu.contains(e.target)
    ){

        solutionsMenu.classList.remove("show");

    }

});