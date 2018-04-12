function setNurseCookie(){
  document.cookie = "role=nurse";
}

function setPatientCookie(){
  document.cookie = "role=patient";
}

function getCookie(name)
  {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
  }