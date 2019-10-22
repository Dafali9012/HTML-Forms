let presentations = new Array()
let user = 000

$("#presentations").hide()

$("#form-information").on("submit", function(e){
    if($("input[type=checkbox]:checked").length == 0) {
        return false
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
    
    oldPresentations = ""
    for(i = 1; i < presentations.length; i++) {
        oldPresentations = oldPresentations.concat(presentations[presentations.length-1-i]+"\n\n")
    }

    $("#presentation-text-latest").text(presentations[presentations.length-1])
    $("#presentation-text").text(oldPresentations)
    $("#presentations").show()
})

$("#send-button").on("click", function(e){
    if($("input[type=checkbox]:checked").length == 0) {
        $("input[type=checkbox]").css({
            "box-shadow":"0px 0px 1px 1px red",
        })
    } else {
        $("input[type=checkbox]").css({
            "box-shadow":"0px 0px 0px 0px red"
        })
    }
})

$("input[type=checkbox]").on("click", function(e){
    if($("input[type=checkbox]:checked").length == 0) {
        $("input[type=checkbox]").css({
            "box-shadow":"0px 0px 1px 1px red",
        })
    } else {
        $("input[type=checkbox]").css({
            "box-shadow":"0px 0px 0px 0px red"
        })
    }
})

$("#return-button").on("click", function(e){
    $("#presentations").hide()
    document.querySelector("#form-information").reset()
    $("#form-information").show()
})