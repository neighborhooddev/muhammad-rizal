// =========================
// MOBILE NAVIGATION
// =========================

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");

if (toggle && menu) {

    toggle.addEventListener("click", () => {

        const isOpen = menu.classList.toggle("open");

        toggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        document.body.classList.toggle(
            "menu-open",
            isOpen
        );

    });


    // Tutup menu setelah memilih halaman
    document
        .querySelectorAll(".nav-menu a")
        .forEach(link => {

            link.addEventListener("click", () => {

                menu.classList.remove("open");

                toggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                document.body.classList.remove(
                    "menu-open"
                );

            });

        });

}


// =========================
// SCROLL REVEAL ANIMATION
// =========================

const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    reveals.forEach(element => {

        observer.observe(element);

    });

} else {

    // Fallback untuk browser lama

    reveals.forEach(element => {

        element.classList.add(
            "visible"
        );

    });

}


// =========================
// ESCAPE KEY
// =========================

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            menu &&
            menu.classList.contains("open")
        ) {

            menu.classList.remove("open");

            toggle?.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.classList.remove(
                "menu-open"
            );

            toggle?.focus();

        }

    }
);