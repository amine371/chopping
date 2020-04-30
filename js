let  btnplus = document . getElementsByClassName ( "add" )
for ( let  {
  i = 0 ;  i < btnplus . length ;  i ++ ) {
    btnplus [ i ] . addEventListener ( "click" ,  function ( ) {
        btnplus [ i ] . nextElementSibling . innerHTML ++ ;
        somme ( )
    } )
}


let  btnminus = document . querySelectorAll ( ".moins" )
for ( let  btn  de  btnminus ) {
    btn . addEventListener ( "click" ,  function ( ) {
        if ( btn . previousElementSibling . innerHTML > 0 ) {
            btn . previousElementSibling . innerHTML - ;
            somme ( )
        }
        
    } )
}





function  somme ( ) {
    let  prix  =  document . getElementsByClassName ( "prix" )
    let  qte  =  document . getElementsByClassName ( "qte" )
    let  sum = 0
    for ( let  i  = 0 ;  i < prix . longueur ;  i ++ ) {
        somme + = prix [ i ] . innerHTML * QTE [ i ] . innerHTML
    }
    return   document . getElementById ( "totalp" ) . innerHTML  =  "Total du panier: $"  +  somme
}
