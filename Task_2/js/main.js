
var raw = localStorage.getItem("tags");
var tags = JSON.parse(raw);
var nodes = document.getElementsByClassName('inner-category');

console.log(nodes.length);

nodes[0].innerHTML += "<div class='block-category'></div>";
for(let i = 0; i != tags.length;i++){
    nodes[0].innerHTML += "<div class='block-category'><div class='category-element'>"+
                                        "<div class='block-category-img'><img src='" + tags[i].img + "' onclick=\"searchByTag('" + tags[i].name +"')\"></div>" +
                                        "<p>" + tags[i].name + "</p>"+
                                        "</div> </div>";
}
nodes[0].innerHTML += "<div class='block-category'></div>"

console.log(tags[0]);

var certificates = JSON.parse(localStorage.getItem("certificates"));
addCertificates(0,10,certificates);

function addCertificates(start,end,certificates){

var certificateBody = document.getElementsByClassName("certificates")[0];
var inner ="<div class=\"coupon-line\">";
for(let i = start;i != end;i++){
    inner+="<div class=\"coupon-element\">"+
                            "<div>"+
                            " <span class=\"img-span\">"+
                            " <img class=\"coupon-img\" src=\""+certificates[i].image+"\">"+
                            "</span>"+
                            "</div>"+
                            "<div class=\"cupon-container\">"+
                            "<p class=\"left\">"+
                            "<b><a href=\"item-details.html\">"+certificates[i].name+"</a></b>"+
                            "</p>"+
                            "<div class=\"right\"><span class=\"material-icons\">favorite</span></div>"+
                            "</div>"+
                            "<div class=\"cupon-container\">"+
                            "<p class=\"left\">"+certificates[i].description.substring(0,50)+"..."+"</p>"+
                            "<p class=\"right gray-color\">"+certificates[i].days+" days</p>"+
                            "</div>"+
                            "<div class=\"cupon-container\">"+
                            "<p class=\"left\"><span>$"+certificates[i].price+"</span></p>"+
                            "<button class=\"add-to-cart-button\">Add to Cart</button>"+
                            "</div>"+
                            "</div>";
    if ((i+1)%5==0){
        console.log("index-repeat:"+i);
        inner+="</div>";
        inner+="<div class=\"coupon-line\">";
    }
}
certificateBody.innerHTML+=inner;
}

var handleScroll = 10;


document.addEventListener("scroll", _.debounce(scrollFunction, 250));

function scrollFunction(){
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
        console.log("Bottom!");
        var certificates = JSON.parse(localStorage.getItem("certificates"));
        addCertificates(handleScroll,handleScroll+10,certificates);
        console.log("Start:"+handleScroll+" end:"+(handleScroll+10));
        handleScroll+=10;
    }
}

var filterName = "";
var filterDescription = "";

function change(element){
    let filter = document.getElementById("select").value;

    if(filter == "name"){
        filterName = element.value;
    }
    if(filter == "description"){
        filterDescription = element.value;
    }

    var filterCertificates = JSON.parse(localStorage.getItem("certificates"));
    document.getElementsByClassName("certificates")[0].innerHTML = "";

    var array = [];

    for(let i = 0; i!= filterCertificates.length;i++){
        console.log(filterCertificates[i].name);
        if((filterCertificates[i].name.toLowerCase().includes(filterName.toLowerCase()) || filterName === "") && 
        (filterCertificates[i].description.toLowerCase().includes(filterDescription.toLowerCase()) || filterDescription === "")){
            console.log("ADD NEW CERTIFICATE!")
            array.push(filterCertificates[i]);
        }
    }
    addCertificates(0,array.length,array);
    console.log(array);

    console.log(element.value);
    console.log(filter);
}

function searchByTag(name){
    console.log(name);
    var filterCertificates = JSON.parse(localStorage.getItem("certificates"));
    document.getElementsByClassName("certificates")[0].innerHTML = "";
    var array = [];

    for(let i = 0; i!= filterCertificates.length;i++){
        if(filterCertificates[i].tags.includes(name)){
            console.log("ADD NEW CERTIFICATE!")
            array.push(filterCertificates[i]);
        }
    }
    addCertificates(0,array.length,array);
}

