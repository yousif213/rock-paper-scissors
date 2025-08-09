const gameContainer=document.querySelector(".containers");
const userResult=document.querySelector(".user-result img");
const cpuResult=document.querySelector(".cpu-result img");
const result=document.querySelector(".result");
const opitionImages=document.querySelectorAll(".option-image");

//loop through each option images
opitionImages.forEach((image,index)=>{
    image.addEventListener("click",(e)=>{
        image.classList.add("active")

        userResult.src=cpuResult.src="images/rock.png";
        result.textContent="wait..."

        //loop
        opitionImages.forEach((image2,index2)=>{
            index!=index2 && image2.classList.remove("active")
        })
        gameContainer.classList.add("start")
        //set a time out for intense
        let time =setTimeout(()=>{
            gameContainer.classList.remove("start")
            let imageSrc=e.target.querySelector("img").src
            userResult.src=imageSrc
            let randNum=Math.floor(Math.random()*3)
            //create array 
            let cpuImages=[
                "images/rock.png",
                "images/paper.png",
                "images/scissors.png"
            ];
            //set the cpu img
            cpuResult.src=cpuImages[randNum]

            //set latters
            let cpuValues=["R","P","S"][randNum]
            let userValue=["R","P","S"][index]
            //all possible cases
            let outComes={
                RR: "Draw",
                RP: "Computer",
                RS: "User",
                PP: "Draw",
                PR: "User",
                PS: "Computer",
                SS: "Draw",
                SR: "Computer",
                SP: "User",
            };
            let outComesValue=outComes[userValue+cpuValues]

            result.textContent=userValue===cpuValues ? "match Draw":`${outComesValue} is the winner`
        },2500)
    })
})