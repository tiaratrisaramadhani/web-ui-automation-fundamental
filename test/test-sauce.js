const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('Tugas Automate Saucedemo', function() {
    this.timeout(30000); //
    let driver;


    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });


    after(async function() {
        await driver.quit();
    });

    it('Scenario 1: Sukses Login', async function() {
        await driver.get('https://www.saucedemo.com/');
        await driver.findElement(By.id('user-name')).sendKeys('standard_user');
        await driver.findElement(By.id('password')).sendKeys('secret_sauce');
        await driver.findElement(By.id('login-button')).click();

        let title = await driver.findElement(By.className('title')).getText();
        expect(title).to.equal('Products');
    });

    it('Scenario 2: Urutkan Produk dari A-Z', async function() {
        const dropdown = await driver.findElement(By.className('product_sort_container'));
        await dropdown.click();
        await driver.findElement(By.xpath("//option[@value='az']")).click();
        let firstItemName = await driver.findElement(By.className('inventory_item_name')).getText();
        expect(firstItemName).to.equal('Sauce Labs Backpack');
    });
});