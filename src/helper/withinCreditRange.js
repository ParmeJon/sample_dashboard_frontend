const withinCreditRange = (arr, lowRange, highRange) => {
    const accountsInRange = arr.filter((obj) => { return obj.credit >= lowRange && obj.credit <= highRange
    })
    return accountsInRange
}

export default withinCreditRange