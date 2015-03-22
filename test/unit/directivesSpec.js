describe('awsStarterApp directives', function() {
    var $compile,
        $rootScope;

    // Load the myApp module, which contains the directive
    beforeEach(module('awsStarterApp'));
    beforeEach(module('templates/footer.template.html'));
    beforeEach(module('templates/header.template.html'));

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function(_$compile_, _$rootScope_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('should render footer template', function() {
        var element = $compile("<footer></footer>")($rootScope);
        $rootScope.$digest();
        expect(element.html()).toContain("Footer content!");
    });

    it('should render header template', function() {
        var element = $compile("<header></header>")($rootScope);
        $rootScope.$digest();
        expect(element.html()).toContain("Login with Facebook");
    })

});