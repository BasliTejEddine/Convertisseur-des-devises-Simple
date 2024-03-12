
function Convert()
{
    Menu_Money=document.getElementById("from-currency-select").value;
    Menu_Converter=document.getElementById("to-currency-select").value;
    amount=document.getElementById("amount").value;
    Result=document.getElementById("resultat");
    if(Menu_Money==0)
    {
        alert("Choisir le devise");
        return false;
    }
    if(amount=="")
    {
        alert("Entrer Le Montant");
        return false;
    }
    var ConvertedAmount=convertCurrency(Menu_Money,Menu_Converter,amount);
    var Ch = `${amount} ${Menu_Money} = ${ConvertedAmount} ${Menu_Converter}`;
    if(!isNaN(ConvertedAmount))
    {
        Result.innerHTML=Ch;
        return false;
    }
    else
    {
        Result.innerHTML=0;
        return false;
    }

}
function convertCurrency(Menu_Money,Menu_Converter,amount)
{
    Taux={
        USD:{
            USD:1,
            EUR:0.91,
            CAD:1.34,
            TND:3.094,
            GBP:0.77,
            RUB:90.51
        },
        EUR:{
            USD:1.09,
            EUR:1,
            CAD:1.47,
            TND:3.393,
            GBP:0.85,
            RUB:99.02,
        },
        CAD:{
            USD:0.74,
            EUR:0.67,
            CAD:1,
            TND:2.29,
            GBP:0.57
        },
        GBP:{
            USD:1.28,
            EUR:1.17,
            TND:3.972,
            GBP:1,
            CAD:1.73,
            RUB:116.28
        },
        RUB:{
            USD:0.0110,
            EUR:0.0100,
            TND:0.0341,
            GBP:0.0085,
            CAD:0.0148,
            RUB:1
        }
    }
    if(Menu_Money in Taux && Menu_Converter in Taux[Menu_Money])
    {
        var rate=Taux[Menu_Money][Menu_Converter];
        var Aux=amount*rate;
        return Aux.toFixed(2);

    }
    else
    {
        return 0;
        
    }
    
}



function Verif() {
  window.open("index.html");
}

function Verif2()
{
  window.open("Connexion.html");
}