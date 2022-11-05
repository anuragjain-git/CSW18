console.log($("h1").css("font-size"));

$(".btn1").click(function(){
    $("h1").removeClass("btn-small");
    $("h1").addClass("btn-huge");
});

$(".btn2").click(function(){
    $("h1").removeClass("btn-huge");
    $("h1").addClass("btn-small");
});

$(document).keypress(function(event){
    $("h2").text(event.key);
});

$("p").before("<button>before</button>");
$("p").after("<button>after</button>");
$("p").prepend("<button>prepend</button>");
$("p").append("<button>append</button>");