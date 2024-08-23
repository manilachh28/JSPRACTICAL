import { screen } from '@testing-library/testcafe';
import { Selector } from 'testcafe';

fixture('Getting Started')
    .page('https://www.google.co.in');

test('First testCafeTest', async t => {
    await t.typeText(await screen.getByRole('textbox', { name: /search/i }), 'TestCafe Learnings');
    await t.pressKey('enter');
    const resultpage = await screen.findByText(/TestCafe/);
});

test('Second testCafeTest', async t => {
    
})

