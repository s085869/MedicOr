function setPatientCookie(){
  document.cookie = "role=patient";
  window.location.replace("index.html");
}

function setNurseCookie(){
  document.cookie = "role=nurse";
  window.location.replace("index.html");
}

function setDoctorCookie(){
  document.cookie = "role=doctor";
  window.location.replace("index.html");
}

function getCookie(name)
  {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
  }

function loadContent(){
  console.log("." + getCookie("role"))
  $("." + getCookie("role")).show();

  /*var role = getCookie("role");
  var elements = document.getElementsByClassName(role);
  var i;
  for (i = 0; i < elements.length; i++) {
    elements[i].show();
  }*/
}