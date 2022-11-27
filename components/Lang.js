import es from "../public/locales/es.json"
import en from "../public/locales/en.json"
import Cookies from "universal-cookie";

export default function getLang() {
    const cookies = new Cookies();
    var lang = cookies.get("lang");
    if (lang === "") {
        return es
    }

    if (lang === "es") {
        return es
    } else {
        return en
    }

}