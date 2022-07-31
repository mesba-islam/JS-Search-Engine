// const search = () => {
//     const searchbox = document.getElementById("search-item").value.toUpperCase();
//     const siteitems = document.getElementById("site-list")
//     const site = document.querySelectorAll("site")
//     const sname = siteitems.getElementsByTagName("h2")

//     for(var i=0; i < sname.length; i++){
//         let match = site[i].getElementsByTagName('a')[0];

//         if(match){
//             let textvalue = match.textContent || match.innerHTML

//             if(textvalue.toUpperCase().indexOf(searchbox) >-1){
//                 site[i].style.display = "";
//             } else{
//                 site[i].style.display = "none";
//             }
//         }
//     }

// }

function search(){
    var input, filter, siteitems,sites, site, a, i, txtValue;

    input = document.getElementById("search-item");
    filter = input.value.toUpperCase();
    siteitems = document.getElementById("site-list");
    sites = document.querySelectorAll(".site");
    // img = document.getElementsByTagName("ïmg");
    site =siteitems.getElementsByTagName("h2");
    


    for(i=0; i < site.length; i++){
        a= site[i].getElementsByTagName("a")[0];
        txtValue = a.textContent||a.innerHtml;
        if(txtValue.toUpperCase().indexOf(filter) > -1){
            sites[i].style.display = "";
        }else{
            sites[i].style.display = "none";
        }
    }
}