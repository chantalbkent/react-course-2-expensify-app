const getExpensesTotal = (expenses) => {
    if(expenses.length === 0){
        return 0;
    }else{
        return expenses
        .map((expense) => expense.amount)
        .reduce((a,b) => a + b, 0);
    }
};

export default getExpensesTotal;