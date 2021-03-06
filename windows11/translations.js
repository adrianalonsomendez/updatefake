$(function () {

    var languages, changelanguage;

    languages = {

        "english": {
			"lang_win11youare": "You're",
			"lang_win11there": "there.",			
			"lang_win11please": "Please keep your computer on.",			
        },

		"french": {
			"lang_win11youare": "You're",
			"lang_win11there": "there.",			
			"lang_win11please": "Please keep your computer on.",
        },
		
		"dutch": {          	
			"lang_win11youare": "You're",
			"lang_win11there": "there.",			
			"lang_win11please": "Please keep your computer on.",
		},        

		"german": {
			"lang_win11youare": "You're",
			"lang_win11there": "there.",			
			"lang_win11please": "Please keep your computer on.",
        },		

		"portuguese": {              			
			"lang_win11youare": "You're",
			"lang_win11there": "there.",			
			"lang_win11please": "Please keep your computer on.",
		},
				  
		"swedish": {
			"lang_win11youare": "You're",
			"lang_win11there": "there.",			
			"lang_win11please": "Please keep your computer on.",
		},        

		"traditionalchinese": {   		
			"lang_win11youare": "You're",
			"lang_win11there": "there.",			
			"lang_win11please": "Please keep your computer on.",
		},		

		"afrikaans": {              			
			"lang_win11youare": "You're",
			"lang_win11there": "there.",			
			"lang_win11please": "Please keep your computer on.",
		},
		
		"czech": {              		
			"lang_win11youare": "You're",
			"lang_win11there": "there.",			
			"lang_win11please": "Please keep your computer on.",
		},
		
		"greek": {              
			"lang_win11youare": "You're",
			"lang_win11there": "there.",			
			"lang_win11please": "Please keep your computer on.",
		},
		
		"thai": {              	
			"lang_win11youare": "You're",
			"lang_win11there": "there.",			
			"lang_win11please": "Please keep your computer on.",
		},
				  
		"romanian": {               			
			"lang_win11youare": "You're",
			"lang_win11there": "there.",			
			"lang_win11please": "Please keep your computer on.",
		},
				  
		"japanese": {              	
			"lang_win11youare": "You're",
			"lang_win11there": "there.",			
			"lang_win11please": "Please keep your computer on.",
		},
				  
		"norwegian": {              
			"lang_win11youare": "You're",
			"lang_win11there": "there.",			
			"lang_win11please": "Please keep your computer on.",
		},
		
		"catalan": {              
			"lang_win11youare": "You're",
			"lang_win11there": "there.",			
			"lang_win11please": "Please keep your computer on.",
		}, 		
		
		"spanish": {              
			"lang_win11youare": "You're",
			"lang_win11there": "there.",			
			"lang_win11please": "Please keep your computer on.",
		},

		"slovak": {
			"lang_win11youare": "You're",
			"lang_win11there": "there.",			
			"lang_win11please": "Please keep your computer on.",
		},
		
		"russian": {
			"lang_win11youare": "You're",
			"lang_win11there": "there.",			
			"lang_win11please": "Please keep your computer on.",
        },
		
		"turkish": {              
			"lang_win11youare": "You're",
			"lang_win11there": "there.",			
			"lang_win11please": "Please keep your computer on.",			  			            
		},
		
		"danish": {                  
			"lang_win11youare": "You're",
			"lang_win11there": "there.",			
			"lang_win11please": "Please keep your computer on.",                                               
        },
		
		"polish": {
			"lang_win11youare": "You're",
			"lang_win11there": "there.",			
			"lang_win11please": "Please keep your computer on.",
        },
		
		"italian": {
			"lang_win11youare": "You're",
			"lang_win11there": "there.",			
			"lang_win11please": "Please keep your computer on.",
        },
	
		"hungarian": {
			"lang_win11youare": "You're",
			"lang_win11there": "there.",			
			"lang_win11please": "Please keep your computer on.",
        },
		
		"korean": {    
			"lang_win11youare": "You're",
			"lang_win11there": "there.",			
			"lang_win11please": "Please keep your computer on.",
        },
	
		"hebrew": {
			"lang_win11youare": "You're",
			"lang_win11there": "there.",			
			"lang_win11please": "Please keep your computer on.",
        },
		
        "finnish": {
			"lang_win11youare": "You're",
			"lang_win11there": "there.",			
			"lang_win11please": "Please keep your computer on.",
        },
		 
		"ukrainian": {
			"lang_win11youare": "You're",
			"lang_win11there": "there.",			
			"lang_win11please": "Please keep your computer on.",
        },
		
		"arabic": {
			"lang_win11youare": "You're",
			"lang_win11there": "there.",			
			"lang_win11please": "Please keep your computer on.",
        },
	
		"galician": {   	
			"lang_win11youare": "You're",
			"lang_win11there": "there.",			
			"lang_win11please": "Please keep your computer on.",
		},
		
		"simplifiedchinese": {              
			"lang_win11youare": "You're",
			"lang_win11there": "there.",			
			"lang_win11please": "Please keep your computer on.",		            	
		},
		
		"indonesian": {       	
			"lang_win11youare": "You're",
			"lang_win11there": "there.",			
			"lang_win11please": "Please keep your computer on.",
		},
			
		"vietnamese": {              						
			"lang_win11youare": "You're",
			"lang_win11there": "there.",			
			"lang_win11please": "Please keep your computer on.",
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