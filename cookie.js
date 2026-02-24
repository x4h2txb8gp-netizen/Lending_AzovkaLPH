document.addEventListener("DOMContentLoaded", function() {

    const popup = document.getElementById("cookie-popup");

    const acceptBtn = document.getElementById("cookie-accept");
    const declineBtn = document.getElementById("cookie-decline");


    // Установить cookie
    function setCookie(name, value, days) {

        let expires = "";

        if (days) {

            const date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));

            expires = "; expires=" + date.toUTCString();

        }

        document.cookie = name + "=" + value + expires + "; path=/";

    }


    // Получить cookie
    function getCookie(name) {

        const nameEQ = name + "=";

        const cookies = document.cookie.split(';');

        for(let i=0;i < cookies.length;i++) {

            let c = cookies[i];

            while (c.charAt(0)==' ') {
                c = c.substring(1,c.length);
            }

            if (c.indexOf(nameEQ) == 0) {

                return c.substring(nameEQ.length,c.length);

            }

        }

        return null;

    }


    // Проверка cookie
    const consent = getCookie("cookieConsent");

    if (!consent) {

        popup.style.display = "block";

    }


    // Принять
    acceptBtn.addEventListener("click", function() {

        setCookie("cookieConsent", "accepted", 365);

        popup.style.display = "none";

    });


    // Отклонить
    declineBtn.addEventListener("click", function() {

        setCookie("cookieConsent", "declined", 365);

        popup.style.display = "none";

    });

});