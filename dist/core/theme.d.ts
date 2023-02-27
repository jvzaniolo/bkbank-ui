declare const config: {
    readonly fontFamily: {
        readonly montserrat: readonly ["Montserrat", "sans-serif"];
    };
    readonly fontSize: {
        readonly '2xs': "0.625rem";
    };
    readonly colors: {
        readonly primary: {
            readonly lightest: "#CBD6FF";
            readonly lighter: "#A1A1FF";
            readonly light: "#7474DB";
            readonly medium: "#28289C";
            readonly dark: "#0F0F70";
            readonly pure: "#00003C";
        };
        readonly secondary: {
            readonly lightest: "#D7E2FF ";
            readonly lighter: "#ACC7FF";
            readonly light: "#6590DE";
            readonly medium: "#2E5DA8";
            readonly pure: "#2B4A7E";
            readonly dark: "#002F67";
        };
        readonly highlight: {
            readonly lightest: "#BEF9FF ";
            readonly lighter: "#96F5FE";
            readonly light: "#41EFFF";
            readonly pure: "#00CDDF";
            readonly medium: "#00BFD0";
            readonly dark: "#009AA8";
        };
        readonly success: {
            readonly light: "#40E4B8";
            readonly pure: "#00BA88";
            readonly medium: "#00976E";
            readonly dark: "#004D38";
        };
        readonly warning: {
            readonly light: "#F4A360";
            readonly pure: "#EB7E24";
            readonly medium: "#DB6300";
            readonly dark: "#9D4700";
        };
        readonly error: {
            readonly light: "#F3635F";
            readonly pure: "#DE3730";
            readonly medium: "#BD0600";
            readonly dark: "#770300";
        };
        readonly high: {
            readonly light: "#F2F2F2";
            readonly pure: "#FFFFFF";
            readonly medium: "#E0E0E0";
            readonly dark: "#BFBFBF";
        };
        readonly low: {
            readonly light: "#A4A4A4";
            readonly pure: "#000000";
            readonly medium: "#7A7A7A";
            readonly dark: "#545454";
        };
    };
};
export default config;
