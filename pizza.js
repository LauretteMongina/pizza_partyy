
var price , crustPrice, toppingPrice ;
let total = 0;
function buyPizza( name,size,crust,topping, total ){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}


// submit
$(document).ready(function(){
  $("button.submit").click(function(event){
   var pizzaName = $("#name1 option:selected").val();
   var pizzaSize = $("#size option:selected").val();
   var pizzaCrust = $("#crust option:selected").val();
   var pizzaTopping = [];

   switch(pizzaSize){
    case "0":
      price =0;
    break;
    case "large":
       price = 1200;
       console.log(price);
     break;
     case "medium":
       price = 900;
       console.log(price);
     break;
     case "small":
       price = 600;
       console.log(price);
     default:
       console.log("error"); 
   }
   switch(pizzaCrust){
      case "0":
        crustPrice = 0;
      break;
      case "crispy":
        crustPrice = 100;
      break;
      case "stuffed":
        crustPrice = 150;
      break;
      case "gluten-free":
        crustPrice = 120;
      break;
      default:
        console.log("No price"); 
    }
    var toppingValue = pizzaTopping;
    console.log(toppingValue);

    if((pizzaSize == "0") && (pizzaCrust == "0")){
      console.log("nothing selected");
      $("button.submit").show();
      $("div.choices").show();
      alert("Please select pizza size and crust"); 
    }
    else{
      $("button.submit").hide();
      $("div.choices").slideDown(1000);
    }

    total = price + crustPrice;
    console.log(total);
    var checkoutTotal =0;
    checkoutTotal = checkoutTotal + total;

    $("#pizzaname").html($("#name1 option:selected").val());
    $("#pizzasize").html( $("#size option:selected").val());
    $("#pizzacrust").html($("#crust option:selected").val());
    $("#pizzatopping").html(pizzaTopping.join(", "));
    $("#totals").html(total);
    
// Add pizza backend
    $("button.add").click(function(){
      var pizzaName = $("#name1 option:selected").val();
      var pizzaSize = $("#size option:selected").val();
      var pizzaCrust = $("#crust option:selected").val();
      
      switch(pizzaSize){
        case "0":
          price =0;
        break;
        case "large":
           price = 1200;
           console.log(price);
         break;
         case "medium":
           price = 900;
           console.log(price);
         break;
         case "small":
           price = 600;
           console.log(price);
         default:
           console.log("error"); 
       }
       switch(pizzaCrust){
          case "0":
            crustPrice = 0;
          break;
          case "crispy":
            crustPrice = 100;
          break;
          case "stuffed":
            crustPrice = 150;
          break;
          case "gluten-free":
            crustPrice = 120;
          break;
          default:
            console.log("price"); 
        }
        checkoutTotal = checkoutTotal + total;
        console.log(checkoutTotal);
      var newOrder = new buyPizza(pizzaName, pizzaSize, pizzaCrust,pizzaTopping,total);

      $("#ordersmade").append('<tr><td id="pizzaname">'+newOrder.name +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
      console.log(newOrder);
      
      

    });
    // Checkout front-end
    $("button#checkout").click(function(){ 
      $("button#checkout").hide();
      $("button.add").hide();
      $("button.delivery").slideDown(1000);
      $("#addedprice").slideDown(1000);
      console.log("Your total bills is sh. "+checkoutTotal);
      $("#pizzatotal").append("Your bill is sh. "+checkoutTotal);
    });
// checkout ends
    // delivery frontend
    $("button.delivery").click(function(){
      $(".pizzatable").hide();
      $(".choices h2").hide();
      $(".delivery").slideDown(1000);
      $("#deliveryprice").hide();
      $("button.delivery").hide();
      $("#pizzatotal").hide();
      // backend
      var deliveryAmount= 200;
      console.log("You will pay sh. "+deliveryAmount+"");
      $("#totalbill").append("Your delivery fee is: "+deliveryAmount);
    });

    // order button front-end
    $("button#last-order").click(function(event){
      event.preventDefault();

      $("#pizzatotal").hide();
      $(".delivery").hide();
      $("button#last-order").hide();
      // backend
      var deliveryAmount= 200;
      console.log("Final Bill is: "+deliveryAmount);
      var person = $("input#name").val();
      var phone = $("input#phone").val();
      var location = $("input#location").val();
      var deliveryCash = checkoutTotal + deliveryAmount
      if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
        $("#message").append(person+", We have recieved your order and it will be delivered to you at "+location+ ". Total bill sh. "+deliveryCash);
        $("#totalbill").hide();
        $("#message").slideDown(1000);
      }
      else {
        alert("Fill in the delivery details!");
        $(".delivery").show();
        $("button#last-order").show();
      }
    });
   event.preventDefault();
  });
});
