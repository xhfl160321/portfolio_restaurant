(function () {
    //   menu query
    $(".submenu").hide();
    $(".menu > li").hover(
        function () {
            $(this).find(".submenu").stop().slideDown(500);
        },
        function () {
            $(this).find(".submenu").stop().slideUp();
        }
    );

    //   menu 선택 시 해당 class 찾아 메뉴이름과 아이콘 show 쿼리 => 실행 안됨 몰루 ㅅㅄㅂ
    // (1)
    //   var menuBtn = $(".submenu > li");
    //   var menuImgList = $(".menuList > li");

    //   menuImgList.hide().eq(0).show();

    //   menuBtn.click(function(e){
    //     e.preventDefault();

    //     //현재 row값 가져오기
    //     var thisRow = $(this).closest("tr");
    //     console.log(thisRow.html());

    //     //menuIndex 값 가져오기
    //     var menuIndex = thisRow.find("td:eq(0)").find(".submenu li").index();

    //     //menuList 값 가져오기
    //     var menuListIndex = thisRow.find("td:eq(1)").find(".menuList li").index();

    //     alert("menuIndex : "+menuIndex+ " / menuListIndex : "+menuListIndex);
    //   });


    // (2) 메뉴 클릭 이벤트


    $(".imgList ul .chickImg img").css({ "width": "350px", "height": "500px", "margin-top": "-50px" });
    $(".beefrice_menu .topCon p:nth-child(2)").css({ "font-size": "45px", "display": "inline-block", "width": "155%" });
    $(".originalrice_menu .topCon p:nth-child(2)").css({ "font-size": "35px", "display": "inline-block", "width": "100%" });
    $(".imgList ul .originriceImg img").css({ "width": "325px", "height": "325px", "margin-top": "25px", "margin-left": "25px" });

    var menuBtn = $(".submenu li");
    var menuList = $(".menuList > li");
    var menuImgList = $(".imgList ul li");
    var menuIconList = $(".iconList ul li");

    //menuList, menuImgList, menuIconList의 첫번째 li만 show
    menuList.hide().eq(0).show();
    menuImgList.hide().eq(0).show();
    menuIconList.hide().eq(0).show();

    // .submenu 클래스의 li index값 구하고 해당 index에 맞는 클릭 이벤트 
    menuBtn.each(function (index, obj) {
        // console.log(index, obj);
        // var mClassIndex = mClass.index();
        // console.log("mClassIndex: "+mClassIndex);
        var target = $(this);

        target.click(function (e) {
            e.preventDefault();

            // console.log(target.parent().html());
            console.log(index, obj, "!button click!");

            menuBtn.removeClass("active");
            target.addClass("active");
            menuList.hide();
            menuList.eq(index).show();
            menuImgList.hide();
            menuImgList.eq(index).show();
            menuIconList.hide();
            menuIconList.eq(index).show();
        });

    });

    // 75줄에서 33줄로 줄이기 성공~~!!


    //   각각 클릭 => 굴러감
    // $(".main li:nth-child(1)").click(function(){
    //   $(".beef_menu").show();
    //   $(".menuList li:not(.beef_menu)").hide();
    //   $(".iconList ul .beef_icon").show();
    //   $(".iconList ul li:not(.beef_icon)").hide();
    //   $(".imgList ul .beefImg").show();
    //   $(".imgList ul li:not(.beefImg)").hide();
    // });
    // $(".main li:nth-child(2)").click(function(){
    //   $(".chicken_menu").show();
    //   $(".menuList li:not(.chicken_menu)").hide();
    //   $(".iconList ul .chicken_icon").show();
    //   $(".iconList ul li:not(.chicken_icon)").hide();
    //   $(".imgList ul .chickImg").show();
    //   $(".imgList ul .chickImg img").css({"width":"350px", "height":"500px", "margin-top":"-50px"});
    //   $(".imgList ul li:not(.chickImg)").hide();
    // });
    // $(".main li:nth-child(3)").click(function(){
    //   $(".potato_menu").show();
    //   $(".menuList li:not(.potato_menu)").hide();
    //   $(".iconList ul .potato_icon").show();
    //   $(".iconList ul li:not(.potato_icon)").hide();
    //   $(".imgList ul .potatoImg").show();
    //   $(".imgList ul li:not(.potatoImg)").hide();
    // });
    // $(".rice li:nth-child(1)").click(function(){
    //   $(".beefrice_menu").show();
    //   $(".beefrice_menu .topCon p:nth-child(2)").css({"font-size":"45px", "display":"inline-block", "width":"155%"});
    //   $(".menuList li:not(.beefrice_menu)").hide();
    //   $(".iconList ul .beefrice_icon").show();
    //   $(".iconList ul li:not(.beefrice_icon)").hide();
    //   $(".imgList ul .beefriceImg").show();
    //   $(".imgList ul li:not(.beefriceImg)").hide();
    // });
    // $(".rice li:nth-child(2)").click(function(){
    //   $(".originalrice_menu").show();
    //   $(".originalrice_menu .topCon p:nth-child(2)").css({"font-size":"35px", "display":"inline-block", "width":"100%"});
    //   $(".menuList li:not(.originalrice_menu)").hide();
    //   $(".iconList ul .originalrice_icon").show();
    //   $(".iconList ul li:not(.originalrice_icon)").hide();
    //   $(".imgList ul .originriceImg").show();
    //   $(".imgList ul .originriceImg img").css({"width":"325px", "height":"325px", "margin-top":"25px", "margin-left":"25px"});
    //   $(".imgList ul li:not(.originriceImg)").hide();
    // });
    // $(".salad li:nth-child(1)").click(function(){
    //   $(".salad_menu").show();
    //   $(".menuList li:not(.salad_menu)").hide();
    //   $(".iconList ul .salad_icon").show();
    //   $(".iconList ul li:not(.salad_icon)").hide();
    //   $(".imgList ul .saladImg").show();
    //   $(".imgList ul li:not(.saladImg)").hide();
    // });
    // $(".dessert li:nth-child(1)").click(function(){
    //   $(".crepe_menu").show();
    //   $(".menuList li:not(.crepe_menu)").hide();
    //   $(".iconList ul .crepe_icon").show();
    //   $(".iconList ul li:not(.crepe_icon)").hide();
    //   $(".imgList ul .crepeImg").show();
    //   $(".imgList ul li:not(.crepeImg)").hide();
    // });
    // $(".dessert li:nth-child(2)").click(function(){
    //   $(".waffle_menu").show();
    //   $(".menuList li:not(.waffle_menu)").hide();
    //   $(".iconList ul .waffle_icon").show();
    //   $(".iconList ul li:not(.waffle_icon)").hide();
    //   $(".imgList ul .waffleImg").show();
    //   $(".imgList ul li:not(.waffleImg)").hide();
    // });
    // $(".kids li:nth-child(1)").click(function(){
    //   $(".kids_menu").show();
    //   $(".menuList li:not(.kids_menu)").hide();
    //   $(".iconList ul .kids_icon").show();
    //   $(".iconList ul li:not(.kids_icon)").hide();
    //   $(".imgList ul .kidsImg").show();
    //   $(".imgList ul li:not(.kidsImg)").hide();
    // });
})(jQuery);
