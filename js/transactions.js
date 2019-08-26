$(document).ready(function() {
  

    $.get("/api/user_data").then(function(data) {
        $(".member-name").text(data.id);
      });
  


 $(".submit-request").on("click", function (e) {
    e.preventDefault();
    $.get("/api/user_data").then(function(data) {
      var id = data.id;
      var amount = $("#amount").val().trim();
      var voucherNum = $("#voucherNum").val().trim();
      console.log(amount);
      axios.post("/auth/transactions", {
          userId: id, 
          amount: amount, 
          voucherNum: voucherNum
      })
          .then(function (resp) {
              console.log(resp);
              window.setTimeout(function () {
                  window.location.assign("/transactions")
              }, 2000)
          })
          .catch(function (err) {
              console.error(err);
          })
    });
    
    
})

function getPending () {
  $.get("/api/transactions").then(function(data){
    for (var i=0; i<data.length; i++) {
      var div = $("div"); 
      var p = $("<p>");
      p=data.id;
      div.append(p);
    }
    $(".amt").text(data.userId);
  });
    }
 //getPending();
          
// $.get("/api/transactions").then(function(data) {
//   $("amt").text(data.id);
// });  

  function pendingPost(id, amount, voucherNum) {
      $.post("/api/transactions", {
          userId: id,
          amount: amount,
          voucherNum: voucherNum
      }).then(function(data) {
        window.location.replace(data);
        // If there's an error, handle it by throwing up a bootstrap alert
      }).catch(handleLoginErr);
    }
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  
  
  });