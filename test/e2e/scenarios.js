'use strict';

describe('awsStarterApp', function() {

    it('should redirect index.html to index.html#/ when pressing signin', function() {
       browser.get('app/index.html');
       element(by.id('signin-button')).click();
        browser.getLocationAbsUrl().then(function(url) {
            expect(url.split('#')[1]).toBe('/');
        });

    });
});