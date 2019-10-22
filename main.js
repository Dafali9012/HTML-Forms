let presentation = ""
let presentations = new Array()
let user = 000

$("#presentations").hide()

$("#form-information").on("submit", function(e){
    if($("input[type=checkbox]:checked").length == 0) {
        $("input[type=checkbox]").css({
            "box-shadow":"0px 0px 1px 1px red",
            "background-color": "green"
        })
        return false
    } else {
        $("input[type=checkbox]").css({
            "box-shadow":"0px 0px 0px 0px red"
        })
    }

    e.preventDefault()
    $("#form-information").hide()

    user++
    let presentationTemp =
    "Welcome user_"+String(user).padStart(3,"0")+"!\n\n"+
    "You were born in the year "+$("#birth-year").val()+"\n"+
    "and your favorite day of the week is "+$("#favorite-weekday").val()+"\n\n"+
    "You told us this about yourself: \n\""+
    $("#text-about").val()+"\"\n\n"+
    "Your favorite animals are:\n"

    $("input[type=checkbox]:checked").each(function(){
        presentationTemp = presentationTemp.concat(
            this.getAttribute("id")+", "
        )
    })

    presentationTemp = presentationTemp.substr(0, presentationTemp.length-2)

    presentationTemp = presentationTemp.concat(
    "\n"+
    "and your favorite color is "+$("input[name=color-choice]:checked").attr("id")+"."
    )
    

    presentations.push(presentationTemp)
    

    presentation = ""
    for(i = 0; i < presentations.length; i++) {
        presentation = presentation.concat(presentations[presentations.length-1-i]+"\n\n")
    }

    console.log(presentation)

    $("#presentation-text").text(presentation)
    $("#presentations").show()
})

$("#return-button").on("click", function(e){
    $("#presentations").hide()
    document.querySelector("#form-information").reset()
    $("#form-information").show()
})