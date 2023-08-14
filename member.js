function skillsMember() {
    var skillsMember = document.getElementsByClassName("skillsMember");
    var skillsMemberValue = document.getElementsByClassName("skillsMemberValue");
    var skillsMemberValueWidth = document.getElementsByClassName("skillsMemberValueWidth");
    for (var i = 0; i < skillsMember.length; i++) {
        skillsMemberValueWidth[i].style.width = skillsMemberValue[i].innerHTML;
    }
}