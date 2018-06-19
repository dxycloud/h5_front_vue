$(function() {
	var relistToA = [];
	var loanlistInitArr = [];

	getloanList();
});

function getloanList() {
	var args = {};
	args.osType = 1;
	args.sign = doMd5(args.osType)
	var url = 'http://120.55.41.42:80/daikuaiqian/api/v1/loan/loanList';
	$.post(url, args, function(data, status) {
		loanlistInitArr = data.data;
		relistToA = data.data;
		console.log(loanlistInitArr);

		if(data.code == 1) {

			var str = '';
			$.each(loanlistInitArr, function(key, value) {

				//console.log(value)
				//console.log(key)

				str += '<li class="clearfix">' +
					'<a href="' + loanlistInitArr[key].linkUrl + '">' +
					'<img src="' + loanlistInitArr[key].loanIconUrl + '" class="loan l">' +
					'<div class="l loanbox">' +
					'<h3>' + loanlistInitArr[key].loanName + '<em class="label">' + loanlistInitArr[key].label + '</em></h3>' +
					'<p class="msgp">' + loanlistInitArr[key].desc + '<img src="img/listback.png" class="r listback"></p>' +
					'<p class="clearfix nump"><span class="l">额度范围：<b>' + loanlistInitArr[key].minAmount + '-' + loanlistInitArr[key].maxAmount + '</b></span><span class="r"><b>' + loanlistInitArr[key].successCount + '</b>人成功申请</span></p>' +
					'</div>';
					
				if (loanlistInitArr[key].recommendTag == "人气必选") {
					str += '<i class="icon icon1">' + loanlistInitArr[key].recommendTag + '</i></a></li>';
				} else if (loanlistInitArr[key].recommendTag == "刷脸必借") {
					str += '<i class="icon icon2">' + loanlistInitArr[key].recommendTag + '</i></a></li>';
				} else if (loanlistInitArr[key].recommendTag == "下款光速") {
					str += '<i class="icon icon3">' + loanlistInitArr[key].recommendTag + '</i></a></li>';
				} else if (loanlistInitArr[key].recommendTag == "不查征信") {
					str += '<i class="icon icon4">' + loanlistInitArr[key].recommendTag + '</i></a></li>';
				} else if (loanlistInitArr[key].recommendTag == "注册送券") {
					str += '<i class="icon icon5">' + loanlistInitArr[key].recommendTag + '</i></a></li>';
				} else {
					str += '<i class="icon icon1">' + loanlistInitArr[key].recommendTag + '</i></a></li>';
				};
			})
			$('.loanlist').html(str);
			Isempty();

		}
	})
}
//字段为空的时候
function Isempty() {
	$('li').each(function() {
		//console.log(loanlist[key])
		if($(this).find("i").text() == "") {
			$(this).find("i").hide();
		}
		if($(this).find(".label").text() == "") {
			$(this).find(".label").hide();
		}
	})
}

function changesreid(val) { ///筛选
	
	// var relist = [];
	// if(val == 0) { //全部

	// 	for(var i = 0; i < loanlistInitArr.length; i++) {
	// 		relist.push(loanlistInitArr[i]);
	// 	}

	// 	console.log(relist);
	// 	$('.loanlist').html("");
	// 	var str = "";
	// 	changesortid(val); //排序函数
	// 	$.each(relist, function(key, value) {
	// 		str += '<li class="clearfix">' +
	// 			'<a href="' + relist[key].linkUrl + '">' +
	// 			'<img src="img/loan.png" class="loan l">' +
	// 			'<div class="l loanbox">' +
	// 			'<h3>' + relist[key].loanName + '<em class="label">' + relist[key].label + '</em></h3>' +
	// 			'<p class="msgp">' + relist[key].desc + '<img src="img/listback.png" class="r listback"></p>' +
	// 			'<p class="clearfix nump"><span class="l">额度范围：<b>' + relist[key].minAmount + '-' + relist[key].maxAmount + '</b></span><span class="r"><b>' + relist[key].successCount + '</b>人成功申请</span></p>' +
	// 			'</div>' +
	// 			'<i class="icon icon1">' + relist[key].recommendTag + '</i>' +
	// 			'</a>' +
	// 			'</li>'

	// 	})
	// 	relistToA = relist;
	// 	$('.loanlist').html(str);
		
	// 	Isempty();
	// 	console.log(loanlistInitArr);
	// 	//console.log(loanlist);
	// }else if(val == 1) { //筛选小额 极速贷

	// 	for(var i = 0; i < loanlistInitArr.length; i++) {
	// 		if(loanlistInitArr[i].loanType == 1) {
	// 			relist.push(loanlistInitArr[i]);
	// 		}
	// 	}

	// 	console.log(relist);
	// 	$('.loanlist').html("");
	// 	var str = "";
	// 	changesortid(val); //排序函数
	// 	$.each(relist, function(key, value) {
	// 		str += '<li class="clearfix">' +
	// 			'<a href="' + relist[key].linkUrl + '">' +
	// 			'<img src="img/loan.png" class="loan l">' +
	// 			'<div class="l loanbox">' +
	// 			'<h3>' + relist[key].loanName + '<em class="label">' + relist[key].label + '</em></h3>' +
	// 			'<p class="msgp">' + relist[key].desc + '<img src="img/listback.png" class="r listback"></p>' +
	// 			'<p class="clearfix nump"><span class="l">额度范围：<b>' + relist[key].minAmount + '-' + relist[key].maxAmount + '</b></span><span class="r"><b>' + relist[key].successCount + '</b>人成功申请</span></p>' +
	// 			'</div>' +
	// 			'<i class="icon icon1">' + relist[key].recommendTag + '</i>' +
	// 			'</a>' +
	// 			'</li>'

	// 	})
	// 	relistToA = relist;
	// 	$('.loanlist').html(str);
		
	// 	Isempty();
	// 	console.log(loanlistInitArr);
	// 	//console.log(loanlist);
	// } else if(val == 2) { //筛选大额
		
	// 	for(var i = 0; i < loanlistInitArr.length; i++) {
	// 		if(loanlistInitArr[i].loanType == 2) {
	// 			relist.push(loanlistInitArr[i]);
	// 		}
	// 	}

	// 	console.log(relist);
	// 	$('.loanlist').html("");
	// 	var str = "";
	// 	changesortid(val); //排序函数
	// 	$.each(relist, function(key, value) {
	// 		str += '<li class="clearfix">' +
	// 			'<a href="' + relist[key].linkUrl + '">' +
	// 			'<img src="img/loan.png" class="loan l">' +
	// 			'<div class="l loanbox">' +
	// 			'<h3>' + relist[key].loanName + '<em class="label">' + relist[key].label + '</em></h3>' +
	// 			'<p class="msgp">' + relist[key].desc + '<img src="img/listback.png" class="r listback"></p>' +
	// 			'<p class="clearfix nump"><span class="l">额度范围：<b>' + relist[key].minAmount + '-' + relist[key].maxAmount + '</b></span><span class="r"><b>' + relist[key].successCount + '</b>人成功申请</span></p>' +
	// 			'</div>' +
	// 			'<i class="icon icon1">' + relist[key].recommendTag + '</i>' +
	// 			'</a>' +
	// 			'</li>'

	// 	})
	// 	relistToA = relist;
	// 	$('.loanlist').html(str);
		
	// 	Isempty();
	// 	//console.log(loanlistInitArr);
	// }

		$('.loanlist').html("");
		var str = "";
		var sortValue=$(".resortSel").val();
		changesortid(sortValue); //排序函数
		$.each(relistToA, function(key, value) {
			str += '<li class="clearfix">' +
				'<a href="' + relistToA[key].linkUrl + '">' +
				'<img src="' + relistToA[key].loanIconUrl + '" class="loan l">' +
				'<div class="l loanbox">' +
				'<h3>' + relistToA[key].loanName + '<em class="label">' + relistToA[key].label + '</em></h3>' +
				'<p class="msgp">' + relistToA[key].desc + '<img src="img/listback.png" class="r listback"></p>' +
				'<p class="clearfix nump"><span class="l">额度范围：<b>' + relistToA[key].minAmount + '-' + relistToA[key].maxAmount + '</b></span><span class="r"><b>' + relistToA[key].successCount + '</b>人成功申请</span></p>' +
				'</div>';
					
				if (relistToA[key].recommendTag == "人气必选") {
					str += '<i class="icon icon1">' + relistToA[key].recommendTag + '</i></a></li>';
				} else if (relistToA[key].recommendTag == "刷脸必借") {
					str += '<i class="icon icon2">' + relistToA[key].recommendTag + '</i></a></li>';
				} else if (relistToA[key].recommendTag == "下款光速") {
					str += '<i class="icon icon3">' + relistToA[key].recommendTag + '</i></a></li>';
				} else if (relistToA[key].recommendTag == "不查征信") {
					str += '<i class="icon icon4">' + relistToA[key].recommendTag + '</i></a></li>';
				} else if (relistToA[key].recommendTag == "注册送券") {
					str += '<i class="icon icon5">' + relistToA[key].recommendTag + '</i></a></li>';
				} else {
					str += '<i class="icon icon1">' + relistToA[key].recommendTag + '</i></a></li>';
				};

		})
		// relistToA = relist;
		$('.loanlist').html(str);
		
		Isempty();
		console.log(loanlistInitArr);

}

function changesortid(val) { // 排序
	console.log(loanlistInitArr);
	console.log(relistToA);

	relistToA =[];
	var typeValue=$(".typeSel").val();
	if (typeValue == 0) {
		for(var i = 0; i < loanlistInitArr.length; i++) {
			relistToA.push(loanlistInitArr[i]);
		}

	} else if (typeValue == 1) {
		for(var i = 0; i < loanlistInitArr.length; i++) {
			if(loanlistInitArr[i].loanType == 1) {
				relistToA.push(loanlistInitArr[i]);
			}
		}
	} else {
		for(var i = 0; i < loanlistInitArr.length; i++) {
			if(loanlistInitArr[i].loanType == 2) {
				relistToA.push(loanlistInitArr[i]);
			}
		}
	}
	
	if(val == 0) { //小额放款   推荐排序
		$('.loanlist').html("");
      
		// relistToA.sort(function(a, b) {
		// 	return a.loanId - b.loanId
		// });

		var str = "";
		$.each(relistToA, function(key, value) {
			str += '<li class="clearfix">' +
				'<a href="' + relistToA[key].linkUrl + '">' +
				'<img src="' + relistToA[key].loanIconUrl + '" class="loan l">' +
				'<div class="l loanbox">' +
				'<h3>' + relistToA[key].loanName + '<em class="label">' + relistToA[key].label + '</em></h3>' +
				'<p class="msgp">' + relistToA[key].desc + '<img src="img/listback.png" class="r listback"></p>' +
				'<p class="clearfix nump"><span class="l">额度范围：<b>' + relistToA[key].minAmount + '-' + relistToA[key].maxAmount + '</b></span><span class="r"><b>' + relistToA[key].successCount + '</b>人成功申请</span></p>' +
				'</div>';
					
				if (relistToA[key].recommendTag == "人气必选") {
					str += '<i class="icon icon1">' + relistToA[key].recommendTag + '</i></a></li>';
				} else if (relistToA[key].recommendTag == "刷脸必借") {
					str += '<i class="icon icon2">' + relistToA[key].recommendTag + '</i></a></li>';
				} else if (relistToA[key].recommendTag == "下款光速") {
					str += '<i class="icon icon3">' + relistToA[key].recommendTag + '</i></a></li>';
				} else if (relistToA[key].recommendTag == "不查征信") {
					str += '<i class="icon icon4">' + relistToA[key].recommendTag + '</i></a></li>';
				} else if (relistToA[key].recommendTag == "注册送券") {
					str += '<i class="icon icon5">' + relistToA[key].recommendTag + '</i></a></li>';
				} else {
					str += '<i class="icon icon1">' + relistToA[key].recommendTag + '</i></a></li>';
				};

		})

		$('.loanlist').html(str);
		Isempty();
	} else if(val == 1) { //小额放款人数最多
		$('.loanlist').html("");
		relistToA.sort(function(a, b) {
			var val1 = a.successCount;
	        var val2 = b.successCount;
	        if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
	            val1 = Number(val1);
	            val2 = Number(val2);
	        }
	        if (val1 < val2) {
	            return 1;
	        } else if (val1 > val2) {
	            return -1;
	        } else {
	            return 0;
	        }

			// return b.successCount - a.successCount
		});
		var str = "";
		$.each(relistToA, function(key, value) {
			str += '<li class="clearfix">' +
				'<a href="' + relistToA[key].linkUrl + '">' +
				'<img src="' + relistToA[key].loanIconUrl + '" class="loan l">' +
				'<div class="l loanbox">' +
				'<h3>' + relistToA[key].loanName + '<em class="label">' + relistToA[key].label + '</em></h3>' +
				'<p class="msgp">' + relistToA[key].desc + '<img src="img/listback.png" class="r listback"></p>' +
				'<p class="clearfix nump"><span class="l">额度范围：<b>' + relistToA[key].minAmount + '-' + relistToA[key].maxAmount + '</b></span><span class="r"><b>' + relistToA[key].successCount + '</b>人成功申请</span></p>' +
				'</div>';
					
				if (relistToA[key].recommendTag == "人气必选") {
					str += '<i class="icon icon1">' + relistToA[key].recommendTag + '</i></a></li>';
				} else if (relistToA[key].recommendTag == "刷脸必借") {
					str += '<i class="icon icon2">' + relistToA[key].recommendTag + '</i></a></li>';
				} else if (relistToA[key].recommendTag == "下款光速") {
					str += '<i class="icon icon3">' + relistToA[key].recommendTag + '</i></a></li>';
				} else if (relistToA[key].recommendTag == "不查征信") {
					str += '<i class="icon icon4">' + relistToA[key].recommendTag + '</i></a></li>';
				} else if (relistToA[key].recommendTag == "注册送券") {
					str += '<i class="icon icon5">' + relistToA[key].recommendTag + '</i></a></li>';
				} else {
					str += '<i class="icon icon1">' + relistToA[key].recommendTag + '</i></a></li>';
				};

		})

		$('.loanlist').html(str);
		//changesreid(val);
		Isempty();
	} else if(val == 2) { //小额放款速度最快的
		$('.loanlist').html("");
		relistToA.sort(function(a, b) {

			var val1 = a.provideSecs;
	        var val2 = b.provideSecs;
	        if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
	            val1 = Number(val1);
	            val2 = Number(val2);
	        }
	        if (val1 < val2) {
	            return -1;
	        } else if (val1 > val2) {
	            return 1;
	        } else {
	            return 0;
	        }

			// return b.provideSecs - a.provideSecs
		});
		var str = "";
		$.each(relistToA, function(key, value) {
			str += '<li class="clearfix">' +
				'<a href="' + relistToA[key].linkUrl + '">' +
				'<img src="' + relistToA[key].loanIconUrl + '" class="loan l">' +
				'<div class="l loanbox">' +
				'<h3>' + relistToA[key].loanName + '<em class="label">' + relistToA[key].label + '</em></h3>' +
				'<p class="msgp">' + relistToA[key].desc + '<img src="img/listback.png" class="r listback"></p>' +
				'<p class="clearfix nump"><span class="l">额度范围：<b>' + relistToA[key].minAmount + '-' + relistToA[key].maxAmount + '</b></span><span class="r"><b>' + relistToA[key].successCount + '</b>人成功申请</span></p>' +
				'</div>';
					
				if (relistToA[key].recommendTag == "人气必选") {
					str += '<i class="icon icon1">' + relistToA[key].recommendTag + '</i></a></li>';
				} else if (relistToA[key].recommendTag == "刷脸必借") {
					str += '<i class="icon icon2">' + relistToA[key].recommendTag + '</i></a></li>';
				} else if (relistToA[key].recommendTag == "下款光速") {
					str += '<i class="icon icon3">' + relistToA[key].recommendTag + '</i></a></li>';
				} else if (relistToA[key].recommendTag == "不查征信") {
					str += '<i class="icon icon4">' + relistToA[key].recommendTag + '</i></a></li>';
				} else if (relistToA[key].recommendTag == "注册送券") {
					str += '<i class="icon icon5">' + relistToA[key].recommendTag + '</i></a></li>';
				} else {
					str += '<i class="icon icon1">' + relistToA[key].recommendTag + '</i></a></li>';
				};

		})

		$('.loanlist').html(str);
		Isempty();
	}
	
}

function doMd5() {
	var value = '';
	for(var i = 0; i < arguments.length; i++) {
		value += arguments[i] + '&';
	}
	return md5(value + "GeenWin_DaiKuaiQian");
}