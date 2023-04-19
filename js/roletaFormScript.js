let params = window.location.search;

var handleSubmit = function (event) {
    event.preventDefault();
    let name = document.getElementById('user_name').value;
    let user_allias = document.getElementById('user_allias').value;
    let user_phone = document.getElementById('user_phone').value;
    let city = document.getElementById('city').value;
    let street = document.getElementById('street').value;
    let complement = document.getElementById('complement').value;
    let email = document.getElementById('email').value;
    let observation = document.getElementById('observation').value;


    if ((name && name !== "") && (user_phone && user_phone.length > 13) && (user_allias && user_allias !== "") && (user_phone && user_phone !== "") && (city && city !== "") && (street && street !== "") && (complement && complement !== "") && (email && email !== "")) {
        let requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                    name: name,
                    user_allias: user_allias,
                    user_phone: user_phone,
                    city: city,
                    street: street,
                    complement: complement,
                    email: email,
                    observation: observation,
                    product: 'Lipo Corpus'
            }),
            headers: {"Content-Type": "application/json"}
        };

        fetch("https://callcenter.grupobhever.com/latam-contact", requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
            });

        $(".order-block").fadeOut();


        var resultWrapper = document.querySelector(".end-result-wrapper");
        setTimeout(function () {
            resultWrapper.style.display = "block";
            $(".end_result_class").slideDown();
        }, 1000);

    } else {
        if (!(name && name !== "")) {
            document.getElementById('user_name').classList.add('inputErrorForm');
        } else {
            document.getElementById('user_name').classList.remove('inputErrorForm');
        }

        if (!(user_phone && user_phone.length > 13)) {
            document.getElementById('user_name').classList.add('inputErrorForm');
        } else {
            document.getElementById('user_name').classList.remove('inputErrorForm');
        }

        if (!(city && city !== "")) {
            document.getElementById('user_name').classList.add('inputErrorForm');
        } else {
            document.getElementById('user_name').classList.remove('inputErrorForm');
        }

        if (!(complement && complement !== "")) {
            document.getElementById('user_name').classList.add('inputErrorForm');
        } else {
            document.getElementById('user_name').classList.remove('inputErrorForm');
        }

        if (!(email && email !== "")) {
            document.getElementById('user_name').classList.add('inputErrorForm');
        } else {
            document.getElementById('user_name').classList.remove('inputErrorForm');
        }
    }
};


function mask(o, f) {
    setTimeout(function () {
        var v = mphone(o.value);
        if (v != o.value) {
            o.value = v;
        }
    }, 1);
}

function mphone(v) {
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
        r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
        r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
        r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
        r = r.replace(/^(\d*)/, "($1");
    }
    return r;
}


$(document).ready(function () {
    window.onbeforeunload = "";
    history.pushState({}, "", location.href);
    history.pushState({}, "", location.href);
    window.onpopstate = function () {
        setTimeout(function () {
            if ($("#popup").is(":visible")) {
                off();
            }
        }, 1);
    };

    var wheel = document.querySelector(".wheel-img");
    var resultWrapper = document.querySelector(".spin-result-wrapper");
    $(".cursor-text").click(function () {
        $(".cursor-text").css("pointer-events", "none");
        if (wheel.classList.contains("rotated")) {
            resultWrapper.style.display = "block";
        } else {
            wheel.classList.add("super-rotation");
            setTimeout(function () {
                resultWrapper.style.display = "block";
            }, 8000);
            setTimeout(function () {
                $(".spin-wrapper").slideUp();
                $(".order-block").slideDown();
            }, 10000);
            wheel.classList.add("rotated");
        }
    });

    $(".pop-up-button-roleta")
        .not("#link_offer, #cert, .nonlink")
        .click(function (e) {
            e.preventDefault();
            $(".spin-result-wrapper").fadeOut();
            /*  var top = $("#toform").offset().top;
             $("body,html").animate(
                 {
                     scrollTop: top,
                 },
                 800
             );*/
        });

    $(".pop-up-button-end-form")
        .not("#link_offer, #cert, .nonlink")
        .click(function (e) {
            e.preventDefault();
            $(".end-result-wrapper").fadeOut();
            /*  var top = $("#toform").offset().top;
             $("body,html").animate(
                 {
                     scrollTop: top,
                 },
                 800
             );*/
        });
})


$(".link").click(function () {
    window.location.href =
        "#roleta";
});

var form = document.getElementById("form_id");
form.addEventListener("submit", handleSubmit, true);
