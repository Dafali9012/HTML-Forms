let presentations = new Array()
/*
function onSubmit() {
    $("#form-information").hide()
    presentation = ""
    return false
}
*/
$("#send-button").on("submit", function(e){
    e.preventDefault()
    $("#form-information").hide()
})