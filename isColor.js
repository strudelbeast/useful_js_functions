function isColor(colorStr) {
    var isValidHex = /^#[0-9A-F]{6}$/i.test(colorStr)
    var isValidColorFunction = /^(rgb|hsl)(a?)[(]\s*([\d.]+\s*%?)\s*,\s*([\d.]+\s*%?)\s*,\s*([\d.]+\s*%?)\s*(?:,\s*([\d.]+)\s*)?[)]$/i.test(colorStr)
    var s = new Option().style;
    s.color = colorStr;
    var isValidCSSColor = (s.color == colorStr.toLowerCase());

    return isValidHex || isValidColorFunction || isValidCSSColor
}
