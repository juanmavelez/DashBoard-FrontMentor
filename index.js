const root = document.documentElement;

const toggle = styles.getPropertyValue("--Toggle");
const toggle_darkMode = styles.getPropertyValue("--Toggle-Darkmode");

const dark_theme_bg = styles.getPropertyValue("--Dark_Theme_BG");
const dark_theme_TOP_BG = styles.getPropertyValue("--Dark_Theme_TOP_BG");
const dark_theme_CARD_BG = styles.getPropertyValue("--Dark_Theme_CARD_BG");
const dark_theme_TEXT = styles.getPropertyValue("--Dark_Theme_TEXT");
const dark_theme_DARKTEXT = styles.getPropertyValue("--Dark_Theme_DARKTEXT");

const light_theme_BG = styles.getPropertyValue("--Light_Theme_BG");
const light_theme_TOP_BG = styles.getPropertyValue("--Light_Theme_TOP_BG");
const light_theme_CARD_BG = styles.getPropertyValue("--Light_Theme_CARD_BG");
const light_theme_TEXT = styles.getPropertyValue("--Light_Theme_TEXT");
const light_theme_DARKTEXT = styles.getPropertyValue("--Light_Theme_DARKTEXT");

function changeTheme() {
  let styles = root.getElementsByClassName("slider");
		if (
			light_theme_BG == styles.getPropertyValue("--Light_Theme_BG")
      ) {
        root.style.setProperty("--Light_Theme_BG", dark_theme_bg);
        root.style.setProperty("--Light_Theme__TOP_BG", dark_theme_TOP_BG);
        root.style.setProperty("--Light_Theme_CARD_BG", dark_theme_CARD_BG);
        root.style.setProperty("--Light_Theme_TEXT", dark_theme_TEXT);
        root.style.setProperty("--Light_Theme_DARKTEXT", dark_theme_DARKTEXT);
        root.style.setProperty("--Image_Togle", toggle_darkMode);

        slider.style[background-image] = "toggle_darkMode";


    } else {
      root.style.setProperty("--Light_Theme_BG", light_theme_BG);
      root.style.setProperty("--Light_Theme__TOP_BG", light_theme_TOP_BG);
      root.style.setProperty("--Light_Theme_CARD_BG", light_theme_CARD_BG);
      root.style.setProperty("--Light_Theme_TEXT", light_theme_TEXT);
      root.style.setProperty("--Light_Theme_DARKTEXT", light_theme_DARKTEXT);
      slider.style[background-image] = "none";
    }
}
