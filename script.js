const run = (a) = {
    let filter = document.getElementById('search').value.toUpperCase();
    let mytable = document.getElementById('table');
    let tr = mytable.getElementByTagName('tr');
    for(var i=0; i<tr.length; i++){
        let td= tr[i].getElementByTagName('td')[0];
        if(td){
            let text = td.textContent || td.innerHTML;
            if(text.toUpperCase().indexOf(filter)> -1){
                tr[i].style.display= "";
            }
            else{
                tr[i].style.display= "none";
            }
        }
        else{
            console.log("Err");
        }
    }
} 