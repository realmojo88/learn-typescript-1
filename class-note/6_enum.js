var Shoes;
(function (Shoes) {
    Shoes["Nike"] = "nike";
    Shoes["Adidas"] = "adidas";
})(Shoes || (Shoes = {}));
var myShoes = Shoes.Nike;
console.log(myShoes); // 0
