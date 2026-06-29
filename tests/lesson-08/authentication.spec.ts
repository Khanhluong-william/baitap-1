import { test, expect } from '@playwright/test';

test.describe('Authentication', () =>{
// BeforeEach cần truy cập page nhiều lần
    test.beforeEach('Truy cập trang Login', async({page}) => {
        await page.goto('https://the-internet.herokuapp.com/login');
    })

    test('Login success', async({page}) => {
        // Nhập giá trị hợp lệ 
        await page.locator('//input[@id="username"]').fill("tomsmith");
        await page.locator('//input[@id="password"]').fill("SuperSecretPassword!");
        await page.locator('//button[@type="submit"]').click();

        //Verify expect: 
        await expect(page).toHaveURL(/secure/);
        await expect(page.locator('//div[@id="flash"]')).toContainText('You logged into a secure area!');
    })

    test('Login Fail', async({page}) => {
        // Nhập giá trị hợp lệ 
        await page.locator('//input[@id="username"]').fill("tomsmith");
        await page.locator('//input[@id="password"]').fill("wrongpass");
        await page.locator('//button[@type="submit"]').click();

        //Verify hiển thị msg: 
        const msg = page.locator('//div[@id="flash"]');
        await expect(msg).toContainText('Your password is invalid!');
    })

    test('Logout', async ({ page }) => {
        await page.locator('#username').fill('tomsmith');
        await page.locator('#password').fill('SuperSecretPassword!');
        await page.locator('button[type="submit"]').click();
        await page.locator('a.button').click();

        await expect(page).toHaveURL(/login/);
        await expect(page.locator('#flash')).toContainText('You logged out of the secure area!');
    });
});