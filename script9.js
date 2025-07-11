//Code JS
// Create constants here
// =====================================
// recherche de la date du jour actuel


let Tabmois = ["Janvier", "Février", "Mars", "Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"];
let Nbjour_mois=[31, 28, 31, 30,31,30,31,31,30,31,30,31];
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');       // Date actuelle
var js= String(today.getDay()).padStart(2, '0')// jour de la semaine
var mm = String(today.getMonth() + 1).padStart(2, '0'); //Mois actuel January is 0!
var yyyy = today.getFullYear();                         // Année actuelle
 var hh=0;
 var mn=0;
 var ss=0;
// affiche l'heure courante toute les secondes:


let tab_alarm_sel=[0,0,0,0,0,0,0,]; // mise a zero des heures d'alarme du lundi au dimanche
let tab_statut_alarm_sel=[0,0,0,0,0,0,0,]; // mise a zero autorisation d'alarme du lundi au dimanche
let tab_radio_alarm_sel=["","","","","","",""];
// Gestion du son
let Son = document.getElementById('MonPlayer');
Son.volume=0.4;
const Btn_Pause=document.getElementById('Pause')
const range = document.getElementById('slider');
const Fond_Montre=document.getElementById('fond_montre');
const Fond_Champ_Alarme=document.getElementById('Champs_alarm');
let Tab_radio = [
  ["France Inter","http://icecast.radiofrance.fr/franceinter-hifi.aac"],
  ["Europe 1","http://stream.europe1.fr/europe1.aac"],
  ["M Radio ","http://mfm.ice.infomaniak.ch/mfm-64.aac"],
  ["Radio Classique","http://radioclassique.ice.infomaniak.ch/radioclassique-high.aac"],
  ["RTL ","http://icecast.rtl.fr/rtl-1-44-128?listen=webCwsBCggNCQgLDQUGBAcGBg"],
  ["FIP ","http://icecast.radiofrance.fr/fip-hifi.aac"],
   ["France Musique ","http://icecast.radiofrance.fr/francemusique-hifi.aac"],
  ["ANCIENT ","https://mediaserv73.live-streams.nl:18058/stream"],
  ["CROONER","http://croonerradio.ice.infomaniak.ch/croonerradio-hifi.aac"],
];
var Nbgong=0;
var Nbgong1=0;
var Ngong_heure=0;
var Durée_S_sleep=0;
// Déclaration des variables pour calcul de l'age
const hoursPerDay =24;
const minutesPerHour=60;
const secondsPerMinute=60;

//=========================================
//let URL_Fete_du_jour =document.getElementById("Fetedujour");
 
//let Url_fete= "https://fetedujour.fr/api/v2/VOTRECLE/text-normal";
//mydocument=Url_fete;
//let saint_du_jour=mydocument.getElement.querySelector('body');
//Fete_du_jour.innerText=saint_du_jour;

var parsedUrl = new URL("https://fetedujour.fr/api/v2/VOTRECLE/text-normal-10-5");
//console.log(parsedUrl(querySelector.get('body')));
// =====================================

const dayInput = document.querySelector('#Nbday-input');
const calculateButton = document.querySelector('#calculate-button');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

var Date_du_Jour = document.querySelector('#Date_du_jour');
var HeureActuelle=document.querySelector('#HeureActuelle');
let Anniversaire=document.getElementById("anni")

//================= Initialise l'alarme 1================================ 
const AlarmON = document.getElementById("BoutonALon");  // bouton reset alarm 
const AlarmOFF = document.getElementById("BoutonALoff");// bouton reset alarm1
const Sonnerie1=document.getElementById("sonnerie1"); //voyant sonnerie1
Sonnerie1.innerText=0; 
Sonnerie1.style.backgroundColor="ffffff"
const Alarm1= document.getElementById("alarme1");
// déclaration des id jour  alarme 
const Al_Lu=document.getElementById("Lu"); //voyant sonnerie1
const Al_Ma=document.getElementById("Ma"); //voyant sonnerie1
const Al_Me=document.getElementById("Me"); //voyant sonnerie1
const Al_Je=document.getElementById("Je"); //voyant sonnerie1
const Al_Ve=document.getElementById("Ve"); //voyant sonnerie1
const Al_Sa=document.getElementById("Sa"); //voyant sonnerie1
const Al_Di=document.getElementById("Di"); //voyant sonnerie1
Al_Lu.style.backgroundColor="rgb(158, 153, 153)";
Al_Ma.style.backgroundColor="rgb(158, 153, 153)";
Al_Me.style.backgroundColor="rgb(158, 153, 153)"; 
Al_Je.style.backgroundColor="rgb(158, 153, 153)";
Al_Ve.style.backgroundColor="rgb(158, 153, 153)";
Al_Sa.style.backgroundColor="rgb(158, 153, 153)";
Al_Di.style.backgroundColor="rgb(158, 153, 153)";
//===============Déclaration Heure alarme journalie =============
H_Lu=document.getElementById("H_Lu");
H_Ma=document.getElementById("H_Ma");
H_Me=document.getElementById("H_Me");
H_Je=document.getElementById("H_Je");
H_Ve=document.getElementById("H_Ve");
H_Sa=document.getElementById("H_Sa");
H_Di=document.getElementById("H_Di");
//===============Déclaration Radio alarme journalie =============
R_Lu=document.getElementById("R_Lu");
R_Ma=document.getElementById("R_Ma");
R_Me=document.getElementById("R_Me");
R_Je=document.getElementById("R_Je");
R_Ve=document.getElementById("R_Ve");
R_Sa=document.getElementById("R_Sa");
R_Di=document.getElementById("R_Di");

RadioR=document.getElementById('RadioR'); // nom de radio sélectionée pour lalarme
// ============ Initiale le fon d'écran =========================



//============== Initialise les aiguilles ============================
const Cadran=document.getElementById("Montre");
const Rond_central=document.getElementById("Rond");
const Aiguille_heure=document.getElementById("P_aiguille");
const Aiguille_minute=document.getElementById("G_aiguille");
const Aiguille_seconde=document.getElementById("Sec_aiguille");
//============== Initialise les boutons de style horloge ============================
const Sncf_fond=document.getElementById("Btn_SNCF");
const Bigben_fond=document.getElementById("Btn_Bben");
const Bigben_fondT1=document.getElementById("Btn_BbenT1");
const Cadran1=document.getElementById("Cadran1");;
//---------------------------- declaration boutons volume----------------
const Vol_plus=document.getElementById("Volume_plus");
const Vol_moins=document.getElementById("Volume_moins");

// ---------------Init Big ben ----------------------
Bigben_fond.addEventListener('click', () => {
Rond_central.style.opacity=0;
Cadran.style.backgroundImage="url('cadran_Big_Ben_T1.PNG')";

Aiguille_heure.style.opacity=1;
Aiguille_heure.style.backgroundImage="url('Petite_Aiguille_Big_ben_Blanc.PNG')";
Aiguille_minute.style.backgroundImage="url('Grande_Aiguille_Big_ben_Blanc.PNG')";
Aiguille_seconde.style.backgroundImage="url('Trotteuse_Big_Ben_Blanc.PNG')";

});
// ---------------Init Big ben T1 ----------------------
Bigben_fondT1.addEventListener('click', () => {
Rond_central.style.opacity=0;
Cadran.style.backgroundImage="url('cadran_Big_Ben.PNG')";

Aiguille_heure.style.opacity=1;
Aiguille_heure.style.backgroundImage="url('Petite_Aiguille_Big_ben.PNG')";
Aiguille_minute.style.backgroundImage="url('Grande_Aiguille_Big_ben.PNG')";
Aiguille_seconde.style.backgroundImage="url('Trotteuse_Big_Ben.PNG')";

});
// ----------------------- Init SNCF--------------------
Sncf_fond.addEventListener('click', () => {
Rond_central.style.opacity=1;
Cadran.style.backgroundImage="url('Horloge_SNCF.jpg')";
Aiguille_heure.style.backgroundImage="url('Grande_Aiguille_SNCF.PNG')";
Aiguille_minute.style.backgroundImage="url('Grande_Aiguille_SNCF.PNG')";
Aiguille_seconde.style.backgroundImage="url('Trotteuse_SNCF.png')";
});
// ---------------Init Cadran1 ----------------------
Cadran1.addEventListener('click', () => {
Rond_central.style.opacity=0;
Cadran.style.backgroundImage="url('cadran_1.png')";

Aiguille_heure.style.opacity=1;
Aiguille_heure.style.backgroundImage="url('Petite_Aiguille_Cadran1.PNG')";
Aiguille_minute.style.backgroundImage="url('Grande_Aiguille_Cadran1.PNG')";
Aiguille_seconde.style.backgroundImage="url('Trotteuse_Cadran1.png')";

});
// init durée sleep
let Durée_moins =document.getElementById('moins10');   
let Durée_plus =document.getElementById('plus10'); 
let Timer_sleep=document.getElementById('Durée_SLEEP')
Durée_moins.addEventListener("click",(e)=>{
  if (Durée_S_sleep>=10) {
  Durée_S_sleep=Durée_S_sleep-10 
  Durée_SLEEP.innerText= Durée_S_sleep
  } 
  //F_Sleep_radio(Durée_S_sleep)
  var select_Elt_Radio=document.getElementById('RadioS');
  var valeurselectionnee_Radio = select_Elt_Radio.options[select_Elt_Radio.selectedIndex].value;  
    var URL_Radio1=Tab_radio[select_Elt_Radio.selectedIndex][1]
      let trackUrl_s = URL_Radio1;
      Son.src = trackUrl_s;
         //  document.getElementById("Nom_Radio").innerText="Vous écoutez RMC";
            // On lit le track
           ///// Son.src = trackUrl_s;
           initAudio (trackUrl_s)
           //Durée_SLEEP.innerText= 100000;
           //// Son.load()
          /////  Son.play();    
   })
Durée_plus.addEventListener("click",(e)=>{
   if (Durée_S_sleep<=50) {
  Durée_S_sleep=Durée_S_sleep+10 
   Durée_SLEEP.innerText= Durée_S_sleep
    }
  // F_Sleep_radio(Durée_S_sleep)
  var select_Elt_Radio=document.getElementById('RadioS');
  var valeurselectionnee_Radio = select_Elt_Radio.options[select_Elt_Radio.selectedIndex].value;  
  var URL_Radio1=Tab_radio[select_Elt_Radio.selectedIndex][1]
      let trackUrl_s = URL_Radio1;
      //Son.src = trackUrl_s;
      //  document.getElementById("Nom_Radio").innerText="Vous écoutez RMC";
      // On lit le track
       initAudio (trackUrl_s)
     // Son.src = trackUrl_s;
     // Son.load()
     // Son.play();
   })
// gestion de la mise en route de l'alarm
AlarmON.addEventListener("click",(e)=>{
  Sonnerie1.innerText=1;
  Sonnerie1.style.opacity=1; // VERT
  
})
AlarmOFF.addEventListener("click",(e)=>{
  Sonnerie1.innerText=0;
  Sonnerie1.style.backgroundColor="RGB(255,0,0)";
  Sonnerie1.style.opacity=0
})
// gestion des programmation d'alarme
Al_Lu.addEventListener("click",(e)=>{
 if (Al_Lu.style.backgroundColor=="rgb(158, 153, 153)") {
     Al_Lu.style.backgroundColor="rgb(25, 214, 8)";
    tab_alarm_sel[0]=Alarm1.value;
    H_Lu.innerText=tab_alarm_sel[0]
    tab_statut_alarm_sel[0]=1;
    Sonnerie1.innerText=1;
    Sonnerie1.style.opacity=1; // VERT
    tab_radio_alarm_sel[0]=RadioR.selectedIndex;
   R_Lu.innerText=RadioR.value
}
 else
    { 
      Al_Lu.style.backgroundColor="rgb(158, 153, 153)";
     tab_statut_alarm_sel[0]=0;
}
   
    //console.log("alarm :" ,tab_alarm_sel )
});
Al_Ma.addEventListener("click",(e)=>{
 if (Al_Ma.style.backgroundColor=="rgb(158, 153, 153)") {
     Al_Ma.style.backgroundColor="rgb(25, 214, 8)";
    tab_alarm_sel[1]=Alarm1.value;
    H_Ma.innerText=tab_alarm_sel[1]
    tab_statut_alarm_sel[1]=1;
    Sonnerie1.innerText=1;
    Sonnerie1.style.opacity=1; // VERT
    tab_radio_alarm_sel[1]=RadioR.selectedIndex;
    R_Ma.innerText=RadioR.value
} 
 else
    { 
      Al_Ma.style.backgroundColor="rgb(158, 153, 153)";
     tab_statut_alarm_sel[1]=0;
    }
   
 //  console.log("alarm :" ,tab_alarm_sel )
});

Al_Me.addEventListener("click",(e)=>{
 if (Al_Me.style.backgroundColor=="rgb(158, 153, 153)") {
     Al_Me.style.backgroundColor="rgb(25, 214, 8)";
    tab_alarm_sel[2]=Alarm1.value;
     H_Me.innerText=tab_alarm_sel[2]
     tab_statut_alarm_sel[2]=1;
     Sonnerie1.innerText=1;
     Sonnerie1.style.opacity=1; // VERT
    tab_radio_alarm_sel[2]=RadioR.selectedIndex;
     R_Me.innerText=RadioR.value
    }
 else
    { 
      Al_Me.style.backgroundColor="rgb(158, 153, 153)";
     tab_statut_alarm_sel[2]=0;
    
  }
  //console.log("alarm :" ,tab_alarm_sel )
});
Al_Je.addEventListener("click",(e)=>{
 if (Al_Je.style.backgroundColor=="rgb(158, 153, 153)") {
     Al_Je.style.backgroundColor="rgb(25, 214, 8)";
    tab_alarm_sel[3]=Alarm1.value;
    H_Je.innerText=tab_alarm_sel[3]
     tab_statut_alarm_sel[3]=1;
     Sonnerie1.innerText=1;
     Sonnerie1.style.opacity=1; // VER
     tab_radio_alarm_sel[3]=RadioR.selectedIndex;
     R_Je.innerText=RadioR.value
}
 else
    { 
       Al_Je.style.backgroundColor="rgb(158, 153, 153)";
    tab_statut_alarm_sel[3]=0;
  }
 // console.log("alarm :" ,tab_alarm_sel )
});
Al_Ve.addEventListener("click",(e)=>{
 if (Al_Ve.style.backgroundColor=="rgb(158, 153, 153)") {
     Al_Ve.style.backgroundColor="rgb(25, 214, 8)";
    tab_alarm_sel[4]=Alarm1.value;
    H_Ve.innerText=tab_alarm_sel[4]
    tab_statut_alarm_sel[4]=1;
    Sonnerie1.innerText=1;
     Sonnerie1.style.opacity=1; // VER
     tab_radio_alarm_sel[4]=RadioR.selectedIndex;
     R_Ve.innerText=RadioR.value
  }
 else
    { 
      Al_Ve.style.backgroundColor="rgb(158, 153, 153)";
    tab_statut_alarm_sel[4]=0;
    
  }
//  console.log("alarm :" ,tab_alarm_sel )
});
Al_Sa.addEventListener("click",(e)=>{
 if (Al_Sa.style.backgroundColor=="rgb(158, 153, 153)") {
     Al_Sa.style.backgroundColor="rgb(25, 214, 8)";
    tab_alarm_sel[5]=Alarm1.value;
     H_Sa.innerText=tab_alarm_sel[5];
     tab_statut_alarm_sel[5]=1;
     Sonnerie1.innerText=1;
     Sonnerie1.style.opacity=1; // VER
     tab_radio_alarm_sel[5]=RadioR.selectedIndex; 
     R_Sa.innerText=RadioR.value
  }
 else
    { 
      Al_Sa.style.backgroundColor="rgb(158, 153, 153)";
    tab_statut_alarm_sel[5]=0;
    
  }
 // console.log("alarm :" ,tab_alarm_sel );
});
Al_Di.addEventListener("click",(e)=>{
 if (Al_Di.style.backgroundColor=="rgb(158, 153, 153)") {
     Al_Di.style.backgroundColor="rgb(25, 214, 8)";
    tab_alarm_sel[6]=Alarm1.value;
    H_Di.innerText=tab_alarm_sel[6];
    tab_statut_alarm_sel[6]=1;
    Sonnerie1.innerText=1;
     Sonnerie1.style.opacity=1; // VER
     tab_radio_alarm_sel[6]=RadioR.selectedIndex;
     R_Di.innerText=RadioR.value
   }
    
 else
    { 
      Al_Di.style.backgroundColor="rgb(158, 153, 153)";
    tab_statut_alarm_sel[6]=0;
    
  }
  // console.log("alarm :" ,tab_alarm_sel )
});


// Gestion du volume
// Gestion du volume
 range.addEventListener('change', () => {
        //elem.textContent = range.value;
        
        Son.volume=(range.value*.1)
        console.log("range.value=",range.value,"Son.volume",Son.volume)
        Vol_son.innerText=parseInt(10*Son.volume);
        //Son.volume=5;
    });
//================================================================================================================
//===============================================Mise en route de la scrutation ================================
//================================================================================================================

setInterval(myTimer, 1000); // défini un interval de temps pour rafraichir la fonction myTimer toute les 1000 ms
function myTimer() {
  let mois=Tabmois[parseInt(mm-1)];         // parseInt transforme un objet texte en valeur numérique et recherche dans la table le mois en lettres
  var aujourdhui = dd+" "+ mois +" "+yyyy;  // date du jour au format jj/mois/année
  // met a jour la date actuelle
  Date_du_jour.innerText=`${aujourdhui}`;
//================= Affiche l'heure actuelle ================================
F_Sleep_radio(Durée_S_sleep)
const date = new Date();
document.getElementById("HeureActuelle").innerHTML = date.toLocaleTimeString();
  hh= date.getHours();       // heure actuelle
  mn= date.getMinutes();       // minuteactuelle
  ss= date.getSeconds();       // minuteactuelle
//--------- mise a jout fond ecran -------------------
  if(hh==23 || (hh>=0 && hh<7)){
 
  Fond_Montre.style.backgroundImage="url('Ciel_etoile.jpg')";
  Fond_Champ_Alarme.style.backgroundImage="url('Ciel_etoile.jpg')";
}
else{
   Fond_Montre.style.backgroundImage="url('Bles.jpg')";
  Fond_Champ_Alarme.style.backgroundImage="url('Bles.jpg')";
}
// affiche l'heure courante toute les secondes:

	//const date = new Date();
	 document.getElementById("HeureActuelle").innerHTML = date.toLocaleTimeString();
	
	 Aiguille_seconde.style.webkitTransform = "rotateZ("+parseInt(360*(ss/60))+"deg)";
	 Aiguille_minute.style.webkitTransform ="rotateZ("+parseInt(360*(mn/60))+"deg)";
 	 if (hh>=12){
	    Aiguille_heure.style.webkitTransform ="rotateZ("+parseInt(360*(hh-12)/12+(30*mn/60))+"deg)";
	 }  	
	 else{
	    Aiguille_heure.style.webkitTransform ="rotateZ("+parseInt(360*(hh/12)+(30*mn/60))+"deg)";
	}



   
 //---------------------------------------------------------------------  
 // -------------------------Gestion de la sonnerie du reveil------------------
 // ----------------------------test Alarme du jour ----------------------------
var H_Alarme1=Alarm1.value;

var H_Alarmj=tab_alarm_sel[parseInt(js-1)]         // alarme programmée pour la date du jour actuelle
//console.log("Alarm_jour=",H_Alarmj)
//console.log(parseInt(H_Alarmj.substring(0,2)))
// console.log("Test=",hh==parseInt(H_Alarme1.substring(0,2)) && mn==parseInt(H_Alarme1.substring(5,3)) && ss==0  &&  tab_alarm_sel[parseInt(js-1)]==1)
// console.log(hh==parseInt(H_Alarmj.substring(0,2)) && mn==parseInt(H_Alarmj.substring(5,3)) && ss==0 && tab_statut_alarm_sel[parseInt(js-1)]==1)
  
	if (hh==parseInt(H_Alarmj.substring(0,2)) && mn==parseInt(H_Alarmj.substring(5,3)) && ss==0 && tab_statut_alarm_sel[parseInt(js-1)]==1){
	Sonnerie1.style.backgroundColor="RGB(100,241,39)"; // VERT


   var select_Elt_Radio=document.getElementById('RadioR');
    var valeurselectionnee_Radio = select_Elt_Radio.options[select_Elt_Radio.selectedIndex].value;  

    // a revoir pour la selection de la radio du reveil
   // var trackUrl_R=Tab_radio[select_Elt_Radio.selectedIndex][1]
var trackUrl_R=Tab_radio[tab_radio_alarm_sel[J-1]][1];

    initAudio (trackUrl_R)
}
// -----------fonction cadran de nuit-------------- 
 //console.log("hh=",hh,"mn=",mn ,"ss=",ss)
if(hh==23 && mn==0){
 
  Fond_Montre.style.backgroundImage="url('Ciel_etoile.jpg')";
  Fond_Champ_Alarme.style.backgroundImage="url('Ciel_etoile.jpg')";
}
if(hh==7 && mn==0){
   Fond_Montre.style.backgroundImage="url('Bles.jpg')";
  Fond_Champ_Alarme.style.backgroundImage="url('Bles.jpg')";
}




}  // ---------------------------- fin fonctionTimer -----------------------------------------
	
		if(Nbgong>0){
			      
			Nbgong=Nbgong-1;
			}
		
   



//--------------  Fonction sleep avec radio -----------------//
//----------------------------------------------------------//
function F_Sleep_radio(Durée_S_sleep){
   if (ss==0){
     
    Durée_SLEEP.innerText= Durée_SLEEP.innerText-1
   }
       setTimeout(Tempo_Sleep, Durée_S_sleep*60000); //60000

};

function Tempo_Sleep(){
  if (Sonnerie1.innerText==0){
  Son.pause();
  Son.currentTime = 0;
  }
}
// Bouton arret Radio sleep
 const Arret_sleep_S=document.getElementById("BoutonS");
   Arret_sleep_S.addEventListener("click",(e)=>{
    Son.pause();
    Son.currentTime = 0;
  //  Timer_sleep.innerText=0
  //  Sonnerie1.value="0" 
 
});

		 
      
//--------------------- Test heure pile ----------------------//

if (mn==0 && ss==0){  //    if (mn==0 && ss==0)  on est à l'heure pile
 console.log("ss="+ss);	 
   Ngong_heure=hh;
   Taux_scale=0.8;
  
}
   if(Ngong_heure>0 && Taux_scale==0.8){
    console.log("Ngong_heure="+Ngong_heure);
    Ngong_heure--;
    let audio = new Audio("Big-Ben.mp3");
     audio.play();
     
	  Taux_scale=1;
    Cadran.style.scale=Taux_scale;
   }
   else{
    Taux_scale=0.8;  
    Cadran.style.scale=Taux_scale;
    }
    //---------------------------------------------------------------------
//--------------Mise en route Radio selon l'heure de l'alarme1----------------
//---------------------------------------------------------------------
 Sonnerie1.addEventListener("change",(e)=>{
    var select_Elt_Radio_R=document.getElementById('RadioR');
    var valeurselectionnee_Radio_R = select_Elt_Radio_R.options[select_Elt_Radio_R.selectedIndex].value;  
    // Sonnerie1.innerText=0;
     
    var URL_Radio1_R=Tab_radio[select_Elt_Radio_R.selectedIndex][1]
    
    let Station = URL_Radio1_R;
    initAudio(Station)
     
 })

 

   // ---------------------- Fin fonction timer -------------------------------
	  	



//---------------------------------------------------------------------
//--------------Mise en route Radio suivant sa sélection----------------
//---------------------------------------------------------------------
// récuper l'indice de la radio sélectionné
   const List_Radio_S=document.getElementById("RadioS");
   List_Radio_S.addEventListener("change",(e)=>{
    var select_Elt_Radio=document.getElementById('RadioS');
    var valeurselectionnee_Radio = select_Elt_Radio.options[select_Elt_Radio.selectedIndex].value;  
    //var valeurselectionnee_Radio =  select_Elt_Radio.selectedIndex;
     
    var Station=Tab_radio[select_Elt_Radio.selectedIndex][1]
    initAudio(Station)
     
  })


  //-------------------- Test des 1/4 d'heure pile ----------------------//
   
    if (mn==15 && ss==0){  //    if (mn==0 && ss==0)  on est à l'heure pile
      console.log("ss="+ss);	 
      
      let audio15 = new Audio("Carillon_Big-Ben2.mp3");
      audio15.play();
        Taux_scale=0.8;
        Cadran.style.scale=Taux_scale;
     }
     if (mn==30 && ss==0){  //    if (mn==0 && ss==0)  on est à l'heure pile
      console.log("ss="+ss);	 
       
      let audio30 = new Audio("Carillon_Big-Ben2.mp3");
  audio30.play();
        Taux_scale=0.8;
        Cadran.style.scale=Taux_scale;
     }
     
     Taux_scale=1;

    	    

 

function initAudio (Station) {
   Son.src = Station;
     var playPromise = Son.play();

  if (playPromise !== undefined) {
    playPromise.then(_ => {
      // Automatic playback started!
      // Show playing UI.
      Son.load()
      Son.play(); 
      
    })
    .catch(error => {
      // Auto-play was prevented
      // Show paused UI.
      //Son.pause();
    });
  }
}
 





//========================================================
//gestion pose play

//https://yard.onl/sitelycee/cours/js/_Js.html?Laudio.html GEstion du son en JS
function play(MonPlayer, control) {

    if (Son.paused) {
        Son.play();
        control.textContent = '||';
 control.style.backgroundColor = "rgb(60,179,113)"; //fond rouge
    } else {
        Son.pause();
        control.textContent = '>';
        control.style.backgroundColor = "rgb(255,19,113)"; // fond vert
    }

}


function resume(MonPlayer) {
    Son.currentTime = 0;

    Son.pause();
}



//========================================================

