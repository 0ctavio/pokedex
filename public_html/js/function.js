function Pokemon(name, image, weight) {
    this.name = name,
    this.image = image,
    this.weight = weight;
}

$("input").keypress(function (e) {
    e.preventDefault;
    if (e.which === 13) {
        index = ($("#callPokemon").val());
        generatePokemon();
        $("input").select();
        $("input").val("");
    };
});

function generatePokemon() {
    if (index <= 721 || "") {
        url = "http://pokeapi.co/api/v2/pokemon/" + index + "/";
        $("ul").append(getUrlPokemon());
    } else {
        alert("Ese pokemon no está en la lista");
    }
}

function getUrlPokemon() {
    $.get("http://pokeapi.co/api/v2/pokemon/" + index + "/", function (data) {
        $(".result").html(data);
        var html = "";
        html += "<ul class='pokemonCard'>\n\
                            <li><h2>" + data.forms[0].name + "</h2></li>\n\
                            <li>Tipo: " + data.types[0].type.name /*+ ", " + data.types[1].type.name*/ + " </li>\n\
                            <li><img src =" + data.sprites.front_default + "></img</li>\n\
                            <li>Peso: " + data.weight + " </li>\n\
                            <li>Altura: " + data.height + " </li>\n\
                       </ul>";
        $(".lista").append(html);
    });
}

//$.get( "http://pokeapi.co/api/v2/pokemon/1/", function( data ) {
//  $( ".result" ).html( data );
//  document.write("El pokemon es " + data.forms[0].name + "\n");
//  document.write(data.sprites.front_default);
//  document.write("Descripción " + data.weight);
//});