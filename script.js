$(".pokebutton1").click(function(){
    $(".container").fadeOut();
    $(".pokeh1").fadeOut();
     $(".pokeQ1").fadeIn();
     $(".pokebutton1").hide();
     $(".pokebutton2").fadeIn();
     
     
});

$(".pokebutton2").click(function(){
    $(".pokeQ1").fadeOut();
    $(".pokeQ2").fadeIn();
});
    
$(".pokebutton3").click(function(){
    $(".pokeQ2").fadeOut();
    $(".pokeQ3").fadeIn();
});

$(".pokebutton4").click(function(){
    $(".pokeQ3").fadeOut();
    $(".pokeQ4").fadeIn();
});

$(".pokebutton5").click(function(){
    $(".pokeQ4").fadeOut();

var type = $(".pokeinput1").val();

var gen = $(".pokeinput2").val();

var mega = $(".pokeinput3").val();

var yessir = $(".pokeinput4").val();

if( type === "fire" && gen === "1" && mega === "yes" || mega === "no" && yessir === "yessir"){
    $(".pokeAnswer").show();
}
 else if( type === "grass" && gen === "1" && mega === "yes" || mega === "no" && yessir === "yessir"){
    $(".bulbasaur").show();
}
 else if( type === "water" && gen === "1" && mega === "yes" || mega === "no" && yessir === "yessir"){
    $(".squirtle").show();
} 
 else if( type === "electric" && gen === "1" &&  mega === "yes" || mega === "no" && yessir === "yessir"){
    $(".pikapika").show();
} 
 else if( type === "psychic" && gen === "1" &&  mega === "yes" || mega === "no" && yessir === "yessir"){
    $(".mew2").show();
} 
 else if( type === "grass" && gen === "2" &&  mega === "yes" || mega === "no" && yessir === "yessir"){
    $(".chikorita").show();
} 
 else if( type === "water" && gen === "2" && mega === "yes" || mega === "no" && yessir === "yessir"){
    $(".totodile").show();
} 
else if( type === "fire" && gen === "2" && mega === "yes" || mega === "no" && yessir === "yessir"){
    $(".cyndaquil").show();
}
else if( type === "fire" && gen === "3" && mega === "yes" || mega === "no" && yessir === "yessir"){
    $(".torchic").show();
}
else if( type === "fire" && gen === "3" && mega === "yes" || mega === "no" && yessir === "yessir"){
    $(".treecko").show();
}
else if( type === "fire" && gen === "3" && mega === "yes" || mega === "no" && yessir === "yessir"){
    $(".mudkip").show();
}
else if( type === "fire" && gen === "4" && mega === "yes" || mega === "no" && yessir === "yessir"){
    $(".chimchar").show();
}
else if( type === "water" && gen === "4" && mega === "yes" || mega === "no" && yessir === "yessir"){
    $(".piplup").show();
}
else if( type === "grass" && gen === "4" && mega === "yes" || mega === "no" && yessir === "yessir"){
    $(".turtwig").show();
}
else if( type === "fire" && gen === "5" && mega === "yes" || mega === "no" && yessir === "yessir"){
    $(".tepig").show();
}
else if( type === "water" && gen === "5" && mega === "yes" || mega === "no" && yessir === "yessir"){
    $(".oshawott").show();
}
else if( type === "grass" && gen === "5" && mega === "yes" || mega === "no" && yessir === "yessir"){
    $(".snivy").show();
}
else if( type === "grass" && gen === "6" && mega === "yes" || mega === "no" && yessir === "yessir"){
    $(".chespin").show();
}
else if( type === "fire" && gen === "6" && mega === "yes" || mega === "no" && yessir === "yessir"){
    $(".fennekin").show();
}
else if( type === "water" && gen === "6" && mega === "yes" || mega === "no" && yessir === "yessir"){
    $(".froakie").show();
}
else if( type === "fire" && gen === "7" && mega === "yes" || mega === "no" && yessir === "yessir"){
    $(".litten").show();
}
else if( type === "grass" && gen === "7" && mega === "yes" || mega === "no" && yessir === "yessir"){
    $(".rowlet").show();
}
else if( type === "grass" && gen === "7" && mega === "yes" || mega === "no" && yessir === "yessir"){
    $(".popplio").show();
}
else if( type === "fire" && gen === "8" && mega === "yes" || mega === "no" && yessir === "yessir"){
    $(".scorbunny").show();
}
else if( type === "water" && gen === "8" && mega === "yes" || mega === "no" && yessir === "yessir"){
    $(".sobble").show();
}
else if( type === "grass" && gen === "8" && mega === "yes" || mega === "no" && yessir === "yessir"){
    $(".grookey").show();
}
});