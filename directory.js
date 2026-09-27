document.addEventListener("DOMContentLoaded", function () {

    /* Remove any old directory */
    const oldDirectory =
        document.querySelector(".website-directory");

    if (oldDirectory) {
        oldDirectory.remove();
    }


    /*
        NORMALIZE CURRENT PATH
    */

    function normalizePath(path) {

        path =
            path
                .toLowerCase()
                .split("?")[0]
                .split("#")[0];


        /*
            Remove trailing slashes
        */

        path =
            path.replace(/\/+$/, "");


        /*
            Root
        */

        if (
            path === "" ||
            path === "/"
        ) {
            return "";
        }


        /*
            Convert /index.html
            and /index into /
        */

        if (
            path === "/index.html" ||
            path === "/index"
        ) {
            return "";
        }


        /*
            Convert:

            /news/index.html
            /news/index

            into:

            /news
        */

        path =
            path.replace(
                /\/index(?:\.html)?$/,
                ""
            );


        /*
            Convert:

            /news.html

            into:

            /news
        */

        path =
            path.replace(
                /\.html$/,
                ""
            );


        /*
            Make sure trailing slash
            is removed after conversion
        */

        path =
            path.replace(/\/+$/, "");


        return path || "";

    }


    let currentPath =
        normalizePath(
            window.location.pathname
        );


    /*
        404 PAGE

        404 keeps its own top bar
        and does not receive the
        bottom directory.
    */

    if (
        currentPath === "/404"
    ) {
        return;
    }


    /*
        CONSTRUCT PAGE
    */

    const isConstruct =
        currentPath === "/construct";


    /*
        DIRECTORY STYLES
    */

    const style =
        document.createElement("style");


    style.textContent = `

        .website-directory {
            position: relative;
            z-index: 2;

            width: 100%;
            max-width: 720px;

            margin: 55px auto 0;
            padding: 30px 22px 35px;

            text-align: center;

            border-top:
                1px solid
                rgba(255,150,220,.15);
        }


        .directory-title {
            font-family:
                "DynaPuff",
                sans-serif;

            font-size: 18px;

            font-weight: 500;

            color: #ffd2ed;

            margin-bottom: 18px;
        }


        .directory-links {
            display: flex;

            justify-content: center;

            align-items: center;

            gap: 8px;

            flex-wrap: wrap;

            margin-bottom: 30px;
        }


        .directory-links a {
            color: #ffdff1;

            text-decoration: none;

            font-size: 11px;

            font-weight: 700;

            padding: 7px 12px;

            border-radius: 999px;

            border:
                1px solid transparent;

            transition: .3s ease;
        }


        .directory-links a:hover {
            color: #ff91d4;

            background:
                rgba(255,100,200,.06);

            transform:
                translateY(-1px);
        }


        /*
            ACTIVE PAGE
        */

        .directory-links a.active {
            color: #fff;

            background:
                rgba(255,145,212,.11);

            border-color:
                rgba(255,145,212,.16);

            box-shadow:
                0 0 14px
                rgba(255,145,212,.08);
        }


        .directory-links a.active::before {
            content: "𐙚";

            color: #ff91d4;

            margin-right: 5px;

            font-size: 9px;
        }


        .directory-social-title {
            font-family:
                "DynaPuff",
                sans-serif;

            font-size: 15px;

            font-weight: 500;

            color: #ffd2ed;

            margin-bottom: 15px;
        }


        .directory-socials {
            display: flex;

            justify-content: center;

            align-items: center;

            gap: 24px;
        }


        .directory-social {
            display: flex;

            flex-direction: column;

            align-items: center;

            text-decoration: none;

            color: #ffdff1;

            transition: .3s ease;
        }


        .directory-social:hover {
            transform:
                translateY(-3px);
        }


        .directory-social svg {
            width: 27px;

            height: 27px;

            margin-bottom: 7px;

            fill: #ffdff1;

            transition: .3s ease;
        }


        .directory-social:hover svg {
            fill: #ff91d4;

            filter:
                drop-shadow(
                    0 0 8px
                    rgba(255,100,200,.45)
                );
        }


        .directory-username {
            font-size: 10px;

            font-weight: 700;

            color: #d6aeca;
        }


        .directory-copy {
            margin-top: 25px;

            font-size: 10px;

            color: #d6aeca;
        }


        .directory-copy span {
            color: #ff91d4;
        }


        @media (max-width: 500px) {

            .directory-links {
                gap: 5px;
            }


            .directory-links a {
                padding:
                    7px 9px;

                font-size: 10px;
            }

        }

    `;


    document.head.appendChild(style);


    /*
        PAGE DEFINITIONS
    */

    const pages = [

        {
            name: "Home",
            href: "/",
            path: ""
        },

        {
            name: "Shop",
            href: "/shop",
            path: "/shop"
        },

        {
            name: "Music",
            href: "/music",
            path: "/music"
        },

        {
            name: "News",
            href: "/news",
            path: "/news"
        },

        {
            name: "Careers",
            href: "/careers",
            path: "/careers"
        },

        {
            name: "Credits",
            href: "/credits",
            path: "/credits"
        }

    ];


    /*
        CREATE NAVIGATION
    */

    const navigation =
        pages
            .map(page => {

                const active =
                    currentPath === page.path;


                return `

                    <a
                        href="${page.href}"
                        class="${
                            active
                                ? "active"
                                : ""
                        }"

                        ${
                            active
                                ? 'aria-current="page"'
                                : ""
                        }
                    >

                        ${page.name}

                    </a>

                `;

            })
            .join("");


    /*
        CREATE DIRECTORY
    */

    const directory =
        document.createElement("footer");


    directory.className =
        "website-directory";


    directory.innerHTML = `

        <div class="directory-title">
            KABE 𐙚
        </div>


        <nav
            class="directory-links"
            aria-label="Website Directory"
        >

            ${navigation}

        </nav>


        ${
            isConstruct
                ? ""
                : `

                    <div class="directory-social-title">
                        find KABE 𐙚
                    </div>


                    <div class="directory-socials">


                        <!-- INSTAGRAM -->

                        <a
                            class="directory-social"
                            href="https://instagram.com/kabe.world"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="KABE on Instagram"
                        >

                            <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >

                                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0-3-3Zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"/>

                            </svg>


                            <span class="directory-username">
                                @kabe.world
                            </span>

                        </a>


                        <!-- TIKTOK -->

                        <a
                            class="directory-social"
                            href="https://tiktok.com/@kabeworld"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="KABE on TikTok"
                        >

                            <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >

                                <path d="M16.6 2h3.05c.28 1.72 1.25 3.22 2.65 4.2v3.08a8.15 8.15 0 0 1-2.65-.78v6.75A6.75 6.75 0 1 1 13 8.5v3.18a3.65 3.65 0 1 0 1.55 2.97V2h2.05Z"/>

                            </svg>


                            <span class="directory-username">
                                @kabeworld
                            </span>

                        </a>


                    </div>

                `
        }


        <div class="directory-copy">
            made with
            <span>♡</span>
            for KABE · © 2026 KABE
        </div>

    `;


    document.body.appendChild(
        directory
    );

});