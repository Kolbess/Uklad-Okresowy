function getButtonClass(event) {
    var clickedButton = event.target;
    var buttonClass = clickedButton.classList[0];
    return buttonClass;
}

var buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
    button.addEventListener('click', getButtonClass);
});


function info() {
    pierwiastek = getButtonClass(event);
    // alert(pierwiastek);
    if (pierwiastek == "1" || pierwiastek == "div1"){
        value1 = "Nazwa: Wodór";
        value2 = "Symbol: H";
        value3 = "Typ: Niemetale";
        value4 = "Masa Atomowa: 1,008u";
        value5 = "Powłoki Elektronowe: 1";
        value6 = "Elektroujemność: " + "2,20";
        value7 = "Stan Skupienia w 0°C: " + "Gaz" ;
        value8 = "Temperatura Topnienia: " + "-259,1°C"; 
        value9 = "Temperatura Wrzenia: " + "-252,9°C";
        value10 = "Odkryty: " + "1766 n.e.";
        changeinfo();
        } else if (pierwiastek == "2" || pierwiastek == "div2"){
            value1 = "Nazwa: Hel";
            value2 = "Symbol: He";
            value3 = "Typ: Helowce";
            value4 = "Masa Atomowa: 4,0026u";
            value5 = "Powłoki Elektronowe: 2";
            value6 = "Elektroujemność: " + "N/A";
            value7 = "Stan Skupienia w 0°C: " + "Gaz" ;
            value8 = "Temperatura Topnienia: " + "N/A"; 
            value9 = "Temperatura Wrzenia: " + "-269°C";
            value10 = "Odkryty: " + "1895 n.e.";
            changeinfo();
            } else if (pierwiastek == "3" || pierwiastek == "div3"){
                value1 = "Nazwa: " + "Lit";
                value2 = "Symbol: " + "Li";
                value3 = "Typ: " + "Litowce";
                value4 = "Masa Atomowa: " + "6,94u";
                value5 = "Powłoki Elektronowe: " + "2, 1";
                value6 = "Elektroujemność: " + "0,98";
                value7 = "Stan Skupienia w 0°C: " + "Ciało stałe" ;
                value8 = "Temperatura Topnienia: " + "180,54°C"; 
                value9 = "Temperatura Wrzenia: " + "1342°C";
                value10 = "Odkryty: " + "1817 n.e.";
                changeinfo();
                } else if (pierwiastek == "4" || pierwiastek == "div4"){
                    value1 = "Nazwa: Beryl";
                    value2 = "Symbol: Be";
                    value3 = "Typ: Berylowce";
                    value4 = "Masa Atomowa: 9,0121831u";
                    value5 = "Powłoki Elektronowe: 2, 2";
                    value6 = "Elektroujemność: " + "1,57";
                    value7 = "Stan Skupienia w 0°C: " + "Ciało stałe";
                    value8 = "Temperatura Topnienia: " + "1287°C";
                    value9 = "Temperatura Wrzenia: " + "2470°C";
                    value10 = "Odkowany: " + "1797 p.n.e.";
                    changeinfo();
                    } else if (pierwiastek == "5" || pierwiastek == "div5"){
                        value1 = "Nazwa: Bor";
                        value2 = "Symbol: B";
                        value3 = "Typ: Półmetale";
                        value4 = "Masa Atomowa: 10,81u";
                        value5 = "Powłoki Elektronowe: 2, 3";
                        value6 = "Elektroujemność: " + "2,04";
                        value7 = "Stan Skupienia w 0°C: " + "Ciało stałe";
                        value8 = "Temperatura Topnienia: " + "2075°C";
                        value9 = "Temperatura Wrzenia: " + "4000°C";
                        value10 = "Odkowany: " + "1808 n.e.";
                        changeinfo();
                        } else if (pierwiastek == "6" || pierwiastek == "div6"){
                            value1 = "Nazwa: Węgiel";
                            value2 = "Symbol: C";
                            value3 = "Typ: Niemetale";
                            value4 = "Masa Atomowa: 12,011u";
                            value5 = "Powłoki Elektronowe: 2, 4";
                            value6 = "Elektroujemność: " + "2,55";
                            value7 = "Stan Skupienia w 0°C: " + "Ciało stałe";
                            value8 = "Temperatura Topnienia: " + "3642°C";
                            value9 = "Temperatura Wrzenia: " + "3642°C";
                            value10 = "Odkowany: " + "3750 p.n.e.";
                            changeinfo();
                            } else if (pierwiastek == "7" || pierwiastek == "div7"){
                                value1 = "Nazwa: Azot";
                                value2 = "Symbol: N";
                                value3 = "Typ: Niemetale";
                                value4 = "Masa Atomowa: 14,007u";
                                value5 = "Powłoki Elektronowe: 2, 5";
                                value6 = "Elektroujemność: " + "3,04";
                                value7 = "Stan Skupienia w 0°C: " + "Gaz";
                                value8 = "Temperatura Topnienia: " + "-210,1°C";
                                value9 = "Temperatura Wrzenia: " + "-195,8°C";
                                value10 = "Odkowany: " + "1772 n.e.";
                                changeinfo();
                                } else if (pierwiastek == "8" || pierwiastek == "div8"){
                                    value1 = "Nazwa: Tlen";
                                    value2 = "Symbol: O";
                                    value3 = "Typ: Niemetale";
                                    value4 = "Masa Atomowa: 15,999u";
                                    value5 = "Powłoki Elektronowe: 2, 6";
                                    value6 = "Elektroujemność: " + "3,44";
                                    value7 = "Stan Skupienia w 0°C: " + "Gaz";
                                    value8 = "Temperatura Topnienia: " + "-218°C";
                                    value9 = "Temperatura Wrzenia: " + "-183°C";
                                    value10 = "Odkowony: " + "1774 n.e.";
                                    changeinfo();
                                }


};
    
    function changeinfo() {
        document.getElementById('Nazwa').textContent = value1;
        document.getElementById('Symbol').textContent = value2;
        document.getElementById('Typ').textContent = value3;
        document.getElementById('Masa').textContent = value4;
        document.getElementById('Powloki').textContent = value5;
        document.getElementById('Elektroujemnosc').innerHTML = value6;
        document.getElementById('Stan').innerHTML = value7;
        document.getElementById('Topnienie').innerHTML = value8;
        document.getElementById('Wrzenie').innerHTML = value9;
        document.getElementById('Odkryty').innerHTML = value10;
    }

