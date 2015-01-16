(function () {
  "use strict";


  Vue.component('menu-btn', {
    template: '#menu-btn-template',
    methods: {
      show: function (name) {
        this.$event.preventDefault();
        this.$dispatch('show', name);
      },
    }
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
      show: function (page) {
        history.pushState(page, null, page + '.html');
        this.active = page;
      },
      is_active: function (page) {
        return this.active == page;
      },
    },
    created: function () {
      this.$on('show', function (name) {
        this.show(name);
      });
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
