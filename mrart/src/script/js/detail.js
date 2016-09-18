$(function () {
	//头部导航栏
	var hnav = document.getElementById("hnav");
	console.log($("#aaa"));

	var liList = hnav.getElementsByTagName("li");
	var navList = document.getElementsByClassName("navList");
	for (var i = 0; i < navList.length; i++) {
		liList[i].index = i;
		if (i == 2) {
			continue;
		}else{
			liList[i].onmouseover = function () {
				navList[this.index].style.display = "block";
				this.style.background = "#fff";
			};
			liList[i].onmouseout = function () {
				navList[this.index].style.display = "none";
				this.style.background = "#f2f2f2";
			};
		}
	}
	//点击购买生成商品
	$("#add").click(function () {
		var pid=$("#pname").attr("code");
		var pimg = $("#pimg").attr("src");
		var pname = $("#pname").html();
		var pprice = $("#pprice").html();
		var pnum = 1;
		var ajaxurl = "http://localhost:8080//product/CreateUpdateProduct_get";
		var ajaxDataJson = {
			src: pimg,
			name: pname,
			price: pprice,
			num: pnum
		};
		var dataStr = JSON.stringify(ajaxDataJson);
		$.ajax({
			url: ajaxurl,
			data: {
				ID: pid,
				datajson: dataStr,
				type: 100
			},
			success: function () {
				$("#shopnum").html(1);
				alert("添加成功");
			},
			dataType: "jsonp"
		});
	})
});