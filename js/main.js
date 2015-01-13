(function () {

  Vue.component('works-item', {
    template: '#works-item-template',
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
        this.active = page;
      },
    }
  });
})();
