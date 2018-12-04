import { inject as service } from '@ember/service';
import { computed, set } from '@ember/object';
import { htmlSafe } from '@ember/string';
import Component from '@ember/component';

export default Component.extend({
  showingVideo() {},
  isDisplayed: false,
  videoTitle: null,
  url: null,
  classNames: ['lazyLoad-container'],
  attributeBindings: ['style'],
  videoThumbnail: null,
  poster: null,
  videoProviders: service(),

  click() {
    set(this, 'isDisplayed', true);
    this.showingVideo();
  },

  videoSrc: computed('url', function() {
    return this.videoProviders.getUrl(this.url, 'embedUrl', { autoplay: 1 });
  }),

  didInsertElement() {
    this._super(...arguments);
    if (this.poster) {
      return;
    }
    this.videoProviders.getThumbnailUrl(this.url).then((res) => set(this, 'videoThumbnail', res));
  },

  style: computed('poster', 'videoThumbnail', function() {
    let thumbnail = this.poster || this.videoThumbnail;
    return htmlSafe(`background-image: url(${encodeURI(thumbnail)})`);
  })
});
