/* =========================================================
   KABE BROADCAST SYSTEM
   ========================================================= */

(function () {

    "use strict";


    /* =====================================================
       DEFAULT DATA
    ===================================================== */

    const DEFAULT_DATA = {

        broadcasts: [

            {
                id: "efthxv7",

                title: "KABE Live",

                date: "2026-10-01",

                time: "19:00",

                description:
                    "Join KABE for a special live broadcast. ♡",

                status: "scheduled",

                guests: [

                    {
                        name: "Kalon",
                        role: "KABE"
                    },

                    {
                        name: "Abloom",
                        role: "KABE"
                    }

                ]

            }

        ]

    };


    /* =====================================================
       STORAGE
    ===================================================== */

    function loadData() {

        try {

            const saved =
                localStorage.getItem(
                    "kabeBroadcastData"
                );


            if (!saved) {

                localStorage.setItem(
                    "kabeBroadcastData",
                    JSON.stringify(
                        DEFAULT_DATA
                    )
                );

                return DEFAULT_DATA;

            }


            const parsed =
                JSON.parse(saved);


            if (
                !parsed ||
                !Array.isArray(
                    parsed.broadcasts
                )
            ) {

                return DEFAULT_DATA;

            }


            return parsed;

        }

        catch (error) {

            console.error(
                "KABE Broadcast:",
                error
            );

            return DEFAULT_DATA;

        }

    }


    function saveData(data) {

        localStorage.setItem(
            "kabeBroadcastData",
            JSON.stringify(data)
        );

    }


    /* =====================================================
       ROOM ID
    ===================================================== */

    function generateRoomId() {

        const characters =
            "abcdefghijklmnopqrstuvwxyz0123456789";

        let result = "";


        for (
            let i = 0;
            i < 7;
            i++
        ) {

            result +=
                characters[
                    Math.floor(
                        Math.random() *
                        characters.length
                    )
                ];

        }


        return result;

    }


    /* =====================================================
       DATE / TIME
    ===================================================== */

    function getBroadcastStatus(broadcast) {

        if (!broadcast.date) {

            return "scheduled";

        }


        const dateTime =
            new Date(
                broadcast.date +
                "T" +
                (
                    broadcast.time ||
                    "00:00"
                )
            );


        const now =
            new Date();


        const end =
            new Date(
                dateTime.getTime() +
                2 * 60 * 60 * 1000
            );


        if (now < dateTime) {

            return "scheduled";

        }


        if (
            now >= dateTime &&
            now <= end
        ) {

            return "live";

        }


        return "ended";

    }


    function formatDate(
        date,
        time
    ) {

        if (!date) {

            return "Date not set";

        }


        const value =
            new Date(
                date +
                "T" +
                (
                    time ||
                    "00:00"
                )
            );


        return value.toLocaleString(
            undefined,
            {
                dateStyle: "long",
                timeStyle: "short"
            }
        );

    }


    /* =====================================================
       GET BROADCAST
    ===================================================== */

    function getBroadcast(
        roomId
    ) {

        const data =
            loadData();


        return data.broadcasts.find(
            broadcast =>
                broadcast.id === roomId
        );

    }


    /* =====================================================
       EXPORT
    ===================================================== */

    window.KABEBroadcast = {

        loadData,

        saveData,

        generateRoomId,

        getBroadcastStatus,

        formatDate,

        getBroadcast

    };

})();