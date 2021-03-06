const string = `.skin *{box-sizing: border-box;}
.skin *::before,.skin *::after{box-sizing: border-box;}
.skin{
  position: relative;
  min-height: 80vh;
  background: #ffe600;
}

.nose{
    position: relative;
    border: 2px solid black;
    background: red;
    width: 40px;
    height: 40px;
    left: 50%;
    top: 140px;
    margin-left: -20px;
    border-radius: 100%;
    z-index: 10;
}

.highlight{
    position: absolute;
    background: white;
    width: 10px;
    height: 10px;
    left: 50%;
    top: 5px;
    margin-left: -15px;
    border-radius: 100%;
}

.line{
    position: absolute;
    background: black;
    width: 3px;
    height: 144px;
    left: 50%;
    top: 132px;
    margin-left: -2px;
    z-index: 8;
}

.eye{
    position: absolute;
    background: white;
    border: 3px solid black;
    width: 75px;
    height: 100px;
    left: 50%;
    top: 75px;
    border-radius: 50%;
    z-index: 7;
}

.eyeball{
    border: 2px solid black;
    width: 30px;
    height: 40px;
    background: black;
    border-radius: 50%;
    position: absolute;
    left: 20px;
    top: 25px;
}
.eye::before{
    content:'';
    display: block;
    border: 2px solid black;
    width: 15px;
    height: 20px;
    background: white;
    border-radius: 50%;
    position: absolute;
    left: 22px;
    top: 30px;
    z-index: 6;
}
.eye.right{
    transform: translateX(-75px);
}

.eye.left{
    transform: translateX(-2px);
}

.face1{
   position: relative;
   border: 3px solid black;
   width: 275px;
   height: 250px;
   border-radius: 50%;
   left: 50%;
   top: 75px;
   margin-left: -135px;
   z-index: 4;
}

.mouth{
    position: relative;
    border: 3px solid black;
    width: 200px;
    height: 100px;
    border-top-color: transparent;
    border-bottom-left-radius: 50% 100%;
    border-bottom-right-radius: 50% 100%; 
    left: 50%;
    margin-left: -90px;
    top: -40px;
    transform: rotate(-10deg);
    overflow: hidden;
    z-index: 2;
    background-color: #e1002a;
}

.tongue{
    position: absolute;
    border-radius: 95% 70% 50% 79% /100% 47% 50% 50%;
    border: 3px solid #261815;
    transform: rotate(10deg);
    width: 150px;
    height: 75px;
    left: 50%;
    top: 40px;
    margin-left: -75px;
    z-index: 1;
    overflow: hidden;
    background-color: #ee7c1b;
}

.goatee{
    position: relative;
    border: 3px solid black;
    height: 100px;
    width: 220px;
    left: 50%;
    top: -190px;
    margin-left: -111px;
    z-index: 3;
    background-color: white;
    border-color: transparent transparent #261815 transparent;
    border-bottom-left-radius: 71% 58%;
    transform-origin: bottom left;
    transform: rotate(-10deg);
}

.goatee::before{
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    top: 39px;
    left: -2px;
    z-index: 2;
    border-style: solid;
    border-color: black black transparent #261815;
    border-width: 3px;
    border-radius: 100%;
    transform-origin: top left;
    transform: rotate(-30deg);
}

.left-beard, .left-beard::before, .left-beard::after {
    position: absolute;
    height: 10px;
    width: 120px;
    top: 220px;
    left: 50%;
    margin-left: -175px;
    z-index: 8;
    border-style: solid;
    border-width: 3px;
    border-color: #261815 transparent transparent;
    border-top-left-radius: 50% 40%;
    border-top-right-radius: 50% 40%;
    transform: rotate(5deg);
}

.left-beard::before, .left-beard::after {
    content: '';
    width: 110px;
    top: -22px;
    left: 50%;
    margin-left: -50px;
    transform-origin: top right;
    transform: rotate(14deg);
}

.left-beard::after {
    top: 16px;
    left: 50%;
    transform: rotate(-15deg);
}

.right-beard, .right-beard::before, .right-beard::after {
    position: absolute;
    height: 10px;
    width: 125px;
    top: 225px;
    left: 50%;
    margin-left: 50px;
    z-index: 8;
    border-style: solid;
    border-width: 3px;
    border-color: #261815 transparent transparent;
    border-top-left-radius: 50% 40%;
    border-top-right-radius: 50% 40%;
    transform-origin: top left;
    transform: rotate(-8deg);
}

.right-beard::before, .right-beard::after {
    content: '';
    left: 50%px;
    margin-left: -60px;
    top: -24px;
    transform: rotate(-12deg);
}

.right-beard::after {
    left: 50%;
    top: 15px;
    transform: rotate(20deg);
}

.head{
    position: relative;
    border: 3px solid black;
    width: 325px;
    height: 325px;
    border-radius: 75% 75% 70% 70% / 75% 75% 75% 75%;
    left: 50%;
    top: -700px;
    background-color: #00a0e8;
    margin-left: -160px;
    z-index: 0;
 }

 .whiting{
    position: relative;
    border: 3px solid black;
    width: 275px;
    height: 250px;
    border-radius: 50%;
    left: 50%;
    top: -375px;
    margin-left: -135px;
    background: white;
    z-index: 1;
 }

 
.neck {
        position: absolute;
        height: 20px;
        width: 150px;
        top: 350px;
        left: 50%;
        margin-left: -75px;
        z-index: 2;
        border: 3px solid #261815;
        border-radius: 15px;
        background-color: #e1002a;
        z-index: 4;
}

.small-bell {
    position: absolute;
    height: 40px;
    width: 40px;
    top: 360px;
    left: 50%;
    margin-left: -20px;
    z-index: 2;
    border-radius: 50%;
    border: 3px solid #261815;
    background-color: #fde53a;
    z-index: 5;
}

.small-bell::before {
    content: '';
    position: absolute;
    width: 46px;
    height: 8px;
    top: 13px;
    left: 50%;
    margin-left: -23px;
    border: 3px solid #261815;
    background-color: #fde53a;
    border-radius: 8px;
    border-top-left-radius: 50% 100%;
    border-top-right-radius: 50% 100%;
}

.circle01 {
    position: absolute;
    height: 8px;
    width: 16px;
    top: 380px;
    left: 50%;
    margin-left: -8px;
    background-color: #776b53;
    border-radius: 50%;
    border: 3px solid #261815;
    z-index: 6;
}

.circle01::before {
    content: '';
    position: absolute;
    height: 15px;
    width: 10px;
    top: 3px;
    left: 50%;
    margin-left: -8px;
    border-style: solid;
    border-color: transparent #261815 transparent transparent;
    border-top-right-radius: 50% 100%;
    border-bottom-right-radius: 50% 100%;
}

.pocket {
    position: absolute;
    height: 150px;
    width: 150px;
    top: 350px;
    left: 50%;
    margin-left: -75px;
    border: 3px solid #261815;
    background-color: #fff;
    border-radius: 50px 50px 75px 75px;
    z-index: 2;
}

.pocket::before {
    content: '';
    position: absolute;
    width: 100px;
    height: 60px;
    top: 70px;
    left: 50%;
    margin-left: -50px;
    border: 3px solid #261815;
    border-top-left-radius: 10% 10%;
    border-top-right-radius: 10% 10%;
    border-bottom-left-radius: 50% 100%;
    border-bottom-right-radius: 50% 100%;
}

.duola-body {
    position: relative;
    width: 200px;
    height: 180px;
    top: -700px;
    left: 50%;
    margin-left: -100px;
    background-color: #00a0e8;
    border: 3px solid #261815;
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-radius: 20px;
    transform: rotate(-2deg);
}

.right-arm {
    position: absolute;
    width: 102px;
    height: 80px;
    top: 340px;
    left: 50%;
    margin-left: -177px;
    z-index: 2;
    background-color: #00a0e8;
    border: 3px solid #261815;
    border-right-color: transparent;
    border-top-left-radius: 89% 42%;
    border-bottom-left-radius: 88% 51%;
    transform: rotate(15deg);
}

.right-arm::before {
    content: '';
    width: 70px;
    height: 70px;
    position: absolute;
    top: -14px;
    left: 50%;
    margin-left: -70px;
    border: 3px solid #261815;
    border-radius: 50%;
    background-color: #fff;
}

.left-arm {
    position: absolute;
    width: 102px;
    height: 80px;
    top: 340px;
    left: 50%;
    margin-left: 80px;
    z-index: 2;
    background-color: #00a0e8;
    border: 3px solid #261815;
    border-right-color: transparent;
    border-top-left-radius: 89% 42%;
    border-bottom-left-radius: 88% 51%;
    transform: rotate(165deg);
   
}

.left-arm::before {
    content: '';
    width: 70px;
    height: 70px;
    position: absolute;
    top: 6px;
    left: 50%;
    margin-left: -80px;
    border: 3px solid #261815;
    border-radius: 50%;
    background-color: #fff;
}


.duola-body::after {
    content: '';
    position: absolute;
    height: 200px;
    width: 400px;
    top: 130px;
    left: 50%;
    margin-left: -190px;
    z-index: 2;
    border-style: solid;
    border-color: #261815 transparent transparent;
    border-width: 3px;
    border-radius: 50%;
    background-color: #ffe600;
}
`
export default string;