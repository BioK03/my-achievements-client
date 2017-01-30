function search(){
    
    $("#searchBarInput").blur(function(){
        console.log("a");

        setTimeout(function(){
            $("searchbar div").css({"display": "none"});
        }, 200);
    });

    $("#searchBarInput").focus(function(){
        console.log("b");

        setTimeout(function(){
            $("searchbar div").css({"display": "block"});
        }, 200);
    });

    console.log("aa");
}
