export const Priceconverter = (price) => {

    const RupeePrice = Math.floor(price * 81.665)

    let currencyConvert = Intl.NumberFormat('en-IN').format(RupeePrice)
    return currencyConvert
}