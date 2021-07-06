import styles from "./utility.module.css"

export function SendButtons({ text }) {
    //console.log(text);
    if (text === "JOIN US") {
        return <a href="/" className={ styles.aBackColorLightBlue}>{text}</a>
    } else if (text === "SETTINGS") {
        return <a href="/" className={ styles.aBackColorLightGray}>{text}</a>
    } else if (text === "LOGIN") {
        return <a href="/" className={ styles.aBackColorYellow}>{text}</a>
    } else if (text === "CONTACT US") {
        return <a href="/" className={ styles.aBackColorCrimson}>{text}</a>
    } else if (text === "SEARCH") {
        return <a href="/" className={ styles.aBackColorLightGreen}>{text}</a>
    } else if (text === "HELP") {
        return <a href="/" className={ styles.aBackColorLightViolet}>{text}</a>
    } else if (text === "HOME") {
        return <a href="/" className={ styles.aBackColorLightPink}>{text}</a>
    } else if (text === "DOWNLOAD") {
        return <a href="/" className={ styles.aBackColorBrown}>{text}</a>
    }
    
}