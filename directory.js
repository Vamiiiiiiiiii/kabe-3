document.addEventListener("DOMContentLoaded", function () {

    /* Remove any old directory */
    const oldDirectory = document.querySelector(".website-directory");

    if (oldDirectory) {
        oldDirectory.remove();
    }

    const style = document.createElement("style");

    style.textContent = `
        .website-directory {
            position: relative;
            z-index: 2;

            width: 100%;
            max-width: 1000px;

            margin: 32px auto 0;
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
            width: 100%;

            display: flex;
            align-items: center;
            justify-content: center;

            flex-wrap: nowrap;

            gap: 8px;

            margin: 0 auto 22px;
        }

        .directory-links a {
            flex: 1 1 0;

            min-width: 0;

            display: flex;
            align-items: center;
            justify-content: center;

            padding: 8px 9px;

            border: 1px solid rgba(255,145,212,.14);
            border-radius: 999px;

            background: rgba(255,145,212,.035);

            color: #ff91d4;

            font-family: "Nunito", sans-serif;
            font-size: 10px;
            font-weight: 800;

            text-decoration: none;
            white-space: nowrap;

            transition:
                background .2s ease,
                color .2s ease,
                border-color .2s ease,
                transform .2s ease;
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

            flex-wrap: wrap;

            gap: 10px;

            margin-bottom: 14px;
        }

        .directory-socials a {
            color: #9d8b95;

            font-size: 9px;
            font-weight: 700;

            text-decoration: none;

            transition: color .2s ease;
        }

        .directory-socials a:hover {
            color: #ff91d4;
        }

        .directory-footer {
            color: #756670;

            font-size: 9px;
            line-height: 1.5;
        }

        .directory-footer span {
            color: #ff91d4;
        }

        @media (max-width: 700px) {

            .website-directory {
                width: calc(100% + 30px);
                max-width: none;

                margin-left: -15px;
                margin-right: -15px;

                padding: 22px 10px 25px;
            }

            .directory-title {
                font-size: 15px;
                margin-bottom: 11px;
            }

            .directory-links {
                width: 100%;

                gap: 5px;

                margin-bottom: 19px;
            }

            .directory-links a {
                padding: 8px 3px;

                font-size: 8px;
            }

            .directory-socials {
                gap: 9px;
            }

            .directory-socials a {
                font-size: 8px;
            }

            .directory-footer {
                font-size: 8px;
            }
        }

        @media (max-width: 390px) {

            .website-directory {
                padding-left: 7px;
                padding-right: 7px;
            }

            .directory-links {
                gap: 3px;
            }

            .directory-links a {
                padding: 8px 2px;
                font-size: 7px;
            }
        }
    `;

    document.head.appendChild(style);


    /* Directory */

    const directory = document.createElement("footer");

    directory.className = "website-directory";

    directory.innerHTML = `

        <div class="directory-title">
            KABE 𐙚
        </div>

        <nav class="directory-links">

            <a href="/">
                Home
            </a>

            <a href="/news">
                News
            </a>

            <a href="/music">
                Music
            </a>

            <a href="/careers">
                Careers
            </a>

            <a href="/credits">
                Credits
            </a>

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

});