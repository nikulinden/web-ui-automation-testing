import {test, expect} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('http://www.uitestingplayground.com/ajax')
    await page.getByText('Button Triggering AJAX Request').click()
})

test('auto waiting', async({page}) => {
    const successButton = page.locator('.bg-success')

    //await successButton.click()
    
    //const text = await successButton.textContent()                -- option 1
    //expect(text).toEqual('Data loaded with AJAX get request.')
    
//     await successButton.waitFor({state: "attached"})             -- option 2
//     const text = await successButton.allTextContents()
//     expect(text).toContain('Data loaded with AJAX get request.')

        await expect(successButton).toHaveText('Data loaded with AJAX get request.', {timeout: 20000})
})

test('alt waits', async({page}) => {
    const successButton = page.locator('.bg-success')

    

    const text = await successButton.allTextContents()
    expect(text).toContain('Data loaded with AJAX get request.')
})