console.log($("#title"));

console.log($(".msg"))

$("#title").text("Welcome Students")
$("#title").text()

// $("#title").css("color","red")

$("#title").css({color:"red",
    background : "yellow",
    fontSize :"50px"
})

//add classes
// $(".msg").addClass("active");

// //remove class
// $(".msg").removeClass("active"); 

//toggle class
$(".msg").toggleClass("active");

//event listener

$("#btn").click(function(){
    alert("button was clicked")
})

$("#box").hover(
    function(){
        console.log("Enter")
    },

    function(){
        console.log("Leave")
    }
)

// $("#name").val("Gaurav")

$("#bt").click(function(){
    let name = $("#name").val();
    $("#output").text(name);
    $("#name").val("");
})

// $("p").hide();

$("p").fadeOut()