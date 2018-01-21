import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set up remove expense action object', () => {
    const action = removeExpense({ id: '121ab'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '121ab'
    })
});

test('should set up edit expense action object', () => {
    const action = editExpense('121ab',{note: 'test note'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '121ab',
        updates: {
            note: 'test note'
        }
    })
});

test('should set up add expense action object', () => {
    const expenseData = { 
        description: 'rent', 
        amount: 500022, 
        createdAt: 1000, 
        note: 'this is a note'};
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should set up add expense action object', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0, 
            createdAt: 0
        }
    });
});