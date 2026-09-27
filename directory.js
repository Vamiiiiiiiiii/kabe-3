document.addEventListener("DOMContentLoaded", function () {

    /*
        REMOVE ANY OLD DIRECTORY
    */

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

        path =
            path.replace(/\/+$/, "");

        if (
            path === "" ||
            path === "/" ||
            path === "/index" ||
            path === "/index.html"
        ) {
            return "";
        }

        path =
            path.replace(
                /\/index(?:\.html)?$/,
                ""
            );

        path =
            path.replace(
                /\.html$/,
                ""
            );

        path =
            path.replace(/\/+$/, "");

        return path || "";

    }


    let currentPath =
        normalizePath(
            window.location.pathname
        );


    /*
        PAGE TYPES
    */

    const is404 =
        currentPath === "/404";

    const isConstruct =
        currentPath === "/construct";


    /*
        NAVIGATION STYLES
        FULL WIDTH
    */

    const style =
        document.createElement("style");


    style.textContent = `

        /*
            TOP NAVIGATION
        */

        .website-navigation {
            position: relative;

            z-index: 9999;

            width: 100%;

            box-sizing: border-box;

            border-bottom:
                1px solid
                rgba(255,145,212,.12);

            background:
                rgba(0,0,0,.72);

            backdrop-filter:
                blur(14px);

            -webkit-backdrop-filter:
                blur(14px);
        }


        .website-navigation-inner {
            width: 100%;

            box-sizing: border-box;

            padding:
                14px 24px;

            display: flex;

            align-items: center;

            justify-content: space-between;

            gap: 20px;
        }


        .website-navigation-brand {
            color: #fff;

            text-decoration: none;

            font-family:
                "DynaPuff",
                sans-serif;

            font-size: 18px;

            font-weight: 600;

            white-space: nowrap;

            transition: .3s ease;
        }


        .website-navigation-brand:hover {
            color: #ff91d4;

            text-shadow:
                0 0 12px
                rgba(255,145,212,.3);
        }


        .website-navigation-links {
            display: flex;

            align-items: center;

            justify-content: flex-end;

            gap: 6px;

            flex-wrap: wrap;
        }


        .website-navigation-links a {
            position: relative;

            color: #ffdff1;

            text-decoration: none;

            font-family:
                "Nunito",
                sans-serif;

            font-size: 11px;

            font-weight: 800;

            padding:
                7px 11px;

            border-radius: 999px;

            transition: .3s ease;
        }


        .website-navigation-links a:hover {
            color: #ff91d4;

            background:
                rgba(255,145,212,.06);
        }


        .website-navigation-links a.active {
            color: #fff;

            background:
                rgba(255,145,212,.11);

            border:
                1px solid
                rgba(255,145,212,.16);

            box-shadow:
                0 0 14px
                rgba(255,145,212,.08);
        }


        .website-navigation-links a.active::before {
            content: "𐙚";

            color: #ff91d4;

            margin-right: 5px;

            font-size: 9px;
        }


        /*
            BOTTOM DIRECTORY
        */

        .website-directory {
            position: relative;

            z-index: 2;

            width: 100%;

            box-sizing: border-box;

            margin: 55px 0 0;

            padding:
                30px 22px 35px;

            text-align: center;

            border-top:
                1px solid
                rgba(255,150,220,.15);
        }


        .directory-inner {
            width: 100%;

            max-width: 720px;

            margin: 0 auto;
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

            font-family:
                "Nunito",
                sans-serif;

            font-size: 11px;

            font-weight: 700;

            padding:
                7px 12px;

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


        /*
            MOBILE
        */

        @media (max-width: 700px) {

            .website-navigation-inner {
                padding:
                    12px 15px;

                flex-direction: column;

                gap: 10px;
            }


            .website-navigation-links {
                width: 100%;

                justify-content: center;
            }


            .website-navigation-links a {
                font-size: 10px;

                padding:
                    6px 9px;
            }

        }


        @media (max-width: 500px) {

            .website-navigation-brand {
                font-size: 17px;
            }


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
        CREATE NAVIGATION LINKS
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
        CREATE TOP NAVIGATION
        THIS APPEARS ON EVERY PAGE
        INCLUDING 404
    */

    const navigationBar =
        document.createElement("header");


    navigationBar.className =
        "website-navigation";


    navigationBar.innerHTML = `

        <div class="website-navigation-inner">

            <a
                class="website-navigation-brand"
                href="/"
            >
                KABE 𐙚
            </a>


            <nav
                class="website-navigation-links"
                aria-label="Main Navigation"
            >

                ${navigation}

            </nav>

        </div>

    `;


    /*
        PUT NAVIGATION AT THE TOP
    */

    document.body.prepend(
        navigationBar
    );


    /*
        404 PAGE
        NAVIGATION STAYS
        BOTTOM DIRECTORY DOES NOT
    */

    if (is404) {
        return;
    }


    /*
        CREATE BOTTOM DIRECTORY
    */

    const directory =
        document.createElement("footer");


    directory.className =
        "website-directory";


    directory.innerHTML = `

        <div class="directory-inner">


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


        </div>

    `;


    /*
        ADD DIRECTORY TO PAGE
    */

    document.body.appendChild(
        directory
    );

});