console.log('jay swaminarayan')

let searchtxt=document.getElementById('searchTxt');
searchtxt.addEventListener("input", function (e) {

    let search=searchtxt.value;
    let post=document.getElementsByClassName('post');
    
    Array.from(post).forEach(function(element) {
        let pera=element.getElementsByTagName("h5")[0].innerText;
        if(pera.includes(search))
        {
            element.style.display = "block";
        }
        else
        {
            element.style.display = "none";
        }
    });

    
});
