document.addEventListener('init', function(event) {
  var page = event.target;


  if (page.id === 'page0') {
    page.querySelector('#sign-up-button').onclick = function() {
      document.querySelector('#myNavigator').pushPage('newuser.html');
    };
    page.querySelector('#login-button').onclick = function() {
    	document.querySelector('#myNavigator').pushPage('signin.html');}
    }else if (page.id === 'newuser') {
    	page.querySelector('#register-button').onclick = function() {
    	document.querySelector('#myNavigator').pushPage('welcome.html');}
    }else if (page.id === 'signin'){
    	page.querySelector('#signin-button').onclick = function() {
    	document.querySelector('#myNavigator').pushPage('homepage.html');
    	};
    }else if (page.id === 'welcome'){
      page.querySelector('#signin-button').onclick = function() {
        document.querySelector('#myNavigator').pushPage('homepage.html');
      };
    }else if (page.id === 'homepage'){
      page.querySelector('#dailydeals-button').onclick = function() {
        document.querySelector('#myNavigator').pushPage('dailydeals.html');
      };
      page.querySelector('#nails-button').onclick = function() {
        document.querySelector('#myNavigator').pushPage('searchresults.html');
      };
      page.querySelector('#hair-button').onclick = function() {
        document.querySelector('#myNavigator').pushPage('searchresults.html');
      };
      page.querySelector('#eyelash-button').onclick = function() {
        document.querySelector('#myNavigator').pushPage('searchresults.html');
      };
      page.querySelector('#misc-button').onclick = function() {
        document.querySelector('#myNavigator').pushPage('searchresults.html');
      };
    }

});

document.addEventListener('prechange', function(event) {
  document.querySelector('ons-bottom-toolbar .tabbar tabbar--material')
    .innerHTML = event.tabItem.getAttribute('label');
});

console.log(page);
