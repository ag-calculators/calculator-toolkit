
export const formatNumber = (num, precision) => {

    return parseFloat(parseFloat(num).toFixed(precision))
}