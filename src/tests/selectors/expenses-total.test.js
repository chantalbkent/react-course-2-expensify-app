import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('test should return zero if no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('test should correctly add single expense', () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(195);
});

test('test should correctly add multi expenses', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(20290);
});
