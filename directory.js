document.addEventListener("DOMContentLoaded", function () {

    const style = document.createElement("style");

    style.textContent = `
        .website-directory {
            position: relative;
            z-index: 2;

            width: 100%;
            max-width: 720px;

            margin: 55px auto 0;
            padding: 30px 22px 35px;

            text-align: center;

            border-top: 1px solid rgba(255,150,220,.15);
        }

        .directory-title {
            font-family: "DynaPuff", sans-serif;
            font-size: 18px;
            font-weight: 500;

            color: #ffd2ed;

            margin-bottom: 16px;
        }

        .directory-links,
        .directory-socials {
            display: flex;
            justify-content: center;
            align-items: center;

            gap: 8px;
            flex-wrap: wrap;
        }

        .directory-links {
            margin-bottom: 12px;
        }

        .directory-links a,
        .directory-socials a {
            color: #ffdff1;

            text-decoration: none;

            font-size: 11px;
            font-weight: 700;

            padding: 7px 12px;

            border-radius: 999px;

            transition: .3s ease;
        }

        .directory-links a:hover,
        .directory-socials a:hover {
            color: #ff91d4;

            background: rgba(255,100,200,.06);

            transform: translateY(-1px);
        }

        .directory-copy {
            margin-top: 20px;

            font-size: 10px;

            color: #d6aeca;
        }

        .directory-copy span {
            color: #ff91d4;
        }
    `;

    document.head.appendChild(style);


    const directory = document.createElement("footer");

    directory.className = "website-directory";

    directory.innerHTML = `
        <div class="directory-title">
            KABE 𐙚
        </div>

        <nav class="directory-links" aria-label="Website Directory">

            <a href="/">Home</a>

            <a href="/news">News</a>

            <a href="/careers">Careers</a>

            <a href="/join">Join</a>

        </nav>

        <div class="directory-socials">

            <a
                href="https://instagram.com/kabeworldofficial"
                target="_blank"
                rel="noopener noreferrer"
            >
                Instagram
            </a>

            <a
                href="https://tiktok.com/@kabeworld"
                target="_blank"
                rel="noopener noreferrer"
            >
                TikTok
            </a>

        </div>

        <div class="directory-copy">
            made with <span>♡</span> for KABE
        </div>
    `;

    document.body.appendChild(directory);

});