$(function () {

    var languages, changelanguage;

    languages = {

        "english": {
			"lang_win10percentage": "complete.",
			"lang_win10workingupdates": "Working on updates",			
			"lang_win10dontoff": "Don't turn off your PC. This will take a while.",			
			"lang_win10restart": "Your PC will restart several times."
        },

		"french": {
			"lang_win10percentage": "effectués.",
			"lang_win10workingupdates": "Configuration des mises à jour",			
			"lang_win10dontoff": "N'éteignez pas votre ordinateur. Cela prendra un moment.",			
			"lang_win10restart": "Votre ordinateur va redémarrer plusieurs fois"
        },
		
		"dutch": {          	
			"lang_win10percentage": "voltooid.",  	 			
			"lang_win10workingupdates": "De update voor Windows 10 wordt geconfigureerd",  					
			"lang_win10dontoff": "Schakel de computer niet uit! Dit zal even duren.",  			
			"lang_win10restart": "De pc wordt verschillende keren herstart."
		},        

		"german": {
			"lang_win10percentage": "Vollständig.",  	 			
      		"lang_win10workingupdates": "Updates werden verarbeitet",
     		"lang_win10dontoff": "Schalten Sie den Computer nicht aus",
     		"lang_win10restart": "Ihr PC wird einige Male neu gestartet"
        },		

		"portuguese": {              			
			"lang_win10percentage": "Completo",  			
			"lang_win10workingupdates": "A trabalhar no updates",  					
			"lang_win10dontoff": "Não desligue o seu PC. Isto vai demorar um pouco.",  			
			"lang_win10restart": "O seu PC vai reiniciar várias vezes"
		},
		
				  
		"swedish": {
			"lang_win10percentage": "klart.",
			"lang_win10workingupdates": "Working on updates",
			"lang_win10dontoff": "Stäng inte av din PC. Det här kommer att ta en stund.",
			"lang_win10restart": "Din PC kommer att starta om flera gånger."
		},        

		"traditionalchinese": {   		
			"lang_win10percentage": "完成.",  	
			"lang_win10workingupdates": "正在安裝更新",  					
			"lang_win10dontoff": "請勿關閉電腦. 這可能需要一些時間。",  			
			"lang_win10restart": "您的電腦將重新啓動"
		},		

		"afrikaans": {              			
			"lang_win10percentage": "volledige.",  			
			"lang_win10workingupdates": "Werk op Opdateere",  					
			"lang_win10dontoff": "Moenie afdraai jou rekenaar. Dit sal 'n rukkie neem.",  			
			"lang_win10restart": "Jou rekenaar sal 'n paar keer herlaai"
		},
		
		"czech": {              		
			"lang_win10percentage": "hotovo.",  			
			"lang_win10workingupdates": "Probíhá aktualizace",  					
			"lang_win10dontoff": "Nevypínejte počítač. Bude to trvat jen chvilku.",  			
			"lang_win10restart": "Váš počítač se několikrát vypne"
		},
		
		"greek": {              
			"lang_win10percentage": "ολοκληρώθηκε.",  			
			"lang_win10workingupdates": "Εργασία με τις ενημερώσεις.",  					
			"lang_win10dontoff": "Μην απενεργοποιήσετε τον υπολογιστή σας. Αυτό θα πάρει λίγα λεπτά.",  			
			"lang_win10restart": "Ο υπολογιστής σας θα επανεκκινηθεί αρκετές φορές."
		},
		
		"thai": {              	
			"lang_win10percentage": "complete.",  			
			"lang_win10workingupdates": "การทำงานกับการอัปเดต",  					
			"lang_win10dontoff": "อย่าปิดเครื่องคอมพิวเตอร์ของคุณ ขั้นตอนนี้จะใช้เวลาสักครู่",  			
			"lang_win10restart": "พีซีของคุณจะรีสตาร์ทหลายครั้ง"
		},
				  
		"romanian": {               			
			"lang_win10percentage": "complet.",  			
			"lang_win10workingupdates": "Se lucrează la actualizări",  					
			"lang_win10dontoff": "Nu închideți PC-ul. Va dura ceva vreme.",  			
			"lang_win10restart": "PC-ul tău va reporni de câteva ori."
		},
				  
		"japanese": {              	
			"lang_win10percentage": "完了",  			
			"lang_win10workingupdates": "更新プログラムを構成しています",  					
			"lang_win10dontoff": "PCの電源を切らないでください。処理にはしばらくかかります。",  			
			"lang_win10restart": "PCは数回再起動します。"
		},
				  
		"norwegian": {              
			"lang_win10percentage": "Ferdig.",  			
			"lang_win10workingupdates": "Arbeider med oppdateringer",  					
			"lang_win10dontoff": "Ikke skru av din datamskin. Dette vil ta en stund.",  			
			"lang_win10restart": "Din datamaskin vil starte på nytt flere ganger"
		},
		
		"catalan": {              
			"lang_win10percentage": "completat.", 
			"lang_win10workingupdates": "S'està treballant en les actualitzacions", 
			"lang_win10dontoff": "No apaguis l'ordinador. Això trigarà una estona.", 
			"lang_win10restart": "L'ordinador es reiniciarà diverses vegades"
		}, 		
		
		"spanish": {              
			"lang_win10percentage": "complete.",
			"lang_win10workingupdates": "Working on updates",			
			"lang_win10dontoff": "Don't turn off your PC. This will take a while.",			
			"lang_win10restart": "Your PC will restart several times."	
		},

		 "slovak": {
			"lang_win10percentage": "complete.",
			"lang_win10workingupdates": "Working on updates",			
			"lang_win10dontoff": "Don't turn off your PC. This will take a while.",			
			"lang_win10restart": "Your PC will restart several times."
		 },
		
		"russian": {
			"lang_win10percentage": "complete.",
			"lang_win10workingupdates": "Working on updates",			
			"lang_win10dontoff": "Don't turn off your PC. This will take a while.",			
			"lang_win10restart": "Your PC will restart several times."
        },
		
		"turkish": {              
			"lang_win10percentage": "complete.",
			"lang_win10workingupdates": "Working on updates",			
			"lang_win10dontoff": "Don't turn off your PC. This will take a while.",			
			"lang_win10restart": "Your PC will restart several times." 				  			            
		},
		
		"danish": {                  
			"lang_win10percentage": "complete.",
			"lang_win10workingupdates": "Working on updates",			
			"lang_win10dontoff": "Don't turn off your PC. This will take a while.",			
			"lang_win10restart": "Your PC will restart several times."                                                
        },
		
		"polish": {
			"lang_win10percentage": "complete.",
			"lang_win10workingupdates": "Working on updates",			
			"lang_win10dontoff": "Don't turn off your PC. This will take a while.",			
			"lang_win10restart": "Your PC will restart several times."
        },
		
		
		"italian": {
			"lang_win10percentage": "complete.",
			"lang_win10workingupdates": "Working on updates",			
			"lang_win10dontoff": "Don't turn off your PC. This will take a while.",			
			"lang_win10restart": "Your PC will restart several times."
        },

	
		"hungarian": {
			"lang_win10percentage": "complete.",
			"lang_win10workingupdates": "Working on updates",			
			"lang_win10dontoff": "Don't turn off your PC. This will take a while.",			
			"lang_win10restart": "Your PC will restart several times."
        },
		
		"korean": {    
			"lang_win10percentage": "complete.",
			"lang_win10workingupdates": "Working on updates",			
			"lang_win10dontoff": "Don't turn off your PC. This will take a while.",			
			"lang_win10restart": "Your PC will restart several times."
        },
	
		"hebrew": {
			"lang_win10percentage": "complete.",
			"lang_win10workingupdates": "Working on updates",			
			"lang_win10dontoff": "Don't turn off your PC. This will take a while.",			
			"lang_win10restart": "Your PC will restart several times."
        },
		
         "finnish": {
			"lang_win10percentage": "complete.",
			"lang_win10workingupdates": "Working on updates",			
			"lang_win10dontoff": "Don't turn off your PC. This will take a while.",			
			"lang_win10restart": "Your PC will restart several times."
         },
		 
		"ukrainian": {
			"lang_win10percentage": "complete.",
			"lang_win10workingupdates": "Working on updates",			
			"lang_win10dontoff": "Don't turn off your PC. This will take a while.",			
			"lang_win10restart": "Your PC will restart several times."
        },
		
		"arabic": {
			"lang_win10percentage": "complete.",
			"lang_win10workingupdates": "Working on updates",			
			"lang_win10dontoff": "Don't turn off your PC. This will take a while.",			
			"lang_win10restart": "Your PC will restart several times."
        },
	
		"galician": {   	
			"lang_win10percentage": "complete.",
			"lang_win10workingupdates": "Working on updates",			
			"lang_win10dontoff": "Don't turn off your PC. This will take a while.",			
			"lang_win10restart": "Your PC will restart several times."			            
		},
		
		"simplifiedchinese": {              
			"lang_win10percentage": "complete.",
			"lang_win10workingupdates": "Working on updates",			
			"lang_win10dontoff": "Don't turn off your PC. This will take a while.",			
			"lang_win10restart": "Your PC will restart several times." 			            	
		},
		
		"indonesian": {       	
			"lang_win10percentage": "complete.",
			"lang_win10workingupdates": "Working on updates",			
			"lang_win10dontoff": "Don't turn off your PC. This will take a while.",			
			"lang_win10restart": "Your PC will restart several times."
		},
			
		"vietnamese": {              						
			"lang_win10percentage": "complete.",
			"lang_win10workingupdates": "Working on updates",			
			"lang_win10dontoff": "Don't turn off your PC. This will take a while.",			
			"lang_win10restart": "Your PC will restart several times."
		}
    };

    changelanguage = function (languages) {
        $("[data-translate]").text(function () {
            var key = $(this).data("translate");
            if (languages.hasOwnProperty(key)) {
                return languages[key];
            }
        });
    };
	
if (localStorage.lang === undefined) {

	var fulluserlanguage = window.navigator.userLanguage || window.navigator.language;
	var userlanguage = fulluserlanguage.substring(0, 2);

	if (userlanguage == "nl") {
		localStorage.setItem("lang", "dutch");
		changelanguage(languages.dutch);
	}

	else if (userlanguage == "fr") {
		localStorage.setItem("lang", "french");
		changelanguage(languages.french);
	}

	else if (userlanguage == "de") {
		localStorage.setItem("lang", "german");
		changelanguage(languages.german);
	}

	else if (userlanguage == "ru") {
		localStorage.setItem("lang", "russian");
		changelanguage(languages.russian);
	}

	else if (userlanguage == "es") {
		localStorage.setItem("lang", "spanish");
		changelanguage(languages.spanish);
	}

	else if (userlanguage == "it") {
		localStorage.setItem("lang", "italian");
		changelanguage(languages.italian);
	}

	else if (userlanguage == "pt") {
		localStorage.setItem("lang", "portuguese");
		changelanguage(languages.portuguese);
	}

	else if (userlanguage == "id") {
		localStorage.setItem("lang", "indonesian");
		changelanguage(languages.indonesian);
	}

	else if (userlanguage == "ko") {
		localStorage.setItem("lang", "korean");
		changelanguage(languages.korean);
	}

	else if (userlanguage == "ua") {
		localStorage.setItem("lang", "ukrainian");
		changelanguage(languages.ukrainian);
	}

	else if (userlanguage == "sk") {
		localStorage.setItem("lang", "slovak");
		changelanguage(languages.slovak);
	}

	else if (userlanguage == "hu") {
		localStorage.setItem("lang", "hungarian");
		changelanguage(languages.hungarian);
	}

	else if (userlanguage == "ar") {
		localStorage.setItem("lang", "arabic");
		changelanguage(languages.arabic);
	}

	else if (userlanguage == "he") {
		localStorage.setItem("lang", "hebrew");
		changelanguage(languages.hebrew);
	}

	else if (userlanguage == "fi") {
		localStorage.setItem("lang", "finnish");
		changelanguage(languages.finnish);
	}

	else if (userlanguage == "pl") {
		localStorage.setItem("lang", "polish");
		changelanguage(languages.polish);
	}

	else if (userlanguage == "tr") {
		localStorage.setItem("lang", "turkish");
		changelanguage(languages.turkish);
	}

	else if (userlanguage == "zh") {
		localStorage.setItem("lang", "simplifiedchinese");
		changelanguage(languages.simplifiedchinese);
	}

	else if (userlanguage == "vi") {
		localStorage.setItem("lang", "vietnamese");
		changelanguage(languages.vietnamese);
	}

	else {
		var getLanguage = localStorage.getItem('lang') || 'english';
		changelanguage(languages[getLanguage]);
	}
}


else {
	var getLanguage = localStorage.getItem('lang') || 'english';
	changelanguage(languages[getLanguage]);
}	
	
});