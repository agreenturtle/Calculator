var Service = {
  sendPostRequest: function(httpObj){
    var http = new XMLHttpRequest();
    var params = "name=" + httpObj.name + "&email="+ httpObj.email + "&message=" + encodeURI(httpObj.message);
    var url = "/sendmail";
    http.open("POST",url,true);

    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
        }
    }
    http.send(params);
  }
}

module.exports = Service