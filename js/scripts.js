$(document).ready(function(){
    $("#reserveButton").click(function(){
      $("#reserveModal").modal('show');
    });
  });

$(document).ready(function(){
    $("#loginButton").click(function(){
      $("#loginModal").modal('show');
    });
  });
      $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });
    $(document).ready(function(){
        $("#mycarousel").carousel( { interval: 2000 } );
        $("#carousel-pause").click(function(){
            $("#mycarousel").carousel('pause');
        });
        $("#carousel-play").click(function(){
            $("#mycarousel").carousel('cycle');
        });
    });
//children() dùng để lấy các phần tử con của mỗi phần tử trong tập hợp các phần tử phù hợp. 
//hasClass(): Xác định thành phần có chứa class nhất định nào đó hay không 
    $("#carouselButton").click(function(){
            $("#mycarousel").carousel( { interval: 2000 } );
            if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                $("#mycarousel").carousel('pause');
                $("#carouselButton").children("span").removeClass('fa-pause');
                $("#carouselButton").children("span").addClass('fa-play');
            }
            else if ($("#carouselButton").children("span").hasClass('fa-play')){
                $("#mycarousel").carousel('cycle');
                $("#carouselButton").children("span").removeClass('fa-play');
                $("#carouselButton").children("span").addClass('fa-pause');                    
            }
});