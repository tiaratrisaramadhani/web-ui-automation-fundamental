const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');

describe('Tugas Sesi 9 - Web UI Automation Fundamental', function () {
    this.timeout(60000);
    let driver;

    it('Login dan Sortir A-Z (Gaya Fundamental)', async function () {
        driver = await new Builder().forBrowser('chrome').build();
        
        await driver.get('https://www.saucedemo.com/');
        await driver.findElement(By.id('user-name')).sendKeys('standard_user');
        await driver.findElement(By.id('password')).sendKeys('secret_sauce');
        await driver.findElement(By.id('login-button')).click();
        
        await driver.findElement(By.className('product_sort_container')).click();
        await driver.findElement(By.xpath("//option[@value='az']")).click();

        let firstItem = await driver.findElement(By.className('inventory_item_name')).getText();
        assert.strictEqual(firstItem, 'Sauce Labs Backpack');

        await driver.quit();
    });
});