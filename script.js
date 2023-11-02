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
                    value10 = "Odkryty: " + "1797 p.n.e.";
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
                        value10 = "Odkryty: " + "1808 n.e.";
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
                            value10 = "Odkryty: " + "3750 p.n.e.";
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
                                value10 = "Odkryty: " + "1772 n.e.";
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
                                    value10 = "Odkryty: " + "1774 n.e.";
                                    changeinfo();
                                    } else if (pierwiastek == "9" || pierwiastek == "div9"){
                                        value1 = "Nazwa: Flour";
                                        value2 = "Symbol: F";
                                        value3 = "Typ: Niemetale";
                                        value4 = "Masa Atomowa: 18,988u";
                                        value5 = "Powłoki Elektronowe: 2, 7";
                                        value6 = "Elektroujemność: " + "3,98";
                                        value7 = "Stan Skupienia w 0°C: " + "Gaz";
                                        value8 = "Temperatura Topnienia: " + "-220°C";
                                        value9 = "Temperatura Wrzenia: " + "-188,1°C";
                                        value10 = "Odkryty: " + "1886 n.e.";
                                        changeinfo();
                                        } else if (pierwiastek == "10" || pierwiastek == "div10"){
                                            value1 = "Nazwa: Neon";
                                            value2 = "Symbol: Ne";
                                            value3 = "Typ: Helowce";
                                            value4 = "Masa Atomowa: 20,1797u";
                                            value5 = "Powłoki Elektronowe: 2, 8";
                                            value6 = "Elektroujemność: " + "N/A";
                                            value7 = "Stan Skupienia w 0°C: " + "Gaz";
                                            value8 = "Temperatura Topnienia: " + "-248,6°C";
                                            value9 = "Temperatura Wrzenia: " + "-246,1°C";
                                            value10 = "Odkryty: " + "1898 n.e.";
                                            changeinfo();
                                            } else if (pierwiastek == "11" || pierwiastek == "div11"){
                                                value1 = "Nazwa: Sód";
                                                value2 = "Symbol: Na";
                                                value3 = "Typ: Litowce";
                                                value4 = "Masa Atomowa: 22,9898u";
                                                value5 = "Powłoki Elektronowe: 2, 8, 1";
                                                value6 = "Elektroujemność: " + "0,93";
                                                value7 = "Stan Skupienia w 0°C: " + "Ciało stałe";
                                                value8 = "Temperatura Topnienia: " + "97,720°C";
                                                value9 = "Temperatura Wrzenia: " + "882,9°C";
                                                value10 = "Odkryty: " + "1807 n.e.";
                                                changeinfo();
                                                } else if (pierwiastek == "12" || pierwiastek == "div12"){
                                                    value1 = "Nazwa: Magnez";
                                                    value2 = "Symbol: Mg";
                                                    value3 = "Typ: Berylowce";
                                                    value4 = "Masa Atomowa: 24,305u";
                                                    value5 = "Powłoki Elektronowe: 2, 8, 2";
                                                    value6 = "Elektroujemność: " + "1,31";
                                                    value7 = "Stan Skupienia w 0°C: Ciało stałe"
                                                    value8 = "Temperatura Topnienia: " + "650°C";
                                                    value9 = "Temperatura Wrzenia: " + "1090°C";
                                                    value10 = "Odkryty: " + "1755 n.e.";
                                                    changeinfo();
                                                    } else if (pierwiastek == "13" || pierwiastek == "div13"){
                                                        value1 = "Nazwa: Glin";
                                                        value2 = "Symbol: Al";
                                                        value3 = "Typ: Metale Nieszlachetne";
                                                        value4 = "Masa Atomowa: 26,9815384u";
                                                        value5 = "Powłoki Elektronowe: 2, 8, 3";
                                                        value6 = "Elektroujemność: 1,61";
                                                        value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                        value8 = "Temperatura Topnienia: 660,32°C";
                                                        value9 = "Temperatura Wrzenia: 2519°C";
                                                        value10 = "Odkryty: 1825 n.e.";
                                                        changeinfo();
                                                        } else if (pierwiastek == "14" || pierwiastek == "div14"){
                                                            value1 = "Nazwa: Krzem";
                                                            value2 = "Symbol: Si";
                                                            value3 = "Typ: Półmetale";
                                                            value4 = "Masa Atomowa: 28,085u";
                                                            value5 = "Powłoki Elektronowe: 2, 8, 4";
                                                            value6 = "Elektroujemność: 1,90";
                                                            value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                            value8 = "Temperatura Topnienia: 1414°C";
                                                            value9 = "Temperatura Wrzenia: 2900°C";
                                                            value10 = "Odkryty: 1824 n.e.";
                                                            changeinfo();
                                                            } else if (pierwiastek == "15" || pierwiastek == "div15"){
                                                                value1 = "Nazwa: Fosfor";
                                                                value2 = "Symbol: P";
                                                                value3 = "Typ: Niemetale";
                                                                value4 = "Masa Atomowa: 30,9738u";
                                                                value5 = "Powłoki Elektronowe: 2, 8, 5";
                                                                value6 = "Elektroujemność: 2,19";
                                                                value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                                value8 = "Temperatura Topnienia: 44,15°C";
                                                                value9 = "Temperatura Wrzenia: 280,5°C";
                                                                value10 = "Odkryty: 1669 n.e.";
                                                                changeinfo();
                                                                } else if (pierwiastek == "16" || pierwiastek == "div16"){
                                                                    value1 = "Nazwa: Siarka";
                                                                    value2 = "Symbol: S";
                                                                    value3 = "Typ: Niemetale";
                                                                    value4 = "Masa Atomowa: 32,06u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 6";
                                                                    value6 = "Elektroujemność: 2,58";
                                                                    value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                                    value8 = "Temperatura Topnienia: 115,21°C";
                                                                    value9 = "Temperatura Wrzenia: 444,72°C";
                                                                    value10 = "Odkryty: 500 p.n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "17" || pierwiastek == "div17"){
                                                                    value1 = "Nazwa: Chlor";
                                                                    value2 = "Symbol: Cl";
                                                                    value3 = "Typ: Niemetale";
                                                                    value4 = "Masa Atomowa: 35,45u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 7";
                                                                    value6 = "Elektroujemność: 3,16";
                                                                    value7 = "Stan Skupienia w 0°C: Gaz";
                                                                    value8 = "Temperatura Topnienia: -101,5°C";
                                                                    value9 = "Temperatura Wrzenia: -34,040°C";
                                                                    value10 = "Odkryty: 1774 n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "18" || pierwiastek == "div18"){
                                                                    value1 = "Nazwa: Argon";
                                                                    value2 = "Symbol: Ar";
                                                                    value3 = "Typ: Niemetale";
                                                                    value4 = "Masa Atomowa: 39,948u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 8";
                                                                    value6 = "Elektroujemność: N/A";
                                                                    value7 = "Stan Skupienia w 0°C: Gaz";
                                                                    value8 = "Temperatura Topnienia: -189°C";
                                                                    value9 = "Temperatura Wrzenia: -186°C";
                                                                    value10 = "Odkryty: 1894 n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "19" || pierwiastek == "div19"){
                                                                    value1 = "Nazwa: Potas";
                                                                    value2 = "Symbol: K";
                                                                    value3 = "Typ: Litowce";
                                                                    value4 = "Masa Atomowa: 39,0983u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 8, 1";
                                                                    value6 = "Elektroujemność: 0,82";
                                                                    value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                                    value8 = "Temperatura Topnienia: 63,380°C";
                                                                    value9 = "Temperatura Wrzenia: 758,9°C";
                                                                    value10 = "Odkryty: 1807 n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "20" || pierwiastek == "div20"){
                                                                    value1 = "Nazwa: Wapń";
                                                                    value2 = "Symbol: Ca";
                                                                    value3 = "Typ: Berylowce";
                                                                    value4 = "Masa Atomowa: 40,078u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 8, 2";
                                                                    value6 = "Elektroujemność: 1,0";
                                                                    value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                                    value8 = "Temperatura Topnienia: 841,9°C";
                                                                    value9 = "Temperatura Wrzenia: 1484°C";
                                                                    value10 = "Odkryty: 1808 n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "21" || pierwiastek == "div21"){
                                                                    value1 = "Nazwa: Skand";
                                                                    value2 = "Symbol: Sc";
                                                                    value3 = "Typ: Metale przejściowe";
                                                                    value4 = "Masa Atomowa: 44,955907u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 9, 2";
                                                                    value6 = "Elektroujemność: 1,36";
                                                                    value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                                    value8 = "Temperatura Topnienia: 1541°C";
                                                                    value9 = "Temperatura Wrzenia: 2830°C";
                                                                    value10 = "Odkryty: 1879 n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "22" || pierwiastek == "div22"){
                                                                    value1 = "Nazwa: Tytan";
                                                                    value2 = "Symbol: Ti";
                                                                    value3 = "Typ: Metale przejściowe";
                                                                    value4 = "Masa Atomowa: 47,867u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 10, 2";
                                                                    value6 = "Elektroujemność: 1,54";
                                                                    value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                                    value8 = "Temperatura Topnienia: 1668°C";
                                                                    value9 = "Temperatura Wrzenia: 3287°C";
                                                                    value10 = "Odkryty: 1791 n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "23" || pierwiastek == "div23"){
                                                                    value1 = "Nazwa: Wanad";
                                                                    value2 = "Symbol: V";
                                                                    value3 = "Typ: Metale przejściowe";
                                                                    value4 = "Masa Atomowa: 50,9415u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 11, 2";
                                                                    value6 = "Elektroujemność: 1,63";
                                                                    value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                                    value8 = "Temperatura Topnienia: 1910°C";
                                                                    value9 = "Temperatura Wrzenia: 3407°C";
                                                                    value10 = "Odkryty: 1801 n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "24" || pierwiastek == "div24"){
                                                                    value1 = "Nazwa: Chrom";
                                                                    value2 = "Symbol: Cr";
                                                                    value3 = "Typ: Metale przejściowe";
                                                                    value4 = "Masa Atomowa: 51,9961u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 13, 1";
                                                                    value6 = "Elektroujemność: 1,66";
                                                                    value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                                    value8 = "Temperatura Topnienia: 1907°C";
                                                                    value9 = "Temperatura Wrzenia: 2671°C";
                                                                    value10 = "Odkryty: 1797 n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "25" || pierwiastek == "div25"){
                                                                    value1 = "Nazwa: Mangan";
                                                                    value2 = "Symbol: Mn";
                                                                    value3 = "Typ: Metale przejściowe";
                                                                    value4 = "Masa Atomowa: 54,938043u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 13, 2";
                                                                    value6 = "Elektroujemność: 1,55";
                                                                    value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                                    value8 = "Temperatura Topnienia: 1246°C";
                                                                    value9 = "Temperatura Wrzenia: 2061°C";
                                                                    value10 = "Odkryty: 1774 n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "26" || pierwiastek == "div26"){
                                                                    value1 = "Nazwa: Żelazo";
                                                                    value2 = "Symbol: Fe";
                                                                    value3 = "Typ: Metale przejściowe";
                                                                    value4 = "Masa Atomowa: 55,845u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 14, 2";
                                                                    value6 = "Elektroujemność: 1,83";
                                                                    value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                                    value8 = "Temperatura Topnienia: 1538°C";
                                                                    value9 = "Temperatura Wrzenia: 2861°C";
                                                                    value10 = "Odkryty: 2000 n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "27" || pierwiastek == "div27"){
                                                                    value1 = "Nazwa: Kobalt";
                                                                    value2 = "Symbol: Co";
                                                                    value3 = "Typ: Metale przejściowe";
                                                                    value4 = "Masa Atomowa: 58,933194u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 15, 2";
                                                                    value6 = "Elektroujemność: 1,88";
                                                                    value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                                    value8 = "Temperatura Topnienia: 1495°C";
                                                                    value9 = "Temperatura Wrzenia: 2900°C";
                                                                    value10 = "Odkryty: 1735 n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "28" || pierwiastek == "div28"){
                                                                    value1 = "Nazwa: Nikiel";
                                                                    value2 = "Symbol: Ni";
                                                                    value3 = "Typ: Metale przejściowe";
                                                                    value4 = "Masa Atomowa: 58,6934u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 16, 2";
                                                                    value6 = "Elektroujemność: 1,91";
                                                                    value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                                    value8 = "Temperatura Topnienia: 1455°C";
                                                                    value9 = "Temperatura Wrzenia: 2913°C";
                                                                    value10 = "Odkryty: 1751 n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "29" || pierwiastek == "div29"){
                                                                    value1 = "Nazwa: Miedź";
                                                                    value2 = "Symbol: Cu";
                                                                    value3 = "Typ: Metale przejściowe";
                                                                    value4 = "Masa Atomowa: 63,546u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 18, 1";
                                                                    value6 = "Elektroujemność: 1,90";
                                                                    value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                                    value8 = "Temperatura Topnienia: 1084,62°C";
                                                                    value9 = "Temperatura Wrzenia: 2562°C";
                                                                    value10 = "Odkryty: 8000 p.n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "30" || pierwiastek == "div30"){
                                                                    value1 = "Nazwa: Cynk";
                                                                    value2 = "Symbol: Zn";
                                                                    value3 = "Typ: Metale przejściowe";
                                                                    value4 = "Masa Atomowa: 65,38u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 18, 2";
                                                                    value6 = "Elektroujemność: 1,65";
                                                                    value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                                    value8 = "Temperatura Topnienia: 419,53°C";
                                                                    value9 = "Temperatura Wrzenia: 906,9°C";
                                                                    value10 = "Odkryty: 1500 n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "31" || pierwiastek == "div31"){
                                                                    value1 = "Nazwa: Gal";
                                                                    value2 = "Symbol: Ga";
                                                                    value3 = "Typ: Metale Nieszlachetne";
                                                                    value4 = "Masa Atomowa: 69,723u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 18, 3";
                                                                    value6 = "Elektroujemność: 1,81";
                                                                    value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                                    value8 = "Temperatura Topnienia: 29,760°C";
                                                                    value9 = "Temperatura Wrzenia: 2204°C";
                                                                    value10 = "Odkryty: 1875 n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "32" || pierwiastek == "div32"){
                                                                    value1 = "Nazwa: German";
                                                                    value2 = "Symbol: Ge";
                                                                    value3 = "Typ: Półmetale";
                                                                    value4 = "Masa Atomowa: 72,63u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 18, 4";
                                                                    value6 = "Elektroujemność: 2,01";
                                                                    value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                                    value8 = "Temperatura Topnienia: 938,25°C";
                                                                    value9 = "Temperatura Wrzenia: 2820°C";
                                                                    value10 = "Odkryty: 1886 n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "33" || pierwiastek == "div33"){
                                                                    value1 = "Nazwa: Arsen";
                                                                    value2 = "Symbol: As";
                                                                    value3 = "Typ: Półmetale";
                                                                    value4 = "Masa Atomowa: 74,921595u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 18, 5";
                                                                    value6 = "Elektroujemność: 2,18";
                                                                    value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                                    value8 = "Temperatura Topnienia: 816,9°C";
                                                                    value9 = "Temperatura Wrzenia: 614°C";
                                                                    value10 = "Odkryty: 1250 n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "34" || pierwiastek == "div34"){
                                                                    value1 = "Nazwa: Selen";
                                                                    value2 = "Symbol: Se";
                                                                    value3 = "Typ: Niemetale";
                                                                    value4 = "Masa Atomowa: 78,971u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 18, 6";
                                                                    value6 = "Elektroujemność: 2,55";
                                                                    value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                                    value8 = "Temperatura Topnienia: 221°C";
                                                                    value9 = "Temperatura Wrzenia: 685°C";
                                                                    value10 = "Odkryty: 1817 n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "35" || pierwiastek == "div35"){
                                                                    value1 = "Nazwa: Brom";
                                                                    value2 = "Symbol: Br";
                                                                    value3 = "Typ: Niemetale";
                                                                    value4 = "Masa Atomowa: 79,904u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 18, 7";
                                                                    value6 = "Elektroujemność: 2,96";
                                                                    value7 = "Stan Skupienia w 0°C: Ciecze";
                                                                    value8 = "Temperatura Topnienia: -7,350°C";
                                                                    value9 = "Temperatura Wrzenia: 58,9°C";
                                                                    value10 = "Odkryty: 1826 n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "36" || pierwiastek == "div36"){
                                                                    value1 = "Nazwa: Krypton";
                                                                    value2 = "Symbol: Kr";
                                                                    value3 = "Typ: Helowce";
                                                                    value4 = "Masa Atomowa: 83,798u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 18, 8";
                                                                    value6 = "Elektroujemność: 3,0";
                                                                    value7 = "Stan Skupienia w 0°C: Gaz";
                                                                    value8 = "Temperatura Topnienia: -157,36°C";
                                                                    value9 = "Temperatura Wrzenia: -153,22°C";
                                                                    value10 = "Odkryty: 1898 n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "37" || pierwiastek == "div37"){
                                                                    value1 = "Nazwa: Rubid";
                                                                    value2 = "Symbol: Rb";
                                                                    value3 = "Typ: Litowce";
                                                                    value4 = "Masa Atomowa: 85,4678u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 18, 8, 1";
                                                                    value6 = "Elektroujemność: 0,82";
                                                                    value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                                    value8 = "Temperatura Topnienia: 39,310°C";
                                                                    value9 = "Temperatura Wrzenia: 688°C";
                                                                    value10 = "Odkryty: 1861 n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "38" || pierwiastek == "div38"){
                                                                    value1 = "Nazwa: Stront";
                                                                    value2 = "Symbol: Sr";
                                                                    value3 = "Typ: Berylowce";
                                                                    value4 = "Masa Atomowa: 87,62u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 18, 8, 2";
                                                                    value6 = "Elektroujemność: 0,95";
                                                                    value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                                    value8 = "Temperatura Topnienia: 776,9°C";
                                                                    value9 = "Temperatura Wrzenia: 1382°C";
                                                                    value10 = "Odkryty: 1790 n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "39" || pierwiastek == "div39"){
                                                                    value1 = "Nazwa: Itr";
                                                                    value2 = "Symbol: Y";
                                                                    value3 = "Typ: Metale przejściowe";
                                                                    value4 = "Masa Atomowa: 88,905838u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 18, 9, 2";
                                                                    value6 = "Elektroujemność: 1,22";
                                                                    value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                                    value8 = "Temperatura Topnienia: 1526°C";
                                                                    value9 = "Temperatura Wrzenia: 3345°C";
                                                                    value10 = "Odkryty: 1794 n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "40" || pierwiastek == "div41"){
                                                                    value1 = "Nazwa: Cyrkon";
                                                                    value2 = "Symbol: Zr";
                                                                    value3 = "Typ: Metale przejściowe";
                                                                    value4 = "Masa Atomowa: 91,224u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 18, 10, 2";
                                                                    value6 = "Elektroujemność: 1,33";
                                                                    value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                                    value8 = "Temperatura Topnienia: 1855°C";
                                                                    value9 = "Temperatura Wrzenia: 4409°C";
                                                                    value10 = "Odkryty: 1789 n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "41" || pierwiastek == "div41"){
                                                                    value1 = "Nazwa: Niob";
                                                                    value2 = "Symbol: Nb";
                                                                    value3 = "Typ: Metale przejściowe";
                                                                    value4 = "Masa Atomowa: 92,906u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 18, 12, 1";
                                                                    value6 = "Elektroujemność: 1,6";
                                                                    value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                                    value8 = "Temperatura Topnienia: 2477°C";
                                                                    value9 = "Temperatura Wrzenia: 4744°C";
                                                                    value10 = "Odkryty: 1801 n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "42" || pierwiastek == "div42"){
                                                                    value1 = "Nazwa: Molibden";
                                                                    value2 = "Symbol: Mo";
                                                                    value3 = "Typ: Metale przejściowe";
                                                                    value4 = "Masa Atomowa: 95,95u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 18, 13, 1";
                                                                    value6 = "Elektroujemność: 2,16";
                                                                    value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                                    value8 = "Temperatura Topnienia: 2623°C";
                                                                    value9 = "Temperatura Wrzenia: 4639°C";
                                                                    value10 = "Odkryty: 1781 n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "43" || pierwiastek == "div43"){
                                                                    value1 = "Nazwa: Technet";
                                                                    value2 = "Symbol: Tc";
                                                                    value3 = "Typ: Metale przejściowe";
                                                                    value4 = "Masa Atomowa: 98u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 18, 13, 2";
                                                                    value6 = "Elektroujemność: 1,9";
                                                                    value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                                    value8 = "Temperatura Topnienia: 2157°C";
                                                                    value9 = "Temperatura Wrzenia: 4265°C";
                                                                    value10 = "Odkryty: 1937 n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "44" || pierwiastek == "div44"){
                                                                    value1 = "Nazwa: Ruten";
                                                                    value2 = "Symbol: Ru";
                                                                    value3 = "Typ: Metale przejściowe";
                                                                    value4 = "Masa Atomowa: 101,07u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 18, 15, 1";
                                                                    value6 = "Elektroujemność: 2,2";
                                                                    value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                                    value8 = "Temperatura Topnienia: 2334°C";
                                                                    value9 = "Temperatura Wrzenia: 4150°C";
                                                                    value10 = "Odkryty: 1844 n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "45" || pierwiastek == "div45"){
                                                                    value1 = "Nazwa: Rod";
                                                                    value2 = "Symbol: Rh";
                                                                    value3 = "Typ: Metale przejściowe";
                                                                    value4 = "Masa Atomowa: 102,91u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 18, 16, 1";
                                                                    value6 = "Elektroujemność: 2,28";
                                                                    value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                                    value8 = "Temperatura Topnienia: 1964°C";
                                                                    value9 = "Temperatura Wrzenia: 3695°C";
                                                                    value10 = "Odkryty: 1803 n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "46" || pierwiastek == "div46"){
                                                                    value1 = "Nazwa: Pallad";
                                                                    value2 = "Symbol: Pd";
                                                                    value3 = "Typ: Metale przejściowe";
                                                                    value4 = "Masa Atomowa: 106,42u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 18, 18";
                                                                    value6 = "Elektroujemność: 2,20";
                                                                    value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                                    value8 = "Temperatura Topnienia: 1554,9°C";
                                                                    value9 = "Temperatura Wrzenia: 2963°C";
                                                                    value10 = "Odkryty: 1803 n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "47" || pierwiastek == "div47"){
                                                                    value1 = "Nazwa: Srebro";
                                                                    value2 = "Symbol: Ag";
                                                                    value3 = "Typ: Metale przejściowe";
                                                                    value4 = "Masa Atomowa: 107,8682u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 18, 18, 1";
                                                                    value6 = "Elektroujemność: 1,93";
                                                                    value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                                    value8 = "Temperatura Topnienia: 961,780°C";
                                                                    value9 = "Temperatura Wrzenia: 2162°C";
                                                                    value10 = "Odkryty: 3000 p.n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "48" || pierwiastek == "div48"){
                                                                    value1 = "Nazwa: Kadm";
                                                                    value2 = "Symbol: Cd";
                                                                    value3 = "Typ: Metale przejściowe";
                                                                    value4 = "Masa Atomowa: 112,414u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 18, 18, 2";
                                                                    value6 = "Elektroujemność: 1,69";
                                                                    value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                                    value8 = "Temperatura Topnienia: 321,07°C";
                                                                    value9 = "Temperatura Wrzenia: 766,9°C";
                                                                    value10 = "Odkryty: 1817 n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "49" || pierwiastek == "div49"){
                                                                    value1 = "Nazwa: Ind";
                                                                    value2 = "Symbol: In";
                                                                    value3 = "Typ: Metale Nieszlachetne";
                                                                    value4 = "Masa Atomowa: 114,818u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 18, 18, 3";
                                                                    value6 = "Elektroujemność: 1,78";
                                                                    value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                                    value8 = "Temperatura Topnienia: 156,60°C";
                                                                    value9 = "Temperatura Wrzenia: 2072°C";
                                                                    value10 = "Odkryty: 1863 n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "50" || pierwiastek == "div50"){
                                                                    value1 = "Nazwa: Cyna";
                                                                    value2 = "Symbol: Sn";
                                                                    value3 = "Typ: Metale Nieszlachetne";
                                                                    value4 = "Masa Atomowa: 118,710u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 18, 18, 4";
                                                                    value6 = "Elektroujemność: 1,96";
                                                                    value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                                    value8 = "Temperatura Topnienia: 231,93°C";
                                                                    value9 = "Temperatura Wrzenia: 2602°C";
                                                                    value10 = "Odkryty: 3000 p.n.e.";
                                                                    changeinfo();
                                                                } else if (pierwiastek == "51" || pierwiastek == "div51"){
                                                                    value1 = "Nazwa: Antymon";
                                                                    value2 = "Symbol: Sb";
                                                                    value3 = "Typ: Półmetale";
                                                                    value4 = "Masa Atomowa: 121,760u";
                                                                    value5 = "Powłoki Elektronowe: 2, 8, 18, 18, 5";
                                                                    value6 = "Elektroujemność: 2,05";
                                                                    value7 = "Stan Skupienia w 0°C: Ciało stałe";
                                                                    value8 = "Temperatura Topnienia: 630,63°C";
                                                                    value9 = "Temperatura Wrzenia: 1587°C";
                                                                    value10 = "Odkryty: 3000 p.n.e.";
                                                                    changeinfo();
                                                                }

                                                                
                                                                    
                                                                
                                                                
                                                                


                                                    }

    
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

