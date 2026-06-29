import { test, expect } from '@playwright/test';

test.describe('ACC_001', () => {
    // test.beforeEach('Login successfully', async({page}) => {
    //     await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
    //     await page.locator('#user_login').fill('betterbytes.academy.admin');
    //     await page.locator('#user_pass').fill('StrongPass@BetterBytesAcademy');
    //     await page.locator('#wp-submit').click();
    // });

    // // After all để logout sau mỗi lần test 
    // test.afterEach('Logout Successfully', async({page}) => {
    //     await page.locator('//div[@role="menuitem" and text()="Logout"]').click();
    // })

    // UC: 1
    test('Create user with role: editor', async({page}) => {
        //Login admin: 
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
        await page.locator('#user_login').fill('betterbytes.academy.admin');
        await page.locator('#user_pass').fill('StrongPass@BetterBytesAcademy');
        await page.locator('#wp-submit').click();

        // Truy cập vào màn hình create user
        await page.locator("//div[@class='wp-menu-name' and text()='Users']").click();
        await page.locator("//a[@class='page-title-action' and text() ='Add User']").click();

        // Fill Thông tin và save: 
        await page.locator('//input[@id="user_login"]').fill('k23_Khanh_1');
        await page.locator('//input[@id="email"]').fill('lgvkhanh+2@gmail.com');
        await page.locator('//input[@id="first_name"]').fill('K23_Playwright');
        await page.locator('//input[@id="last_name"]').fill('Khanh');
        await page.locator('//input[@id="url"]').fill('https://www.facebook.com/quoc.khanh.859922');
        await page.locator('//input[@id="pass1"]').fill('Alan@2808');
        await page.locator('//input[@type="checkbox"]').first().check();
        await page.locator('//select[@id="role"]').selectOption('Editor');
        await page.locator('//input[@id="createusersub"]').click();

        //Verify Expect
        const msgSuccess = page.locator('//div[@id="message"]');
        await expect(msgSuccess).toContainText('New user created.')
        
    });
    

    // Đăng nhập với User vừa tạo
    test('Logout and re-login', async({page}) => {
        // Logout và đăng nhập lại
        // await page.locator('//div[@role="menuitem" and text()="Logout"]').click(); 
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-login.php");
        await page.locator('#user_login').fill('lgvkhanh+2@gmail.com');
        await page.locator('#user_pass').fill('Alan@2808');
        await page.locator('#wp-submit').click();

        //verify 
        const sideBar = page.locator('//div[@id="adminmenuwrap"]');
        await expect(sideBar).toContainText(['Dashboard', 'Posts', 'Media', 'Pages', 'Comments', 'Profile', 'Tools']);
        await expect(sideBar).not.toContainText(['Appearance', 'Users', 'Plugins']);
    });

    test('Login admin và xoá User', async({page}) => {
        //Login admin: 
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
        await page.locator('#user_login').fill('betterbytes.academy.admin');
        await page.locator('#user_pass').fill('StrongPass@BetterBytesAcademy');
        await page.locator('#wp-submit').click();

        // Truy cập trang Users và Xoá user
        await page.locator("//div[@class='wp-menu-name' and text()='Users']").click();
        await page.locator("//input[@id='user-search-input']").fill('lgvkhanh+2@gmail.com')
        await page.keyboard.press('Enter');
        await page.locator("//a[contains(@class,'submitdelete') and contains(@href,'user=6497')]").click();
        await page.locator('//input[@id="submit"]').click();
        //
    })
});

test.describe('ACC_002', () => {
    test('Create user with role: subscriber', async({page}) => {
        //Login admin: 
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
        await page.locator('#user_login').fill('betterbytes.academy.admin');
        await page.locator('#user_pass').fill('StrongPass@BetterBytesAcademy');
        await page.locator('#wp-submit').click();

        // Truy cập vào màn hình create user
        await page.locator("//div[@class='wp-menu-name' and text()='Users']").click();
        await page.locator("//a[@class='page-title-action' and text() ='Add User']").click();

        // Fill Thông tin và save: 
        await page.locator('//input[@id="user_login"]').fill('k23_Khanh_2');
        await page.locator('//input[@id="email"]').fill('lgvkhanh+4@gmail.com');
        await page.locator('//input[@id="first_name"]').fill('K23_Playwright');
        await page.locator('//input[@id="last_name"]').fill('Khanh');
        await page.locator('//input[@id="url"]').fill('https://www.facebook.com/quoc.khanh.859922');
        await page.locator('//input[@id="pass1"]').fill('Alan@2808');
        await page.locator('//input[@type="checkbox"]').first().check();
        // default chọn option Subscriber
        await page.locator('//input[@id="createusersub"]').click();

        //Verify Expect
        const msgSuccess = page.locator('//div[@id="message"]');
        await expect(msgSuccess).toContainText('New user created.');
    });

    test('Logout and re-login', async({page}) => {
        // Logout và đăng nhập lại
        // await page.locator('//div[@role="menuitem" and text()="Logout"]').click(); 
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-login.php");
        await page.locator('#user_login').fill('lgvkhanh+2@gmail.com');
        await page.locator('#user_pass').fill('Alan@2808');
        await page.locator('#wp-submit').click();

        //verify 
        const sideBar = page.locator('//div[@id="adminmenuwrap"]');
        await expect(sideBar).toContainText(['Dashboard', 'Posts', 'Media', 'Pages', 'Comments', 'Profile', 'Tools']);
        await expect(sideBar).not.toContainText(['Appearance', 'Users', 'Plugins']);
    });

    test('Login admin và xoá User', async({page}) => {
        //Login admin: 
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
        await page.locator('#user_login').fill('betterbytes.academy.admin');
        await page.locator('#user_pass').fill('StrongPass@BetterBytesAcademy');
        await page.locator('#wp-submit').click();

        // Truy cập trang Users và Xoá user
        await page.locator("//div[@class='wp-menu-name' and text()='Users']").click();
        await page.locator("//input[@id='user-search-input']").fill('lgvkhanh+4@gmail.com')
        await page.keyboard.press('Enter');
        await page.locator("//a[contains(@class,'submitdelete') and contains(@href,'user=6497')]").click();
        await page.locator('//input[@id="submit"]').click();
        
    });
});
