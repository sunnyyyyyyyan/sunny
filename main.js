var xmlHttp = null;
try {
    xmlHttp = new XMLHttpRequest();
}catch (e){
    try {
        xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
    }catch (e)
    {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    function getpage(serverPage,objId) {
        var obj = document.getElementById(objId);
        xmlHttp.open("GET",serverPage);
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
                obj.innerHTML = xmlHttp.responseText;
            }
        }
        xmlHttp.send(null);
    }
}