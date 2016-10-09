$(function(){





//banner图上的右边的动图
var rightimg=$(".right_img")[0];
var as=$('a',rightimg)[0];
var img=$('img',as)[0];

img.onmouseover=function(){
		animate(img,{right:8},500)
		// alert(1)
		
	}
	img.onmouseout=function(){

		animate(img,{right:0},500)
	}


//大banner图的轮播
var con=$('.concenter')[0];
var imgboxc=$('.imgbox')[0];
var imgc=$("img",imgboxc);
var butc=$('.button',con)[0];
var butlc=$('.left',butc)[0];
var butrc=$('.right',butc)[0];
var listc=$('.list',con)[0];
var lic=$('li',con);
var indexc=0;
var nextc=0;
var tc=setInterval(movec,2000);
var imgw=imgc[0].offsetWidth;
imgboxc.style.width=imgw*imgc.length+'px';
for(var i=0;i<imgc.length;i++){
	imgc[i].style.left=imgw*i+'px';
}
lic[0].style.backgroundColor="#e5004f";
function movec(){
	nextc++;
	if(nextc==imgc.length){
		nextc=0;
	}
	for(var i=0;i<lic.length;i++){
		lic[i].style.backgroundColor="";
	}
	lic[nextc].style.backgroundColor="#e5004f";

	imgc[nextc].style.left=imgw+'px';
	animate(imgc[indexc],{left:-imgw},500);
	animate(imgc[nextc],{left:0},500);
	indexc=nextc;
}
con.onmouseover=function(){
	clearInterval(tc);
	butlc.style.display="block";
	butrc.style.display="block";

}
con.onmouseout=function(){
	tc=setInterval(movec,2000)
	butlc.style.display="none";
	butrc.style.display="none";
}
for(var i=0;i<lic.length;i++){
	lic[i].index=i;
	lic[i].onclick=function(){
		if(indexc==this.index){
			return;
		}
		for(var i=0;i<lic.length;i++){
		lic[i].style.backgroundColor="";
	}
	lic[this.index].style.backgroundColor="#e5004f";
		imgc[this.index].style.left=imgw+'px';
		animate(imgc[indexc],{left:-imgw},500)
		animate(imgc[this.index],{left:0},500);
		nextc=this.index;
		indexc=nextc;
	}
}
butrc.onclick=function(){
	movec();
}
butlc.onclick=function(){
	nextc--;
	if(nextc==-1){
		nextc=imgc.length-1;
	}
	for(var i=0;i<lic.length;i++){
		lic[i].style.backgroundColor="";
	}
	lic[nextc].style.backgroundColor="#e5004f";
	imgc[nextc].style.left=-imgw+'px';
	animate(imgc[indexc],{left:imgw},500)
	animate(imgc[nextc],{left:0},500)

}
	/*var con = $('.concenter');
		

	var imgboxs=$('.imgbox',con[0])[0];
		// console.log(imgboxs);
	var imgs=$('img',imgboxs);
	var iw=parseInt(getStyle(imgs[0],'width'));
	 imgboxs.style.width=iw*imgs.length+'px';
	
	var lists=$('.list',con[0])[0];
	var lis=$('li',lists)
	var button=$('.button',con[0])[0]
	var left=$('.left',button)[0]
	var right=$('.right',button)[0]
	
	lis[0].style.backgroundColor='#e5004f'
	var index=0;
	var t=setInterval(move,2000)
	function move(){
		index++;
		if(index==imgs.length){index=0}
		for(var i=0;i<imgs.length;i++){
			lis[i].style.backgroundColor=''
		}
		animate(imgboxs,{left:-iw*index})
		lis[index].style.backgroundColor='#e5004f'
		
	}

	con.onmouseover=function(){
		clearInterval(t)
	}

	con.onmouseout=function(){
		t=setInterval(move,2000)
	}

	for(var i=0;i<imgs.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			for(var j=0;j<imgs.length;j++){
				lis[j].style.background=''
			}
			animate(imgboxs,{left:-iw*this.index})
			lis[this.index].style.background='#e5004f';
			index=this.index;
		}
	}

	right.onclick=function(){
		move();
	}

	left.onclick=function(){
		index--;
		if(index==-1){index=lis.length-1}
			for(var i=0;i<imgs.length;i++){
				lis[i].style.backgroundColor=''
			}
		animate(imgboxs,{left:-iw*index})
		lis[index].style.backgroundColor='#e5004f'
	}*/
	// }
	
	/*	//获取类名为link的对象
	var link=getClass('link',document);
	//获取link里面的a标签
	var links=link[0].getElementsByTagName('a')
	//获取类名为list的对象
	var lists=getClass('list',document)
	//默认选中第一个a标签 一种方法 另一种方法在html中给a标签添加样式
	// links[0].style.backgroundColor='pink';
	//遍历出每一个a标签 links.length为a标签的长度

	for(var i=0;i<links.length;i++){
		//给links[]对象设置一个属性index来保存a标签的下标
		links[i].index=i;
		//鼠标事件  对象.事件=function(){}
		links[i].onmousemove=function(){
			// alert(this.index) //this.index 操作哪个代表哪个的下标
			//事件触发时，所有的list里面的所有内容清空
			for(var j=0;j<links.length;j++){
				lists[j].style.display='none'
				// links[j].style.backgroundColor='#fff';
				//a标签背景颜色透明
				// links[j].style.backgroundColor='transparent'
				links[j].style.borderBottom='0' 
				 
			}
			//触发哪个下标，显示哪个下标对应的内容
			lists[this.index].style.display='block'
			//this当前选中的a
			// this.style.backgroundColor='pink'
			this.style.borderBottom='5px solid #e5004f'

			

		}
	}

	}*/


// var banner=$(".banner")[0];
/*var rightimg=$(".right_img")[0];
var as=$('a',rightimg);

as[0].onmouseover=function(){
		var img=$('img',as[0])[0];
		animate(img,{marginLeft:-100},500)
		
	}
	as[0].onmouseout=function(){
		var img=$('img',as[0])[0];
		animate(img,{marginLeft:0},500)
	}*/
/*for(var i=0;i<as.length;i++){
	as[i].onmouseover=function(){
		var img=$('img',this)[0];
		animate(img,{marginLeft:-15},500)
	}
	as[i].onmouseout=function(){
		var img=$('img',this)[0];
		animate(img,{marginLeft:0},500)
	}
}*/
//特卖开始
//获取类名为link的对象
	var link=getClass('link',document);
	//获取link里面的a标签
	var links=link[0].getElementsByTagName('a')
	//获取类名为list的对象
	var lists=getClass('listt',document)
	//默认选中第一个a标签 一种方法 另一种方法在html中给a标签添加样式
	// links[0].style.backgroundColor='pink';
	//遍历出每一个a标签 links.length为a标签的长度
	var san=$('.sanjiao',link[0]);
	san[0].style.display="block";
	for(var i=0;i<links.length;i++){
		//给links[]对象设置一个属性index来保存a标签的下标
		links[i].index=i;
		//鼠标事件  对象.事件=function(){}
		links[i].onmousemove=function(){
			// alert(this.index) //this.index 操作哪个代表哪个的下标
			//事件触发时，所有的list里面的所有内容清空
			for(var j=0;j<links.length;j++){
				lists[j].style.display='none'
				// links[j].style.backgroundColor='#fff';
				//a标签背景颜色透明
				// links[j].style.backgroundColor='transparent'
				links[j].style.borderBottom='0' 
				 san[j].style.display='none';
			}
			//触发哪个下标，显示哪个下标对应的内容
			lists[this.index].style.display='block'
			san[this.index].style.display="block";
			//this当前选中的a
			// this.style.backgroundColor='pink'
			this.style.borderBottom='5px solid #e5004f'

			

		}
	}


	//获取类名为link的对象
	var link1=getClass('link1',document);
	//获取link里面的a标签
	var links1=link1[0].getElementsByTagName('a')
	//获取类名为list的对象
	var lists1=getClass('list1',document)
	//默认选中第一个a标签 一种方法 另一种方法在html中给a标签添加样式
	// links[0].style.backgroundColor='pink';
	//遍历出每一个a标签 links.length为a标签的长度
	var sj=$('.sj',link1[0]);
	sj[0].style.display="block";
	links1[0].style.borderBottom='5px solid #e5004f';

	for(var i=0;i<links1.length;i++){
		//给links[]对象设置一个属性index来保存a标签的下标
		links1[i].index=i;
		//鼠标事件  对象.事件=function(){}
		links1[i].onmousemove=function(){
			// alert(this.index) //this.index 操作哪个代表哪个的下标
			//事件触发时，所有的list里面的所有内容清空
			for(var j=0;j<links1.length;j++){
				lists1[j].style.display='none'
				// links[j].style.backgroundColor='#fff';
				//a标签背景颜色透明
				// links[j].style.backgroundColor='transparent'
				links1[j].style.borderBottom='0' ;
				sj[j].style.display="none";
				 
			}
			//触发哪个下标，显示哪个下标对应的内容
			lists1[this.index].style.display='block'
			//this当前选中的a
			// this.style.backgroundColor='pink'
			this.style.borderBottom='5px solid #e5004f'
			sj[this.index].style.display="block";
			

		}
	}


//时尚名品的小banner
var sale=$('.sale')[0];
var sale_bottom=$('.sale_bottom',sale)[0];
var sale_bottom_leftdown=$('.sale_bottom_leftdown',sale_bottom)[0];
var saledown=$('.saledown',sale_bottom_leftdown)[0];
var db=$('.down-box',saledown);

var iw1=parseInt(getStyle(db[0],"width"));
saledown.style.width=iw1*db.length+'px';
var index1=0;
var next=0;
// var t1=setInterval(move1,2000);
for(var i=0;i<db.length;i++){
	db[i].style.left=iw1*i+'px';
}
function move1(){

	next++;
	if(next==db.length){
			next=0;
		}
		db[next].style.left=iw1+'px';
	animate(db[index1],{left:-iw1})

	animate(db[next],{left:0})
	index1=next;
}
// sale_bottom_leftdown.onmouseover=function(){
// 	clearInterval(t1);
// }
// sale_bottom_leftdown.onmouseout=function(){
// 	t1=setInterval(move1,2000);
// }
var salebut=$(".salebut")[0];
var butl=$('.butleft',salebut)[0];
var img1=$('img',butl)[0];
var butr=$('.butright',salebut)[0];
var img2=$('img',butr)[0];
butr.onclick=function(){
	move1();
}
butl.onclick=function(){
	next--;
	if(next==-1){
			next=db.length-1;
		}
		db[next].style.left=-iw1+'px';
		animate(db[index1],{left:iw1});
		animate(db[next],{left:0});
		index1=next;
}




//中间的轮播

var s_b_z=$('.sale_bottom_zhong',sale)[0]
var Btn=$('.sb-button',s_b_z)[0]
var sbz=$('.sbz',s_b_z)[0];
var img2=$('img',sbz);
var sbB=$('.sb-button',s_b_z)[0];
var ul=$('ul',s_b_z)[0];
var li=$('li',ul)
var iw2=parseInt(getStyle(img2[0],"width"));
sbz.style.width=iw2*img2.length+'px';
var sbZbr=$(".sb-rb",Btn)[0];
var sbZbl=$('.sb-lb',Btn)[0];
var ul=$('ul',s_b_z)[0]
var li=$('li',ul);
var flag=true;
img2[1].style.left=iw2+"px";
li[0].style.background="#e5004f";
function move2(){

	if(flag){

		animate(img2[0],{left:-iw2})
	animate(img2[1],{left:0},function(){
		flag=false;

	})
	for(var i=0;i<li.length;i++){
		li[i].style.backgroundColor="";
	}
	li[1].style.backgroundColor="#e5004f";

	}
	
}
sbZbr.onclick=function(){

	move2();
}
sbZbl.onclick=function(){

	if(!flag){
		// img2[0].style.left=iw2+"px";
		animate(img2[1],{left:iw2})
	animate(img2[0],{left:0},function(){
		flag=true;
	})
	for(var i=0;i<li.length;i++){
		li[i].style.backgroundColor="";
	}
	li[0].style.backgroundColor="#e5004f";
	}
}
	

	li[0].onclick=function(){
		animate(img2[0],{left:0})
		animate(img2[1],{left:iw2})
		for(var i=0;i<li.length;i++){
			li[i].style.background="";
		}
		li[0].style.background="#e5004f";

	}
li[1].onclick=function(){
		animate(img2[1],{left:0})
		animate(img2[0],{left:-iw2})
for(var i=0;i<li.length;i++){
			li[i].style.background="";
		}
		li[1].style.background="#e5004f";

	}

	
s_b_z.onmouseover=function(){
sbZbr.style.display="block";
	sbZbl.style.display="block";
}
s_b_z.onmouseout=function(){
	sbZbr.style.display="none";
	sbZbl.style.display="none";

}
//选项卡的线
var temai_left_bottom1=$(".temai_left_bottom1");
for(var j=0;j<temai_left_bottom1.length;j++){
	xiank1(temai_left_bottom1[j]);
}
// }
function xiank1(temai_left_bottom1){
var img41=$('img',temai_left_bottom1)[0];
var bt1=$('.bt',temai_left_bottom1)[0];
var bl1=$('.bl',temai_left_bottom1)[0];
var br1=$('.br',temai_left_bottom1)[0];
var bb1=$('.bb',temai_left_bottom1)[0];


	temai_left_bottom1.onmouseover=function(){
		animate(bt1,{width:221})
		animate(bl1,{height:263})
		animate(br1,{height:263})
		animate(bb1,{width:221})

	}
	temai_left_bottom1.onmouseout=function(){
		animate(bt1,{width:0})
		animate(bl1,{height:0})
		animate(br1,{height:0})
		animate(bb1,{width:0})

	}
}
// 下面的线
var maipin_bottom_right_bottom7=$(".maipin_bottom_right_bottom7");
for(var j=0;j<maipin_bottom_right_bottom7.length;j++){
	xiankuang1(maipin_bottom_right_bottom7[j]);
}

function xiankuang1(maipin_bottom_right_bottom7){
var img42=$('img',maipin_bottom_right_bottom7)[0];
var bt2=$('.bt',maipin_bottom_right_bottom7)[0];
var bl2=$('.bl',maipin_bottom_right_bottom7)[0];
var br2=$('.br',maipin_bottom_right_bottom7)[0];
var bb2=$('.bb',maipin_bottom_right_bottom7)[0];


	maipin_bottom_right_bottom7.onmouseover=function(){
		animate(bt2,{width:200})
		animate(bl2,{height:252})
		animate(br2,{height:252})
		animate(bb2,{width:200})

	}
	maipin_bottom_right_bottom7.onmouseout=function(){
		animate(bt2,{width:0})
		animate(bl2,{height:0})
		animate(br2,{height:0})
		animate(bb2,{width:0})

	}
}
//线的动画效果
//封装好了
// var s_b_r=$('.sale_bottom_right');
// for(var i=0;i<s_b_r.length;i++){
var sXian=$(".s-xian");
for(var j=0;j<sXian.length;j++){
	xiankuang(sXian[j]);
}
// }
function xiankuang(sXian){
var img4=$('img',sXian)[0];
var bt=$('.bt',sXian)[0];
var bl=$('.bl',sXian)[0];
var br=$('.br',sXian)[0];
var bb=$('.bb',sXian)[0];


	sXian.onmouseover=function(){
		animate(bt,{width:268})
		animate(bl,{height:178})
		animate(br,{height:178})
		animate(bb,{width:268})

	}
	sXian.onmouseout=function(){
		animate(bt,{width:0})
		animate(bl,{height:0})
		animate(br,{height:0})
		animate(bb,{width:0})

	}
}
/*var s_b_r=$('.sale_bottom_right',sale)[0];

var sXian=$(".s-xian",s_b_r);
for(var i=0;i<sXian.length;i++){
	xiankuang(sXian[i]);
}
function xiankuang(sXian){
var img4=$('img',sXian)[0];
var bt=$('.bt',sXian)[0];
var bl=$('.bl',sXian)[0];
var br=$('.br',sXian)[0];
var bb=$('.bb',sXian)[0];


	sXian.onmouseover=function(){
		animate(bt,{width:268})
		animate(bl,{height:178})
		animate(br,{height:178})
		animate(bb,{width:268})

	}
	sXian.onmouseout=function(){
		animate(bt,{width:0})
		animate(bl,{height:0})
		animate(br,{height:0})
		animate(bb,{width:0})

	}
}*/

//潮流女装小banner
var salenv=$('.salenv')[0];
var sale_bottom1=$('.sale_bottom',salenv)[0];
var sale_bottom_leftdown1=$('.sale_bottom_leftdown',sale_bottom1)[0];
var saledown1=$('.saledown',sale_bottom_leftdown1)[0];
var db1=$('.down-box',saledown1);

var iw4=parseInt(getStyle(db1[0],"width"));
saledown1.style.width=iw4*db1.length+'px';
var index4=0;
var next4=0;
// var t4=setInterval(move4,2000);
for(var i=0;i<db1.length;i++){
	db1[i].style.left=iw4*i+'px';
}
function move4(){

	next4++;
	if(next4==db1.length){
			next4=0;
		}
		db1[next4].style.left=iw4+'px';
	animate(db1[index4],{left:-iw4})

	animate(db1[next4],{left:0})
	index4=next4;
}
// sale_bottom_leftdown1.onmouseover=function(){
// 	clearInterval(t4);
// }
// sale_bottom_leftdown1.onmouseout=function(){
// 	t4=setInterval(move4,2000);
// }
var salebut1=$(".salebut",salenv)[0];
var butl1=$('.butleft',salebut1)[0];
var img11=$('img',butl1)[0];
var butr1=$('.butright',salebut1)[0];
var img21=$('img',butr1)[0];
butr1.onclick=function(){
	move4();
}
butl1.onclick=function(){
	next4--;
	if(next4==-1){
			next4=db1.length-1;
		}
		db1[next4].style.left=-iw4+'px';
		animate(db1[index4],{left:iw4});
		animate(db1[next4],{left:0});
		index4=next4;
}

//男装的小banner
var sale2=$('.salenan')[0];
var sale_bottom2=$('.sale_bottom',sale2)[0];
var sale_bottom_leftdown2=$('.sale_bottom_leftdown',sale_bottom2)[0];
var saledown2=$('.saledown',sale_bottom_leftdown2)[0];
var db2=$('.down-box',saledown2);

var iw24=parseInt(getStyle(db2[0],"width"));
saledown2.style.width=iw24*db2.length+'px';
var index24=0;
var next24=0;
// var t24=setInterval(move24,2000);
for(var i=0;i<db2.length;i++){
	db2[i].style.left=iw24*i+'px';
}
function move24(){

	next24++;
	if(next24==db2.length){
			next24=0;
		}
		db2[next24].style.left=iw24+'px';
	animate(db2[index24],{left:-iw24})

	animate(db2[next24],{left:0})
	index24=next24;
}
// sale_bottom_leftdown2.onmouseover=function(){
// 	clearInterval(t24);
// }
// sale_bottom_leftdown2.onmouseout=function(){
// 	t24=setInterval(move24,2000);
// }
var salebut2=$(".salebut",sale2)[0];
var butl2=$('.butleft',salebut2)[0];
var img12=$('img',butl2)[0];
var butr2=$('.butright',salebut2)[0];
var img22=$('img',butr2)[0];
butr2.onclick=function(){
	move24();
}
butl2.onclick=function(){
	next24--;
	if(next24==-1){
			next24=db2.length-1;
		}
		db2[next24].style.left=-iw24+'px';
		animate(db2[index24],{left:iw24});
		animate(db2[next24],{left:0});
		index24=next24;
}


// 鞋靴开始
//男装的小banner
var sale3=$('.salexue')[0];
var sale_bottom3=$('.sale_bottom',sale3)[0];
var sale_bottom_leftdown3=$('.sale_bottom_leftdown',sale_bottom3)[0];
var saledown3=$('.saledown',sale_bottom_leftdown3)[0];
var db3=$('.down-box',saledown3);

var iw5=parseInt(getStyle(db3[0],"width"));
saledown3.style.width=iw5*db3.length+'px';
var index5=0;
var next5=0;
// var t5=setInterval(move5,2000);
for(var i=0;i<db3.length;i++){
	db3[i].style.left=iw5*i+'px';
}
function move5(){

	next5++;
	if(next5==db3.length){
			next5=0;
		}
		db3[next5].style.left=iw5+'px';
	animate(db3[index5],{left:-iw5})

	animate(db3[next5],{left:0})
	index5=next5;
}
// sale_bottom_leftdown3.onmouseover=function(){
// 	clearInterval(t5);
// }
// sale_bottom_leftdown3.onmouseout=function(){
// 	t5=setInterval(move5,2000);
// }
var salebut3=$(".salebut",sale3)[0];
var butl3=$('.butleft',salebut3)[0];
var img13=$('img',butl3)[0];
var butr3=$('.butright',salebut3)[0];
var img23=$('img',butr3)[0];
butr3.onclick=function(){
	move5();
}
butl3.onclick=function(){
	next5--;
	if(next5==-1){
			next5=db3.length-1;
		}
		db3[next5].style.left=-iw5+'px';
		animate(db3[index5],{left:iw5});
		animate(db3[next5],{left:0});
		index5=next5;
}


//选项卡
// var banner=
// var shulie=('.shulie')[0];
var lie=$('.lie')
// alert(lie.length)

for(var i=0;i<lie.length;i++){
	lie[i].onmouseover=function(){
		this.style.backgroundColor="#e5004f";
	}
	lie[i].onmouseout=function(){
		this.style.backgroundColor="";
	}
}


// 潮流箱包开始
var salebao=$('.salebao')[0];
var sale_bottom6=$('.sale_bottom',salebao)[0];
var sale_bottom_leftdown6=$('.sale_bottom_leftdown',sale_bottom6)[0];
var saledown6=$('.saledown',sale_bottom_leftdown6)[0];
var db6=$('.down-box',saledown6);

var iw6=parseInt(getStyle(db6[0],"width"));
saledown6.style.width=iw6*db6.length+'px';
var index6=0;
var next6=0;
// var t6=setInterval(move6,2000);
for(var i=0;i<db6.length;i++){
	db6[i].style.left=iw6*i+'px';
}
function move6(){

	next6++;
	if(next6==db6.length){
			next6=0;
		}
		db6[next6].style.left=iw6+'px';
	animate(db6[index6],{left:-iw6})

	animate(db6[next6],{left:0})
	index6=next6;
}
// sale_bottom_leftdown6.onmouseover=function(){
// 	clearInterval(t6);
// }
// sale_bottom_leftdown6.onmouseout=function(){
// 	t6=setInterval(move6,2000);
// }
var salebut6=$(".salebut",salebao)[0];
var butl6=$('.butleft',salebut6)[0];
var img16=$('img',butl6)[0];
var butr6=$('.butright',salebut6)[0];
var img26=$('img',butr6)[0];
butr6.onclick=function(){
	move6();
}
butl6.onclick=function(){
	next6--;
	if(next6==-1){
			next6=db6.length-1;
		}
		db6[next6].style.left=-iw6+'px';
		animate(db6[index6],{left:iw6});
		animate(db6[next6],{left:0});
		index6=next6;
}
// 美容开始
var salemei=$('.salemei')[0];
var sale_bottom7=$('.sale_bottom',salemei)[0];
var sale_bottom_leftdown7=$('.sale_bottom_leftdown',sale_bottom7)[0];
var saledown7=$('.saledown',sale_bottom_leftdown7)[0];
var db7=$('.down-box',saledown7);

var iw7=parseInt(getStyle(db7[0],"width"));
saledown7.style.width=iw7*db7.length+'px';
var index7=0;
var next7=0;
// var t7=setInterval(move7,2000);
for(var i=0;i<db7.length;i++){
	db7[i].style.left=iw7*i+'px';
}
function move7(){

	next7++;
	if(next7==db7.length){
			next7=0;
		}
		db7[next7].style.left=iw7+'px';
	animate(db7[index7],{left:-iw7})

	animate(db7[next7],{left:0})
	index7=next7;
}
// sale_bottom_leftdown7.onmouseover=function(){
// 	clearInterval(t7);
// }
// sale_bottom_leftdown7.onmouseout=function(){
// 	t7=setInterval(move7,2000);
// }
var salebut7=$(".salebut",salemei)[0];
var butl7=$('.butleft',salebut7)[0];
var img17=$('img',butl7)[0];
var butr7=$('.butright',salebut7)[0];
var img27=$('img',butr7)[0];
butr7.onclick=function(){
	move7();
}
butl7.onclick=function(){
	next7--;
	if(next7==-1){
			next7=db7.length-1;
		}
		db7[next7].style.left=-iw7+'px';
		animate(db7[index7],{left:iw7});
		animate(db7[next7],{left:0});
		index7=next7;
}
//户外开始
var salehu=$('.salehu')[0];
var sale_bottom8=$('.sale_bottom',salehu)[0];
var sale_bottom_leftdown8=$('.sale_bottom_leftdown',sale_bottom8)[0];
var saledown8=$('.saledown',sale_bottom_leftdown8)[0];
var db8=$('.down-box',saledown8);

var iw8=parseInt(getStyle(db8[0],"width"));
saledown8.style.width=iw8*db8.length+'px';
var index8=0;
var next8=0;
// var t8=setInterval(move8,2000);
for(var i=0;i<db8.length;i++){
	db8[i].style.left=iw8*i+'px';
}
function move8(){

	next8++;
	if(next8==db8.length){
			next8=0;
		}
		db8[next8].style.left=iw8+'px';
	animate(db8[index8],{left:-iw8})

	animate(db8[next8],{left:0})
	index8=next8;
}
// sale_bottom_leftdown8.onmouseover=function(){
// 	clearInterval(t8);
// }
// sale_bottom_leftdown8.onmouseout=function(){
// 	t8=setInterval(move8,2000);
// }
var salebut8=$(".salebut",salehu)[0];
var butl8=$('.butleft',salebut8)[0];
var img18=$('img',butl8)[0];
var butr8=$('.butright',salebut8)[0];
var img28=$('img',butr8)[0];
butr8.onclick=function(){
	move8();
}
butl8.onclick=function(){
	next8--;
	if(next8==-1){
			next8=db8.length-1;
		}
		db8[next8].style.left=-iw8+'px';
		animate(db8[index8],{left:iw8});
		animate(db8[next8],{left:0});
		index8=next8;
}
//内衣配饰
var salenei=$('.salenei')[0];
var sale_bottom9=$('.sale_bottom',salenei)[0];
var sale_bottom_leftdown9=$('.sale_bottom_leftdown',sale_bottom9)[0];
var saledown9=$('.saledown',sale_bottom_leftdown9)[0];
var db9=$('.down-box',saledown9);

var iw9=parseInt(getStyle(db9[0],"width"));
saledown9.style.width=iw9*db9.length+'px';
var index9=0;
var next9=0;
// var t9=setInterval(move9,2000);
for(var i=0;i<db9.length;i++){
	db9[i].style.left=iw9*i+'px';
}
function move9(){

	next9++;
	if(next9==db9.length){
			next9=0;
		}
		db9[next9].style.left=iw9+'px';
	animate(db9[index9],{left:-iw9})

	animate(db9[next9],{left:0})
	index9=next9;
}
// sale_bottom_leftdown9.onmouseover=function(){
// 	clearInterval(t9);
// }
// sale_bottom_leftdown9.onmouseout=function(){
// 	t9=setInterval(move9,2000);
// }
var salebut9=$(".salebut",salenei)[0];
var butl9=$('.butleft',salebut9)[0];
var img19=$('img',butl9)[0];
var butr9=$('.butright',salebut9)[0];
var img29=$('img',butr9)[0];
butr9.onclick=function(){
	move9();
}
butl9.onclick=function(){
	next9--;
	if(next9==-1){
			next9=db9.length-1;
		}
		db9[next9].style.left=-iw9+'px';
		animate(db9[index9],{left:iw9});
		animate(db9[next9],{left:0});
		index9=next9;
}
// 可爱婴童
var saletong=$('.saletong')[0];
var sale_bottom91=$('.sale_bottom',saletong)[0];
var sale_bottom_leftdown91=$('.sale_bottom_leftdown',sale_bottom91)[0];
var saledown91=$('.saledown',sale_bottom_leftdown91)[0];
var db91=$('.down-box',saledown91);

var iw91=parseInt(getStyle(db91[0],"width"));
saledown91.style.width=iw91*db91.length+'px';
var index91=0;
var next91=0;
// var t91=setInterval(move91,2000);
for(var i=0;i<db91.length;i++){
	db91[i].style.left=iw91*i+'px';
}
function move91(){

	next91++;
	if(next91==db91.length){
			next91=0;
		}
		db91[next91].style.left=iw91+'px';
	animate(db91[index91],{left:-iw91})

	animate(db91[next91],{left:0})
	index91=next91;
}
// sale_bottom_leftdown91.onmouseover=function(){
// 	clearInterval(t91);
// }
// sale_bottom_leftdown91.onmouseout=function(){
// 	t91=setInterval(move91,2000);
// }
var salebut91=$(".salebut",saletong)[0];
var butl91=$('.butleft',salebut91)[0];
var img191=$('img',butl91)[0];
var butr91=$('.butright',salebut91)[0];
var img291=$('img',butr91)[0];
butr91.onclick=function(){
	move91();
}
butl91.onclick=function(){
	next91--;
	if(next91==-1){
			next91=db91.length-1;
		}
		db91[next91].style.left=-iw91+'px';
		animate(db91[index91],{left:iw91});
		animate(db91[next91],{left:0});
		index91=next91;
}
// 潮流箱包中
var s_b_zz1=$('.sale_bottom_zhong',salebao)[0]
var Btnz1=$('.sb-button',s_b_zz1)[0]
var sbzz1=$('.sbz',s_b_zz1)[0];
var img2z1=$('img',sbzz1);
var sbBz1=$('.sb-button',s_b_zz1)[0];
var ulz1=$('ul',s_b_zz1)[0];
var liz1=$('li',ulz1)
var iw2z1=parseInt(getStyle(img2z1[0],"width"));
sbzz1.style.width=iw2z1*img2z1.length+'px';
var sbZbrz1=$(".sb-rb",Btnz1)[0];
var sbZblz1=$('.sb-lb',Btnz1)[0];
var flagz1=true;
img2z1[1].style.left=iw2z1+"px";
liz1[0].style.background="#e5004f";
function move2z1(){

	if(flagz1){

		animate(img2z1[0],{left:-iw2z1})
	animate(img2z1[1],{left:0},function(){
		flagz1=false;

	})
	for(var i=0;i<liz1.length;i++){
		liz1[i].style.backgroundColor="";
	}
	liz1[1].style.backgroundColor="#e5004f";

	}
	
}
sbZbrz1.onclick=function(){

	move2z1();
}
sbZblz1.onclick=function(){

	if(!flagz1){
		// img2[0].style.left=iw2+"px";
		animate(img2z1[1],{left:iw2z1})
	animate(img2z1[0],{left:0},function(){
		flagz1=true;
	})
	for(var i=0;i<liz1.length;i++){
		liz1[i].style.backgroundColor="";
	}
	liz1[0].style.backgroundColor="#e5004f";
	}
}
	

	liz1[0].onclick=function(){
		animate(img2z1[0],{left:0})
		animate(img2z1[1],{left:iw2z1})
		for(var i=0;i<liz1.length;i++){
			liz1[i].style.background="";
		}
		liz1[0].style.background="#e5004f";

	}
liz1[1].onclick=function(){
		animate(img2z1[1],{left:0})
		animate(img2z1[0],{left:-iw2z1})
for(var i=0;i<liz1.length;i++){
			liz1[i].style.background="";
		}
		liz1[1].style.background="#e5004f";

	}

	
s_b_zz1.onmouseover=function(){
sbZbrz1.style.display="block";
	sbZblz1.style.display="block";
}
s_b_zz1.onmouseout=function(){
	sbZbrz1.style.display="none";
	sbZblz1.style.display="none";

}
// 美容护肤
var s_b_zz2=$('.sale_bottom_zhong',salemei)[0]
var Btnz2=$('.sb-button',s_b_zz2)[0]
var sbzz2=$('.sbz',s_b_zz2)[0];
var img2z2=$('img',sbzz2);
var sbBz2=$('.sb-button',s_b_zz2)[0];
var ulz2=$('ul',s_b_zz2)[0];
var liz2=$('li',ulz2)
var iw2z2=parseInt(getStyle(img2z2[0],"width"));
sbzz2.style.width=iw2z2*img2z2.length+'px';
var sbZbrz2=$(".sb-rb",Btnz2)[0];
var sbZblz2=$('.sb-lb',Btnz2)[0];
var flagz2=true;
img2z2[1].style.left=iw2z2+"px";
liz2[0].style.background="#e5004f";
function move2z2(){

	if(flagz2){

		animate(img2z2[0],{left:-iw2z2})
	animate(img2z2[1],{left:0},function(){
		flagz2=false;

	})
	for(var i=0;i<liz2.length;i++){
		liz2[i].style.backgroundColor="";
	}
	liz2[1].style.backgroundColor="#e5004f";

	}
	
}
sbZbrz2.onclick=function(){

	move2z2();
}
sbZblz2.onclick=function(){

	if(!flagz2){
		// img2[0].style.left=iw2+"px";
		animate(img2z2[1],{left:iw2z2})
	animate(img2z2[0],{left:0},function(){
		flagz2=true;
	})
	for(var i=0;i<liz2.length;i++){
		liz2[i].style.backgroundColor="";
	}
	liz2[0].style.backgroundColor="#e5004f";
	}
}
	

	liz2[0].onclick=function(){
		animate(img2z2[0],{left:0})
		animate(img2z2[1],{left:iw2z2})
		for(var i=0;i<liz2.length;i++){
			liz2[i].style.background="";
		}
		liz2[0].style.background="#e5004f";

	}
liz2[1].onclick=function(){
		animate(img2z2[1],{left:0})
		animate(img2z2[0],{left:-iw2z2})
for(var i=0;i<liz2.length;i++){
			liz2[i].style.background="";
		}
		liz2[1].style.background="#e5004f";

	}

	
s_b_zz2.onmouseover=function(){
sbZbrz2.style.display="block";
	sbZblz2.style.display="block";
}
s_b_zz2.onmouseout=function(){
	sbZbrz2.style.display="none";
	sbZblz2.style.display="none";

}
//户外运动
var s_b_zz3=$('.sale_bottom_zhong',salehu)[0]
var Btnz3=$('.sb-button',s_b_zz3)[0]
var sbzz3=$('.sbz',s_b_zz3)[0];
var img2z3=$('img',sbzz3);
var sbBz3=$('.sb-button',s_b_zz3)[0];
var ulz3=$('ul',s_b_zz3)[0];
var liz3=$('li',ulz3)
var iw2z3=parseInt(getStyle(img2z3[0],"width"));
sbzz3.style.width=iw2z3*img2z3.length+'px';
var sbZbrz3=$(".sb-rb",Btnz3)[0];
var sbZblz3=$('.sb-lb',Btnz3)[0];
var flagz3=true;
img2z3[1].style.left=iw2z3+"px";
liz3[0].style.background="#e5004f";
function move2z3(){

	if(flagz3){

		animate(img2z3[0],{left:-iw2z3})
	animate(img2z3[1],{left:0},function(){
		flagz3=false;

	})
	for(var i=0;i<liz3.length;i++){
		liz3[i].style.backgroundColor="";
	}
	liz3[1].style.backgroundColor="#e5004f";

	}
	
}
sbZbrz3.onclick=function(){

	move2z3();
}
sbZblz3.onclick=function(){

	if(!flagz3){
		// img2[0].style.left=iw2+"px";
		animate(img2z3[1],{left:iw2z3})
	animate(img2z3[0],{left:0},function(){
		flagz3=true;
	})
	for(var i=0;i<liz3.length;i++){
		liz3[i].style.backgroundColor="";
	}
	liz3[0].style.backgroundColor="#e5004f";
	}
}
	

	liz3[0].onclick=function(){
		animate(img2z3[0],{left:0})
		animate(img2z3[1],{left:iw2z3})
		for(var i=0;i<liz3.length;i++){
			liz3[i].style.background="";
		}
		liz3[0].style.background="#e5004f";

	}
liz3[1].onclick=function(){
		animate(img2z3[1],{left:0})
		animate(img2z3[0],{left:-iw2z3})
for(var i=0;i<liz3.length;i++){
			liz3[i].style.background="";
		}
		liz3[1].style.background="#e5004f";

	}

	
s_b_zz3.onmouseover=function(){
sbZbrz3.style.display="block";
	sbZblz3.style.display="block";
}
s_b_zz3.onmouseout=function(){
	sbZbrz3.style.display="none";
	sbZblz3.style.display="none";

}

// 右面的
var ybs=$('.ybs')[0];
var ybx=$('.ybx')[0];
var ybxx=$('.ybxx',ybx);
for(var i=0;i<ybxx.length;i++){
	ybxx[i].onmouseover=function(){
	this.style.opacity=0;
}
ybxx[i].onmouseout=function(){
	this.style.opacity=1;
}
}

//楼层跳转效果
var floor=$('.floor');
/*var ybxf=$('.ybx')[0];
var ybsf=$('.ybs')[0];*/
// var ybxxf=$('.ybxx',ybxf);
var spansf=$('span',ybs)
var arrf=[];
for(var i=0;i<floor.length;i++){
	arrf.push(floor[i].offsetTop);
}
// ybxx[0].style.opacity=-1;
window.onscroll=function(){
	var stop=document.body.scrollTop||document.documentElement.scrollTop;
	if(stop<arrf[0]-800){
		ybs.style.display="none";
		ybx.style.display="none";
	}else{
		ybs.style.display="block";
		ybx.style.display="block";
	}
	for(var i=0;i<ybxx.length;i++){
		// ybxx[i].index=i;
		// spansf[i].index=i;

		if(arrf[i]<=stop+200){
			for(var j=0;j<ybxx.length;j++){

				ybxx[j].style.opacity=1;
				}
	ybxx[i].style.opacity=0;

		}
	}
}
window.onscroll();
for(var i=0;i<ybxx.length-1;i++){
	ybxx[i].index=i;
	ybxx[i].onclick=function(){
		// alert(1)
		animate(document.body,{scrollTop:arrf[this.index]},500)
		animate(document.documentElement,{scrollTop:arrf[this.index]},500)
	}
}
var wicon10=$('.wicon10',ybx)[0];
wicon10.onclick=function(){
	animate(document.body,{scrollTop:0},500)
		animate(document.documentElement,{scrollTop:0},500)
}
//导航下拉
var shouye=$('.shouye')[0];
var syr3=$('.shouye_right3',shouye)[0];
var ulsy=$('ul',syr3);

hover(syr3,function(){
		ulsy[0].style.display="block";
		syr3.style.backgroundColor="#fff";
	},function(){
		ulsy[0].style.display="none";
		syr3.style.backgroundColor="#eeeeee";

	})
var syl2=$('.shouye_left2')[0];
var sl2r=$('.shouye_left2_right',syl2)[0];
var ulsl=$('ul',sl2r);
var sw=syl2.offsetWidth;
hover(sl2r,function(){
		ulsl[0].style.display="block";
		syl2.style.backgroundColor="#fff";
		syl2.style.width=sw+30+"px";
	},function(){
		ulsl[0].style.display="none";
		syl2.style.backgroundColor="#eeeeee";
		syl2.style.width=sw+'px';
	})


var syl3=$('.shouye_left3')[0];
var sl3r=$('.shouye_left3_right',syl3)[0];
var ulsl3=$('ul',sl3r);

hover(sl3r,function(){
		ulsl3[0].style.display="block";
		syl3.style.backgroundColor="#fff";
	},function(){
		ulsl3[0].style.display="none";
		syl3.style.backgroundColor="#eeeeee";
		
	})

//选项卡的下拉
var bannerzl=$('.banner')[0];
var shuliezl=$('.shulie',bannerzl)[0];
var liezl=$('.lie',shuliezl);
var tupianzl=$('.tupian',bannerzl);
// console.log(liezl.length)
var kapian=$('.kapian',shuliezl);
for(var i=0;i<liezl.length;i++){
	liezl[i].index=i;
	hover(liezl[i],function(){
		kapian[this.index].style.display="block";
		liezl[this.index].style.backgroundColor="#e5004f";
		tupianzl[this.index].style.display="none";
	},function(){
		kapian[this.index].style.display="none";
		liezl[this.index].style.backgroundColor="";
		tupianzl[this.index].style.display="block";


	})
}
})