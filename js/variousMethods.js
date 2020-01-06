 //bankno位银行卡号
    function luhnCheck(bankno){
        var lastNum=bankno.substr(bankno.length-1,1);//取出最后一位（与luhn进行比较）
 
        var first15Num=bankno.substr(0,bankno.length-1);//前15或18位
        var newArr=new Array();
        for(var i=first15Num.length-1;i>-1;i--){    //前15或18位倒序存进数组
            newArr.push(first15Num.substr(i,1));
        }
        var arrJiShu=new Array();  //奇数位*2的积 <9
        var arrJiShu2=new Array(); //奇数位*2的积 >9
 
        var arrOuShu=new Array();  //偶数位数组
        for(var j=0;j<newArr.length;j++){
            if((j+1)%2==1){//奇数位
                if(parseInt(newArr[j])*2<9)
                    arrJiShu.push(parseInt(newArr[j])*2);
                else
                    arrJiShu2.push(parseInt(newArr[j])*2);
            }
            else //偶数位
                arrOuShu.push(newArr[j]);
        }
 
        var jishu_child1=new Array();//奇数位*2 >9 的分割之后的数组个位数
        var jishu_child2=new Array();//奇数位*2 >9 的分割之后的数组十位数
        for(var h=0;h<arrJiShu2.length;h++){
            jishu_child1.push(parseInt(arrJiShu2[h])%10);
            jishu_child2.push(parseInt(arrJiShu2[h])/10);
        }        
 
        var sumJiShu=0; //奇数位*2 < 9 的数组之和
        var sumOuShu=0; //偶数位数组之和
        var sumJiShuChild1=0; //奇数位*2 >9 的分割之后的数组个位数之和
        var sumJiShuChild2=0; //奇数位*2 >9 的分割之后的数组十位数之和
        var sumTotal=0;
        for(var m=0;m<arrJiShu.length;m++){
            sumJiShu=sumJiShu+parseInt(arrJiShu[m]);
        }
 
        for(var n=0;n<arrOuShu.length;n++){
            sumOuShu=sumOuShu+parseInt(arrOuShu[n]);
        }
 
        for(var p=0;p<jishu_child1.length;p++){
            sumJiShuChild1=sumJiShuChild1+parseInt(jishu_child1[p]);
            sumJiShuChild2=sumJiShuChild2+parseInt(jishu_child2[p]);
        }      
        //计算总和
        sumTotal = parseInt(sumJiShu) + parseInt(sumOuShu) + parseInt(sumJiShuChild1) + parseInt(sumJiShuChild2);
 
        //计算luhn值
        var k= parseInt(sumTotal)%10==0?10:parseInt(sumTotal)%10;        
        var luhn= 10-k;
 
        if(lastNum==luhn){
        $("#banknoInfo").html("luhn验证通过");
            return true;
        }
        else{
        $("#banknoInfo").html("银行卡号必须符合luhn校验");
            return false;
        }        
    }
	
/**
 * 首页下半部分，分类list
 * 
 * data :后台返回的数据
 **/
	function homePageBottomList(data){
		//console.log("4444="+JSON.stringify(data))
		if (data.code == 200) {
		    var bottomAllList = document.getElementById("bottomAllList");
		    var htmlThree = [];
			var dataBottomLis = data.data;
			
			
			for(j=0;j<dataBottomLis.length;j++){
				htmlThree.push('<div class="mdss" id="mdsc">');
				htmlThree.push('<span class="hostClass" style="color: #707070;font-size:0.3rem">— '+ dataBottomLis[j].name +' —</span>');
				htmlThree.push('</div>');
				htmlThree.push('<div class="guanggTwo">');
				htmlThree.push('<img id="imgParaTwo" src="'+dataBottomLis[j].picture+'"/>');
				htmlThree.push('</div>');
				htmlThree.push('<div class="bottomList" id="bottomListTwo">');
				htmlThree.push('</div>');
				
				for(i=0;i<dataBottomLis[j].goodsList.length;i++){
					var row = dataBottomLis[j].goodsList[i];
					htmlThree.push('<div class="newShopingIDTwo" data-id='+row.id+'>');
					htmlThree.push('<div class="gotoDitails data-inventory=' + row.inventory + ' soldOutDiv" data-id='+row.id+'>');
					htmlThree.push('<img src="'+row.pictureUrl+'">');
					if(row.rebate != 0){
						htmlThree.push('<div class="fxzq" style="marring:0"><span class="fxzq_span">返</span><span>￥'+row.rebate+'</span></div>');
					}
					
					if (row.inventory == 0) {
						htmlThree.push('<img data-inventory=' + row.inventory + ' class="soldOutThree gotoDitails" src="../image/Group%20.png">');
					}
					htmlThree.push('</div>');
					htmlThree.push('<div class="gotoDitails shopName" data-inventory=' + row.inventory + '  data-id='+row.id+'>'+row.goodsName+'</div><div>'+row.title+'</div>');
					htmlThree.push('<div><span class="gotoDitails" data-inventory=' + row.inventory + '  data-id='+row.id+'>￥'+ row.price+'</span><image style="width: 0.46rem;height: 0.46rem;float: right;margin-right: 0.1rem;" src="../image/5232.png" class="fa fa-plus" spId='+ row.pecificationId+' data-idCart='+ row.id+'></div></div>');
				}
				//如果是奇数 在最后加个查看更多的图片
				var num = dataBottomLis[j].goodsList.length;
				//判断是奇数
				if(num%2 !=0){
					htmlThree.push('<div class="newShopingIDThree" code_id='+dataBottomLis[j].code+' name_id='+dataBottomLis[j].name+'>');
					htmlThree.push('<div><img src="../image/selectgd.png"></div>');
					htmlThree.push('</div>');
				}
			}
			
		    bottomAllList.innerHTML = htmlThree.join('');
		}else {
		    tipShow(data.message);
		}
	}