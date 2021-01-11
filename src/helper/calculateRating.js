export default function calculateRating(credit, balance) {
       let mortgageRating = 'n/a'
    if (balance && credit) {
        let totalPercent
        let balancePercent
        let creditPercent = Math.round(credit/850 * 85)
        let balanceInt = Math.round(parseFloat(balance))
    

        if (balanceInt > 15000) {
            balancePercent = 15
        } else if (balanceInt >= 10000) {
            balancePercent = 10
        } else if (balanceInt >= 5000) {
            balancePercent = 8
        } else if (balanceInt >= 1000) {
            balancePercent = 5
        } else {
            balancePercent = 0
        }
        
        totalPercent = creditPercent + balancePercent

        if (totalPercent >= 90) {
            mortgageRating = 'EXCELLENT'
        } else if (totalPercent >= 75) {
            mortgageRating = 'GOOD'
        } else if (totalPercent >= 50 ) {
            mortgageRating = 'OKAY'
        } else {
            mortgageRating = 'BAD'
        }

        return mortgageRating
    }
}