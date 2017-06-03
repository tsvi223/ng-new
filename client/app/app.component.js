
app.component('appElement', {
    transclude: true,
    template :  "<top-side class='col-md-12'></top-side>" +
                "<left-side  class='col-md-3'></left-side>" +
                "<central class='col-md-9'></central> <ng-outlet></ng-outlet>" ,
    bindings : {
    },
    scope : {
    },
    controller : ctrl
});

function ctrl(){
    var appCtrl = this;
}
