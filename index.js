class cricket{
    constructor(r1,s1,p1,w1,b1,p,w,b,o,score,arr){
        this.r1=r1;
        this.s1=s1;
        this.p1=p1;
        this.w1=w1;
        this.b1=b1;
        this.p=p;
        this.w=w;
        this.b=b;
        this.o=o;
        this.score=score;
        this.arr=arr;
        //let p=1,w=0,b=36,o=0,score=0;

    }
    
    play(){
        if(this.w>=10 || this.b<=0){
            alert("Game Over");
            return [this.score,this.arr];
        }
        this.o+=1;
        let r= Math.floor(Math.random() * 7);
        document.getElementById(this.r1).value=r;
        this.score += parseInt(r);
        document.getElementById(this.s1).value=this.score;
        document.getElementById(this.p1).value=this.p;
        if(r==0){this.w+=1;}
        document.getElementById(this.w1).value=this.w;
        let bl1=document.getElementById(this.b1).value;
        this.b=parseInt(bl1)-1;
        document.getElementById(this.b1).value=this.b;
        if(this.o==6 || r==0){
            this.o=0;
            this.arr.push(this.score);
            this.p+=1;}
        //alert(this.score)
        
    }
}
let a=new cricket("r1","s1","p1","w1","b1",1,0,36,0,0,arr=[]);
let b=new cricket("r2","s2","p2","w2","b2",1,0,36,0,0,arr=[]);
function play1(){
    let [n,arr1]=a.play();
    if(n!="undefined"){
        localStorage.setItem("Score1",n);
        let p1s=[];
        for(var i=0;i<arr1.length-1;i++){p1s[i].push(arr1[i+1]-arr1[i])}
        JSON.stringify(p1s);
        localStorage.setItem("p1",JSON.stringify(p1s));
    }
}
function play2(){
    let [m,arr2]=b.play();
    if(m!="undefined"){
        localStorage.setItem("Score2",m);
        let p2s=[];
        for(var i=0;i<arr2.length-1;i++){p2s[i].push(arr2[i+1]-arr2[i])}
        JSON.stringify(p2s);
        localStorage.setItem("p2",JSON.stringify(p2s));
    }
}
