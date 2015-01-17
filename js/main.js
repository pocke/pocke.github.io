(function () {
  "use strict";


  Vue.component('menu-btn', {
    template: '#menu-btn-template',
    inherit: true,
    methods: {
      show: function (page) {
        this.$event.preventDefault();
        history.pushState(page, null, page + '.html');
        this.active = page;
      },
    }
  });


  Vue.component('link-item', {
    template: '#link-item-template',
  });



  var app = new Vue({
    el: '#vue-main',
    data: {
      active: 'about',
      works: {
        applications: [
          {
            title:  'Vim Scouter Web',
            url:    'https://github.com/pocke/vim_scouter_web',
            detail: 'Vim戦闘力をWebから計測',
          },
          {
            title:  'slコマンドが走りました',
            url:    'https://github.com/pocke/sl_tweet',
            detail: 'slコマンドが走る度にTwitterに呟く。',
          },
        ],
        'mikutter plugins': [
          {
            title:  'mikutter vimize',
            url:    'https://github.com/pocke/mikutter_vimize',
            detail: 'mikutter でVimライクなキーバインドを実現するプラグイン',
          }
        ],
      },
    },
    methods: {
      is_active: function (page) {
        return this.active == page;
      },
    },
  });



  window.addEventListener('popstate', function (e) {
    app.$data.active = e.state;
  });

  var path = location.pathname;
  var m = /^\/(\w+)\.html$/.exec(path);
  if (m && m[1] != 'index') {
    app.$data.active = m[1];
  }
})();
