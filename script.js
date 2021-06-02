var topicon=document.querySelector('.slidetopi');
var bleftbtn=document.querySelector('.bannerleftbtn');
var brightbtn=document.querySelector('.bannerrightbtn');
var child=document.querySelector('.bannerchild');
var vintage=document.querySelector('.vintage');
var vintagelg=document.querySelector('.vintagelg');
var nav=document.querySelector('.navbar');
var navbarlogo=document.querySelector('.navbarlogo');
var ul1li=document.querySelectorAll('.ul1li');
var liproduct=document.querySelector('.liproduct');
var profile=document.querySelector('.profile');
var search=document.querySelector('.search');


// console.log(vintage,vintagelg);
var arr=["1","2"];
var length=arr.length;
// console.log(length);

window.addEventListener('scroll',()=>{
    if(scrollY > 20)
    {
        nav.style.top="0";
        nav.style.backgroundColor="#F1F0F0";
        navbarlogo.innerHTML=`<img src="./images/austin-logo-blk_b45727fa-71ba-43fb-9049-4e6bd0ab0b76_280x@2x.png" height="100%" width="100%">`;
        ul1li.forEach((e)=>{
            e.style.color="black";
        })
        liproduct.style.color="black";
        profile.style.color="black";
        search.style.color="black";
    }
    else
    {
        navbarlogo.innerHTML=`<img src="./images/austin-logo-wt_7e24ef60-5c8e-417c-88b1-696f69f8ce55_280x@2x.png" height="100%" width="100%">`;
        nav.style.top="30px";
        nav.style.backgroundColor="transparent";
        // nav.style.opacity="0.2";
        ul1li.forEach((e)=>{
            e.style.color="white";
        })
        liproduct.style.color="white";
        profile.style.color="white";
        search.style.color="white";
    }
})

topicon.onclick = (e)=>{
    var p=topicon.parentElement.parentElement;
    p.remove();
}
// console.log(child);
bleftbtn.onclick = ()=>{
    if(length < arr.length)
    {
        length++;
    }
    else
    {
        length=1;
    }
    var final=length-1;
    child.style.backgroundImage=`url(${arr[length-1]}.jpg)`
    if(final == 0)
    {
        vintage.style.display='block';
        vintagelg.style.display='none';
    }
    else if(final == 1)
    {
        vintage.style.display='none';
        vintagelg.style.display='block';
    }
}
brightbtn.onclick = ()=>{
    if(length>1)
    {
        length--;
    }
    else
    {
        length=arr.length;
    }
    var final=length-1;
    child.style.backgroundImage=`url(${arr[length-1]}.jpg)`
    if(final == 0)
    {
        vintage.style.display='block';
        vintagelg.style.display='none';
    }
    else if(final == 1)
    {
        vintage.style.display='none';
        vintagelg.style.display='block';
    }
}
var c3p2btn=document.querySelector('.cont3pt2btn');
var vmbdiv=document.querySelector('.cont3part1div');

c3p2btn.addEventListener('click',()=>{
    nav.style.display="none"
    // vmbdiv.style.visibility="visible";
    vmbdiv.style.display="block";

    // console.log("hey")
})
var cont3leftbtn=document.querySelector('.cont3leftbtn');
var cont3rightbtn=document.querySelector('.cont3rightbtn');
var arr2=["1","2","3","4","5","6","7","8","9","10"];
var length2=arr2.length;
var slide1child=document.querySelector('.cont3slider1child');
cont3leftbtn.onclick =()=>{
    if(length2 < arr2.length)
    {
        length2++;
    }
    else
    {
        length2=1;
    }
    slide1child.style.backgroundImage=`url(./img2/${arr2[length2-1]}.jpeg)`
}
cont3rightbtn.onclick =()=>{
    if(length2 > 1)
    {
        length2--;
    }
    else
    {
        length2=arr2.length;
    }
    slide1child.style.backgroundImage=`url(./img2/${arr2[length2-1]}.jpeg)`
}

var cont3leftbtns2=document.querySelector('.cont3leftbtns2');
var cont3rightbtns2=document.querySelector('.cont3rightbtns2');
var cont3slider2child=document.querySelector('.cont3slider2child');

cont3leftbtns2.onclick=()=>{
    cont3slider2child.style.left="-490px";
}
cont3rightbtns2.onclick=()=>{
    cont3slider2child.style.left="0px"; 
}

var c3tcrossicon=document.querySelector('.c3tcrossicon');
var cont3part1div=document.querySelector('.cont3part1div');

c3tcrossicon.onclick=()=>{
    cont3part1div.style.display="none";
    nav.style.display='block';
}
var c3t3btn1=document.querySelector('.c3t3btn1');
var c3tbtn1details=document.querySelector('.c3tbtn1details');
c3t3btn1.onclick=()=>{
    c3tbtn1details.style.display="block";
    c3tbtn1shipping.style.display="none";
    c3tbtn1dimensions.style.display="none";
    c3t3btn1.style.borderTop="1px solid black";
    c3t3btn1.style.borderLeft="1px solid black";
    c3t3btn1.style.borderRight="1px solid black";
    c3t3btn2.style.borderTop="none";
    c3t3btn2.style.borderLeft="none";
    c3t3btn2.style.borderRight="none";
    c3t3btn3.style.borderTop="none";
    c3t3btn3.style.borderLeft="none";
    c3t3btn3.style.borderRight="none";
    c3t3btn1.style.color="black";
    c3t3btn2.style.color="red";
    c3t3btn3.style.color="red";
}

var c3tbtn1shipping=document.querySelector('.c3tbtn1shipping');
var c3t3btn2=document.querySelector('.c3t3btn2');

c3t3btn2.onclick=()=>{
    c3tbtn1shipping.style.display="block";
    c3tbtn1details.style.display="none";
    c3tbtn1dimensions.style.display="none";
    
    c3t3btn2.style.borderTop="1px solid black";
    c3t3btn2.style.borderLeft="1px solid black";
    c3t3btn2.style.borderRight="1px solid black";
    c3t3btn1.style.borderTop="none";
    c3t3btn1.style.borderLeft="none";
    c3t3btn1.style.borderRight="none";
    c3t3btn3.style.borderTop="none";
    c3t3btn3.style.borderLeft="none";
    c3t3btn3.style.borderRight="none";
    c3t3btn1.style.color="red";
    c3t3btn2.style.color="black";
    c3t3btn3.style.color="red";
}

var c3t3btn3=document.querySelector('.c3t3btn3');
var c3tbtn1dimensions=document.querySelector('.c3tbtn1dimensions');

c3t3btn3.onclick=()=>{
    c3tbtn1dimensions.style.display="block";
    c3tbtn1shipping.style.display="none";
    c3tbtn1details.style.display="none";
    c3t3btn3.style.borderTop="1px solid black";
    c3t3btn3.style.borderLeft="1px solid black";
    c3t3btn3.style.borderRight="1px solid black";
    c3t3btn1.style.borderTop="none";
    c3t3btn1.style.borderLeft="none";
    c3t3btn1.style.borderRight="none";
    c3t3btn2.style.borderTop="none";
    c3t3btn2.style.borderLeft="none";
    c3t3btn2.style.borderRight="none";
    c3t3btn1.style.color="black";
    c3t3btn2.style.color="black";
    c3t3btn3.style.color="red";
}

var cont3part2div=document.querySelector('.cont3part2div');
var cont3pt3btn=document.querySelector('.cont3pt3btn');

cont3pt3btn.onclick=()=>{
    cont3part2div.style.display="block";
    nav.style.display="none";
}

var cont3part2div=document.querySelector('.cont3part2div');
var c3tcrossicon2=document.querySelector('.c3tcrossicon2');
c3tcrossicon2.onclick=()=>{
    cont3part2div.style.display='none';
nav.style.display="block";

}

var cont3leftbtn2=document.querySelector('.cont3leftbtn2');
var cont3rightbtn2=document.querySelector('.cont3rightbtn2');
var arr3=["1","2","3","4","5","6","7","8","9","10"];
var length3=arr3.length;
var slide1child2=document.querySelector('.cont3slider1child2');
cont3leftbtn2.onclick =()=>{
    if(length3 < arr3.length)
    {
        length3++;
    }
    else
    {
        length3=1;
    }
    slide1child2.style.backgroundImage=`url(./img3/${arr3[length3-1]}.jpeg)`
}
cont3rightbtn2.onclick =()=>{
    if(length3 > 1)
    {
        length3--;
    }
    else
    {
        length3=arr3.length;
    }
    slide1child2.style.backgroundImage=`url(./img3/${arr3[length3-1]}.jpeg)`
}

var cont3leftbtns22=document.querySelector('.cont3leftbtns22');
var cont3rightbtns22=document.querySelector('.cont3rightbtns22');
var cont3slider2child2=document.querySelector('.cont3slider2child2');

cont3leftbtns22.onclick=()=>{
    cont3slider2child2.style.left="-490px";
}
cont3rightbtns22.onclick=()=>{
    cont3slider2child2.style.left="0px"; 
}

var cont6pt1btn=document.querySelector('.cont6pt1btn');
var cont6part1div=document.querySelector('.cont6part1div');
var c6tcrossicon2=document.querySelector('.c6tcrossicon2');
cont6pt1btn.onclick=()=>{
    cont6part1div.style.display="block";
    nav.style.display='none';
}

c6tcrossicon2.onclick=()=>{
    cont6part1div.style.display='none';
    nav.style.display="block"
}

var cont6leftbtns22=document.querySelector('.cont6leftbtns22');
var cont6rightbtns22=document.querySelector('.cont6rightbtns22');
var cont6slider2child2=document.querySelector('.cont6slider2child2');

cont6leftbtns22.onclick=()=>{
    cont6slider2child2.style.left="-490px";
}
cont6rightbtns22.onclick=()=>{
    cont6slider2child2.style.left="0px"; 
}

var cont6leftbtn2=document.querySelector('.cont6leftbtn2');
var cont6rightbtn2=document.querySelector('.cont6rightbtn2');
var arr4=["1","2","3","4","5","6","7","8","9","10"];
var length4=arr4.length;
var cont6slider1child2=document.querySelector('.cont6slider1child2');
cont6leftbtn2.onclick =()=>{
    if(length4 < arr4.length)
    {
        length4++;
    }
    else
    {
        length4=1;
    }
    cont6slider1child2.style.backgroundImage=`url(./guitarcase1/${arr4[length4-1]}.jpeg)`
}
cont6rightbtn2.onclick =()=>{
    if(length4 > 1)
    {
        length4--;
    }
    else
    {
        length4=arr4.length;
    }
    cont6slider1child2.style.backgroundImage=`url(./guitarcase1/${arr4[length4-1]}.jpeg)`
}

var cont6pt2btn=document.querySelector('.cont6pt2btn');
var cont6part2div=document.querySelector('.cont6part2div');
var c6p2tcrossicon2=document.querySelector('.c6p2tcrossicon2');
cont6pt2btn.onclick=()=>{
    cont6part2div.style.display="block";
    nav.style.display='none';
}

c6p2tcrossicon2.onclick=()=>{
    cont6part2div.style.display='none';
    nav.style.display="block"
}

var cont6p2leftbtns22=document.querySelector('.cont6p2leftbtns22');
var cont6p2rightbtns22=document.querySelector('.cont6p2rightbtns22');
var cont6p2slider2child2=document.querySelector('.cont6p2slider2child2');

cont6p2leftbtns22.onclick=()=>{
    cont6p2slider2child2.style.left="-490px";
}
cont6p2rightbtns22.onclick=()=>{
    cont6p2slider2child2.style.left="0px"; 
}

var cont6p2leftbtn2=document.querySelector('.cont6p2leftbtn2');
var cont6p2rightbtn2=document.querySelector('.cont6p2rightbtn2');
var arr5=["1","2","3","4","5","6","7","8","9","10"];
var length5=arr5.length;
var cont6p2slider1child2=document.querySelector('.cont6p2slider1child2');
cont6p2leftbtn2.onclick =()=>{
    if(length5 < arr5.length)
    {
        length5++;
    }
    else
    {
        length5=1;
    }
    cont6p2slider1child2.style.backgroundImage=`url(./guitarcase2/${arr5[length5-1]}.jpeg)`
}
cont6p2rightbtn2.onclick =()=>{
    if(length5 > 1)
    {
        length5--;
    }
    else
    {
        length5=arr5.length;
    }
    cont6p2slider1child2.style.backgroundImage=`url(./guitarcase2/${arr5[length5-1]}.jpeg)`
}

var cont6pt3btn=document.querySelector('.cont6pt3btn');
var cont6part3div=document.querySelector('.cont6part3div');
var c6p3tcrossicon2=document.querySelector('.c6p3tcrossicon2');
cont6pt3btn.onclick=()=>{
    cont6part3div.style.display="block";
    nav.style.display='none';
}

c6p3tcrossicon2.onclick=()=>{
    cont6part3div.style.display='none';
    nav.style.display="block"
}

var cont6p3leftbtns22=document.querySelector('.cont6p3leftbtns22');
var cont6p3rightbtns22=document.querySelector('.cont6p3rightbtns22');
var cont6p3slider2child2=document.querySelector('.cont6p3slider2child2');

cont6p3leftbtns22.onclick=()=>{
    cont6p3slider2child2.style.left="-490px";
}
cont6p3rightbtns22.onclick=()=>{
    cont6p3slider2child2.style.left="0px"; 
}

var cont6p3leftbtn2=document.querySelector('.cont6p3leftbtn2');
var cont6p3rightbtn2=document.querySelector('.cont6p3rightbtn2');
var arr6=["1","2","3","4","5","6","7","8","9","10"];
var length6=arr6.length;
var cont6p3slider1child2=document.querySelector('.cont6p3slider1child2');
cont6p3leftbtn2.onclick =()=>{
    if(length6 < arr6.length)
    {
        length6++;
    }
    else
    {
        length6=1;
    }
    cont6p3slider1child2.style.backgroundImage=`url(./guitarcase3/${arr6[length6-1]}.jpeg)`
}
cont6p3rightbtn2.onclick =()=>{
    if(length6 > 1)
    {
        length6--;
    }
    else
    {
        length6=arr6.length;
    }
    cont6p3slider1child2.style.backgroundImage=`url(./guitarcase3/${arr6[length6-1]}.jpeg)`
}

var cont8pt1btn1=$('.cont8pt1btn1');
var cont8pt1div=$('.cont8pt1div');
var cont8pt1btn1span=document.querySelector('.cont8pt1btn1span');
cont8pt1btn1.click(()=>{
    cont8pt1div.slideToggle();
    if(cont8pt1btn1span.innerHTML=='+')
    {
        cont8pt1btn1span.innerHTML='-'
    }
    else
    {
        cont8pt1btn1span.innerHTML='+'

    }
})
var cont8pt1btn2=$('.cont8pt1btn2');
var cont8pt1div2=$('.cont8pt1div2');
var cont8pt1btn2span=document.querySelector('.cont8pt1btn2span');
cont8pt1btn2.click(()=>{
    cont8pt1div2.slideToggle();
    if(cont8pt1btn2span.innerHTML=='+')
    {
        cont8pt1btn2span.innerHTML='-'
    }
    else
    {
        cont8pt1btn2span.innerHTML='+'

    }
})

var cont8pt2div1btn=document.querySelector('.cont8pt2div1btn');
var cont8pt2div1white=document.querySelector('.cont8pt2div1white');
var c8p2div1tcrossicon=document.querySelector('.c8p2div1tcrossicon');
// console.log(cont8pt2div1btn,cont8pt2div1white,c8p2div1tcrossicon)

cont8pt2div1btn.onclick=()=>{
    cont8pt2div1white.style.display='block';
    nav.style.display='none';
}
c8p2div1tcrossicon.onclick=()=>{
    cont8pt2div1white.style.display='none';
    nav.style.display='block';
}

var cont8pt2div1leftbtn2=document.querySelector('.cont8pt2div1leftbtn2');
var cont8pt2div1rightbtn2=document.querySelector('.cont8pt2div1rightbtn2');
var arr7=["1","2","3","4"];
var length7=arr7.length;
var cont8pt2div1child2=document.querySelector('.cont8pt2div1child2');
cont8pt2div1leftbtn2.onclick =()=>{
    if(length7 < arr7.length)
    {
        length7++;
    }
    else
    {
        length7=1;
    }
    cont8pt2div1child2.style.backgroundImage=`url(./fwallet1/${arr7[length7-1]}.webp)`
}
cont8pt2div1rightbtn2.onclick =()=>{
    if(length7 > 1)
    {
        length7--;
    }
    else
    {
        length7=arr7.length;
    }
    cont8pt2div1child2.style.backgroundImage=`url(./fwallet1/${arr7[length7-1]}.webp)`
}



var cont8pt2div3btn=document.querySelector('.cont8pt2div3btn');
var cont8pt2div3white=document.querySelector('.cont8pt2div3white');
var c8p2div3tcrossicon=document.querySelector('.c8p2div3tcrossicon');
// console.log(cont8pt2div1btn,cont8pt2div1white,c8p2div1tcrossicon)

cont8pt2div3btn.onclick=()=>{
    cont8pt2div3white.style.display='block';
    nav.style.display='none';
}
c8p2div3tcrossicon.onclick=()=>{
    cont8pt2div3white.style.display='none';
    nav.style.display='block';
}

var cont8pt2div3leftbtn2=document.querySelector('.cont8pt2div3leftbtn2');
var cont8pt2div3rightbtn2=document.querySelector('.cont8pt2div3rightbtn2');
var arr8=["1","2","3"];
var length8=arr8.length;
var cont8pt2div3child2=document.querySelector('.cont8pt2div3child2');
cont8pt2div3leftbtn2.onclick =()=>{
    if(length8 < arr8.length)
    {
        length8++;
    }
    else
    {
        length8=1;
    }
    cont8pt2div3child2.style.backgroundImage=`url(./fwallet3/${arr8[length8-1]}.jpeg)`
}
cont8pt2div3rightbtn2.onclick =()=>{
    if(length8 > 1)
    {
        length8--;
    }
    else
    {
        length8=arr8.length;
    }
    cont8pt2div3child2.style.backgroundImage=`url(./fwallet3/${arr8[length8-1]}.jpeg)`
}


var cont8pt2div2btn=document.querySelector('.cont8pt2div2btn');
var cont8pt2div2white=document.querySelector('.cont8pt2div2white');
var c8p2div2tcrossicon=document.querySelector('.c8p2div2tcrossicon');
// console.log(cont8pt2div1btn,cont8pt2div1white,c8p2div1tcrossicon)

cont8pt2div2btn.onclick=()=>{
    cont8pt2div2white.style.display='block';
    nav.style.display='none';
}
c8p2div2tcrossicon.onclick=()=>{
    cont8pt2div2white.style.display='none';
    nav.style.display='block';
}

var cont8pt2div2leftbtn2=document.querySelector('.cont8pt2div2leftbtn2');
var cont8pt2div2rightbtn2=document.querySelector('.cont8pt2div2rightbtn2');
var arr9=["1","2","3","4"];
var length9=arr9.length;
var cont8pt2div2child2=document.querySelector('.cont8pt2div2child2');
cont8pt2div2leftbtn2.onclick =()=>{
    if(length9 < arr9.length)
    {
        length9++;
    }
    else
    {
        length9=1;
    }
    cont8pt2div2child2.style.backgroundImage=`url(./fwallet2/${arr9[length9-1]}.webp)`
}
cont8pt2div2rightbtn2.onclick =()=>{
    if(length9 > 1)
    {
        length9--;
    }
    else
    {
        length9=arr9.length;
    }
    cont8pt2div2child2.style.backgroundImage=`url(./fwallet2/${arr9[length9-1]}.webp)`
}

var uldiv=document.querySelector('.uldiv');
var rightcart=document.querySelector('.rightcart');
var rightcartbtn=document.querySelector('.rightcartbtn');
var c3tbtn5=document.querySelector('.c3tbtn5');
var list=document.querySelector('.list');
/* vintage messenger bag getting element */
var cont3pt2img=document.querySelector('.cont3pt2img>img').src;
var cont3pt2pa1=document.querySelector('.cont3pt2pa1').innerText;
var cont3pt2pa2=document.querySelector('.cont3pt2pa2').innerText;
// console.log(cont3pt2img,cont3pt2pa1,cont3pt2pa2);

uldiv.onclick= ()=>{
    rightcart.style.right='-1%';
    console.log(uldiv);
}
rightcartbtn.onclick=()=>{
    rightcart.style.right='-30%';
}

c3tbtn5.onclick=()=>{
    var no=1;
    list.innerHTML+=`<div class="list1"><img src="${cont3pt2img}" class="listimg"><p class="listpa">${cont3pt2pa1}<br> ${cont3pt2pa2} <br> <span class="itemtotalspan"><b>Item Total: ${cont3pt2pa2}</b></span></p><div class="buttons"><button class="minusbutton">-</button><div class="counting">${no}</div><button class="plusbutton">+</button></div></div>` ;
    
    var plusbutton=document.querySelector('.list1 .plusbutton');
    var minusbutton=document.querySelector('.list1 .minusbutton');
    var counting=document.querySelector('.list1 .counting');
    var itemtotalspan=document.querySelector('.list1 .itemtotalspan');
    var list1=document.querySelector('.list1');
    plusbutton.onclick=()=>{
        no++;
        var itemtotalval=no*295.00;
        counting.innerHTML=`${no}`;
        itemtotalspan.innerHTML =`<b>Item Total: ${itemtotalval} USD</b>`
        if(counting.innerText == 0)
        {
         list1.remove();
        }
    }
    minusbutton.onclick=()=>{
        no--;
        var itemtotalval=no*295.00;
        counting.innerHTML=`${no}`;
        itemtotalspan.innerHTML =`<b>Item Total: ${itemtotalval} USD</b>`
        if(counting.innerText == 0)
        {
        list1.remove();
        }   
    }   
}

var c3tbtn6=document.querySelector('.c3tbtn6');
var cont3pt2img2=document.querySelector('.cont3pt2img2>img').src;
var cont3pt2pa11=document.querySelector('.cont3pt3 .cont3pt2pa1').innerHTML;
var cont3pt2pa21=document.querySelector('.cont3pt3 .cont3pt2pa2').innerHTML;
console.log(cont3pt2img2,cont3pt2pa1,cont3pt2pa2);

c3tbtn6.onclick=()=>{
    var no=1;
    list.innerHTML+=`<div class="list2"><img src="${cont3pt2img2}" class="listimg"><p class="listpa">${cont3pt2pa11}<br> ${cont3pt2pa21} <br> <span class="itemtotalspan"><b>Item Total: ${cont3pt2pa21}</b></span></p><div class="buttons"><button class="minusbutton">-</button><div class="counting">${no}</div><button class="plusbutton">+</button></div></div>` ;
    
    var plusbuttonl2=document.querySelector('.list2 .plusbutton');
    var minusbuttonl2=document.querySelector('.list2 .minusbutton');
    var countingl2=document.querySelector('.list2 .counting');
    var itemtotalspanl2=document.querySelector('.list2 .itemtotalspan');
    var list2=document.querySelector('.list2');
    console.log(minusbuttonl2);
    plusbuttonl2.onclick=()=>{
        console.log("sdfgsf");
        no++;
        var itemtotalval=no*295.00;
        countingl2.innerHTML=`${no}`;
        itemtotalspanl2.innerHTML =`<b>Item Total: ${itemtotalval} USD</b>`
        if(countingl2.innerText == 0)
        {
         list2.remove();
        }
    }
    minusbuttonl2.onclick=()=>{
        no--;
        var itemtotalval=no*295.00;
        countingl2.innerHTML=`${no}`;
        itemtotalspanl2.innerHTML =`<b>Item Total: ${itemtotalval} USD</b>`
        if(countingl2.innerText == 0)
        {
        list2.remove();
        }   
    }
}
