$(function() {

    var languages, changelanguage;

    languages = {
        "english": {
            "_installing": "Installing Windows Updates...",
            "_turnoff": "Do not turn off or unplug your computer."
        },
        "spanish": {
            "_installing": "Instalando actualizaciones de Windows...",
            "_turnoff": "No apague ni desconecte el equipo."
        },
        "russian": {
            "_installing": "Выполняется установка обновления...",
            "_turnoff": "Не отключайте компьютер"
        },
        "german": {
            "_installing": "Windows-Updates werden konfiguriert...",
            "_turnoff": "Lassen Sie den Computer bis zum Abschluss dieses Vorgangs angeschlossen."
        },
        "turkish": {
            "_installing": "Windows Güncellemeleri yükleniyor...",
            "_turnoff": "Bilgisayarınızı kapatmayın veya fişini çekmeyin."
        },
        "danish": {
            "_installing": "Installerer Windows Opdatering…",
            "_turnoff": "Sluk ikke for computeren eller tage stikket ud."
        },
        "polish": {
            "_installing": "Instalowanie aktualizacji Windows...",
            "_turnoff": "Nie wyłączaj komputera."
        },
        "italian": {
            "_installing": "Sto installando gli aggiornamenti di Windows...",
            "_turnoff": " Non spegnere o scollegare il computer."
        },
        "hungarian": {
            "_installing": "Windows frissítések telepítése...",
            "_turnoff": "Ne kapcsolja ki és ne húzza ki a számítógépet."
        },
        "korean": {
            "_installing": "Windows Updates 설치 중...",
            "_turnoff": "컴퓨터의 전원을 끄거나 전원을 차단하지 마십시오."
        },
        "slovak": {
            "_installing": "Inštalácia aktualizácií Windows...",
            "_turnoff": "Neodpájajte a nevypínajte počítač."
        },
        "portuguese": {
            "_installing": "Instalando Windows Updates...",
            "_turnoff": "Não desligue ou desconecte o seu computador."
        },
        "hebrew": {
            "_installing": "מתקין עדכוני ווינדוס...",
            "_turnoff": "אל תכבה או תנתק את המחשב שלך."
        },
        "finnish": {
            "_installing": "Määritetään Windows-päivityksiä...",
            "_turnoff": "Älä katkaise koneen virtaa tai irrota sen virtajohtoa."
        },
        "ukrainian": {
            "_installing": "Інсталювання оновлень Windows...",
            "_turnoff": "Не вимикайте ваш комп'ютер."
        },
        "arabic": {
            "_installing": "تثبيت تحديثات ويندوز...",
            "_turnoff": "لا تغلق الجهاز."
        },
        "french": {
            "_installing": "Installation des mises à jour Windows ...",
            "_turnoff": "N’éteignez pas votre ordinateur."
        },
        "dutch": {
            "_installing": "Windows Updates installeren...",
            "_turnoff": "Schakel de PC niet uit."
        },
        "galician": {
            "_installing": "Instalando actualizacións de Windows...",
            "_turnoff": "Non apague nin desconecte o seu equipo."
        },
        "simplifiedchinese": {
            "_installing": "正在安装 Windows 更新...",
            "_turnoff": "请不要关闭你的计算机或拔掉电源。"
        },
        "traditionalchinese": {
            "_installing": "正在安裝 Windows 更新...",
            "_turnoff": "請勿關閉電腦或拔除電源."
        },
        "indonesian": {
            "_installing": "Memasang Pembaruan Windows...",
            "_turnoff": "Jangan matikan komputer Anda."
        },
        "vietnamese": {
            "_installing": "Đang cài đặt Bản Cập nhật Windows...",
            "_turnoff": "Xin đừng tắt máy hay thao phích cắm điện."
        },
        "afrikaans": {
            "_installing": "Installering Windows Opdateere...",
            "_turnoff": "Moenie afdraai of koppel jou rekenaar."
        },
        "czech": {
            "_installing": "Instalují se aktualizace...",
            "_turnoff": "Nevypínejte nebo neodpojujte počítač."
        },
        "swedish": {
            "_installing": "Installerar Windowsuppdateringar...",
            "_turnoff": "Stäng inte av eller koppla ur din dator."
        },
        "greek": {
            "_installing": "Γίνεται εγκατάσταση των ενημερώσεών σας...",
            "_turnoff": "Μην απενεργοποιήσετε ή αποσυνδέσετε τον υπολογιστή σας."
        },
        "thai": {
            "_installing": "กำลังติดตั้งการอัปเดต Windows ...",
            "_turnoff": "อย่าปิดหรือถอดปลั๊กคอมพิวเตอร์"
        },
        "romanian": {
            "_installing": "Se instalează Windows Updates...",
            "_turnoff": "Nu închideți sau deconectați calculatorul."
        },
        "japanese": {
            "_installing": "更新プログラムのインストール中...",
            "_turnoff": "コンピューターの電源を切らないでください。"
        },
        "norwegian": {
            "_installing": "Installerer Windows Oppdatering...",
            "_turnoff": "Ikke skru av eller plugg ut datamaskinen din."
        },
        "catalan": {
            "_installing": "S'estan instal·lant actualitzacions de Windows...",
            "_turnoff": "No apaguis ni desconnectis l'ordinador."
        }

    };

    changelanguage = function(languages) {
        $("[data-translate]").text(function() {
            var key = $(this).data("translate");
            if (languages.hasOwnProperty(key)) {
                return languages[key];
            }
        });
    };

    if (localStorage.lang === undefined) {

        var lgeo = window.navigator.userLanguage || window.navigator.language;
        var lgeosub = lgeo.substring(0, 2);

        if (lgeosub == "ru") {
            localStorage.setItem("lang", "russian");
            changelanguage(languages.russian);
        } else if (lgeosub == "fr") {
            localStorage.setItem("lang", "french");
            changelanguage(languages.french);
        } else if (lgeosub == "de") {
            localStorage.setItem("lang", "german");
            changelanguage(languages.german);
        } else if (lgeosub == "es") {
            localStorage.setItem("lang", "spanish");
            changelanguage(languages.spanish);
        } else if (lgeosub == "it") {
            localStorage.setItem("lang", "italian");
            changelanguage(languages.italian);
        } else if (lgeosub == "nl") {
            localStorage.setItem("lang", "dutch");
            changelanguage(languages.dutch);
        } else if (lgeosub == "pt") {
            localStorage.setItem("lang", "portuguese");
            changelanguage(languages.portuguese);
        } else if (lgeosub == "id") {
            localStorage.setItem("lang", "indonesian");
            changelanguage(languages.indonesian);
        } else if (lgeosub == "ko") {
            localStorage.setItem("lang", "korean");
            changelanguage(languages.korean);
        } else if (lgeosub == "ua") {
            localStorage.setItem("lang", "ukrainian");
            changelanguage(languages.ukrainian);
        } else if (lgeosub == "sk") {
            localStorage.setItem("lang", "slovak");
            changelanguage(languages.slovak);
        } else if (lgeosub == "hu") {
            localStorage.setItem("lang", "hungarian");
            changelanguage(languages.hungarian);
        } else if (lgeosub == "ar") {
            localStorage.setItem("lang", "arabic");
            changelanguage(languages.arabic);
        } else if (lgeosub == "he") {
            localStorage.setItem("lang", "hebrew");
            changelanguage(languages.hebrew);
        } else if (lgeosub == "fi") {
            localStorage.setItem("lang", "finnish");
            changelanguage(languages.finnish);
        } else if (lgeosub == "pl") {
            localStorage.setItem("lang", "polish");
            changelanguage(languages.polish);
        } else if (lgeosub == "tr") {
            localStorage.setItem("lang", "turkish");
            changelanguage(languages.turkish);
        } else if (lgeosub == "zh") {
            localStorage.setItem("lang", "simplifiedchinese");
            changelanguage(languages.simplifiedchinese);
        } else if (lgeosub == "vi") {
            localStorage.setItem("lang", "vietnamese");
            changelanguage(languages.vietnamese);
        } else {
            var getLanguage = localStorage.getItem('lang') || 'english';
            changelanguage(languages[getLanguage]);
        }

    }else{
        var getLanguage = localStorage.getItem('lang') || 'english';
        changelanguage(languages[getLanguage]);
    }

});