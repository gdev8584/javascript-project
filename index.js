const searchBar = document.getElementById("searchbar");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
searchInput.style.width="0";
searchInput.style.display="none";
searchBtn.addEventListener("click",function(){
    searchInput.style.display="block";
    searchBar.style.width="400px";
    searchInput.style.width="300px";
    searchInput.style.height="100px";
    searchInput.focus();
})