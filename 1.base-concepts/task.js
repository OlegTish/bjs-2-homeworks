"use strict";

function solveEquation(a, b, c) {
    let discriminant = b ** 2 - 4 * a * c;
    let roots = [];

    if (discriminant < 0) {
        return roots;
    }

    if (discriminant === 0) {
        let root = -b / (2 * a);
        roots.push(root);
    } else {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        roots.push(root1, root2);
    }

    return roots;
}

"use strict";

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let monthlyPercent = (percent / 100) / 12;

    let loanBody = amount - contribution;

    if (loanBody <= 0) {
        return 0;
    }

    let monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / ((1 + monthlyPercent) ** countMonths - 1)));

    let totalPayment = monthlyPayment * countMonths;

    return Number(totalPayment.toFixed(2));
}