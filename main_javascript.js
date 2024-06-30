  //変数
    //HTML指定
    const text = document.querySelector("#box1");
    const button = document.getElementById("TPRE_button");
    let color = "red";
    //HTML変更
    document.getElementById("box1").innerText = "TPRE Singal";
    //ボタン押されたとき
    function warning() {
        //ボタン押せないように変更
        button.disabled = "disabled";
        //ボタン文字変更
        document.getElementById("TPRE_button").value = "TPRE ACTIVE!";
        //下のテキスト変更
        document.getElementById("text1").innerText = "INFORMATION:\nLEVEL:WARNING\n\nA protecive radio signal has been issued!\nCRW members must immediately make an emergency stop and switch automaic operation to manual.\n\nLOCATE:MR187-5 PLATHOME to 5m\n\nETPS:Train Speed <25km/h\n\nETPS...Emegency Train Protect System";
        //500msごとに実行
        const interval = setInterval(function() {
            // https://cdn.discordapp.com/attachments/1244261291049222155/1244261426592481350/WARNING_2.mp3?ex=66567281&is=66552101&hm=ed8cdacb23d3fdd02e838fd3fe0f6cdbc5c459d0c49b403a508b5148381cd809&
	        //
            if (color == "red") {
                color = "white"
                //white
                text.style.backgroundColor = "#FFFFFF";
    
                document.getElementById("box1").innerText = "TPRE Singal";
            } else {
                color = "red"
                //red
                text.style.backgroundColor = "#FF0000";
                
                document.getElementById("box1").innerText = "WARNING!";
            }

        }, 500);
    }
