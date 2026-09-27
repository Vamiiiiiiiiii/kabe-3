(function () {

    function createDirectory() {

        const oldDirectory = document.querySelector(".website-directory");

        if (oldDirectory) {
            oldDirectory.remove();
        }

        const oldStyle = document.getElementById("kabe-directory-style");

        if (oldStyle) {
            oldStyle.remove();
        }

        const style = document.createElement("style");

        style.id = "kabe-directory-style";

        style.textContent = `

            .website-directory {
                position: relative;
                z-index: 100;

                width: 100%;
                max-width: 1000px;

                margin: 28px auto 0;
                padding: 24px 22px 28px;

                text-align: center;

                border-top: 1px solid rgba(255,150,220,.15);
            }

            .directory-title {
                margin-bottom: 13px;

                color: #ff91d4;

                font-family: "DynaPuff", sans-serif;
                font-size: 17px;
                font-weight: 500;
            }

            .directory-links {
                display: grid;
                grid-template-columns: repeat(5, minmax(0, 1fr));

                gap: 7px;

                width: 100%;
                margin: 0 auto 20px;
            }

            .directory-links a {
                display: flex;
                align-items: center;
                justify-content: center;

                padding: 8px 5px;

                border: 1px solid rgba(255,145,212,.14);
                border-radius: 999px;

                background: rgba(255,145,212,.035);

                color: #ff91d4;

                font-family: "Nunito", sans-serif;
                font-size: 10px;
                font-weight: 800;

                text-decoration: none;
                white-space: nowrap;

                transition: .2s ease;
            }

            .directory-links a:hover {
                background: #ff91d4;
                border-color: #ff91d4;
                color: #080508;

                transform: translateY(-1px);
            }

            .directory-socials {
                display: flex;
                align-items: center;
                justify-content: center;

                gap: 10px;
                flex-wrap: wrap;

                margin-bottom: 13px;
            }

            .directory-socials a {
                color: #9d8b95;

                font-size: 9px;
                font-weight: 700;

                text-decoration: none;
            }

            .directory-socials a:hover {
                color: #ff91d4;
            }

            .directory-footer {
                color: #756670;
                font-size: 9px;
            }

            .directory-footer span {
                color: #ff91d4;
            }


            /* NO NAVIGATION ON MOBILE */

            @media (max-width: 700px) {

                .directory-links {
                    display: none;
                }

                .website-directory {
                    margin-top: 25px;
                    padding: 21px 10px 25px;
                }

            }

        `;

        document.head.appendChild(style);

        const directory = document.createElement("footer");

        directory.className = "website-directory";

        directory.innerHTML = `

            <div class="directory-title">
                KABE 𐙚
            </div>

            <nav
                class="directory-links"
                aria-label="KABE navigation"
            >
                <a href="/">Home</a>
                <a href="/news">News</a>
                <a href="/live">Live</a>
                <a href="/broadcast">Broadcast</a>
                <a href="/music">Music</a>
                <a href="/careers">Careers</a>
                <a href="/credits">Credits</a>
            </nav>

            <div class="directory-socials">

                <a
                    href="https://instagram.com/kabe.world"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Instagram · @kabe.world
                </a>

                <a
                    href="https://tiktok.com/@kabeworld"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    TikTok · @kabeworld
                </a>

            </div>

            <div class="directory-footer">
                made with <span>♡</span> for KABE · © 2026 KABE
            </div>

        `;

        document.body.appendChild(directory);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", createDirectory);
    } else {
        createDirectory();
    }

})();