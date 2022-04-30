         var input =  document.getElementById("input");
         var demo =  document.getElementById("demo");
         var demo1 =  document.getElementById("demo1");
         var demo2 =  document.getElementById("demo2");
         var value1 = document.getElementById("value1").value;
    
        document.getElementById("btn1").addEventListener("click",  function show() {
            input.style.display = "block";
            demo.style.display = "none";
            demo1.style.display = "none";
            demo2.style.display = "none";
            
        }) ;

        var quantity = value1;
            quantity = Number(quantity);

         function order(quantity) {
             if(quantity !== Number(quantity)) {
                demo.innerHTML = "This is not a valid order, please try again with a number."
             } else {
                var quantity = document.getElementById("value1").value;
                quantity = Number(quantity);
                var price = 2;
                var total1 = quantity*price;
                var tax = (total1)*0.10;
                var total = total1 + tax;

                input.style.display = "none";
                demo.style.display = "block";
                demo.innerHTML = `You have ordered  ${quantity} slices of pizza.`;

                let prices1 = setTimeout(costPerSlice, 2000);
                let bill = setTimeout(totalBill, 4000);
                let fareWell = setTimeout(seeYou, 6000);

                
                function costPerSlice() {
                    demo1.style.display = "block";
                    demo1.innerHTML = `Each slice costs ${price} dollars`;
                }

                function totalBill() {
                    demo2.style.display = "block";
                    demo2.innerHTML = `Your total bill is ${total} dollars, inclusive of taxes.`;
                }

                function seeYou() {
                     alert("THANKS AND COME AGAIN SOON!");
                }
             }
    };








