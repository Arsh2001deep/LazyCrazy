
function google(){
    let valuep=document.getElementById("query").value;
    let a="https://www.google.com/search?q="
    window.location.href = a+valuep;
}
function brave(){
    let valuep=document.getElementById("query").value;
    let a="https://search.brave.com/search?q="
    window.location.href = a+valuep;
}
function youtube(){
    let valuep=document.getElementById("query").value;
    let a="https://www.youtube.com/results?search_query="
    window.location.href = a+valuep;
}

function bing(){
    let valuep=document.getElementById("query").value;
    let a="https://www.bing.com/search?q="
    window.location.href = a+valuep;
}