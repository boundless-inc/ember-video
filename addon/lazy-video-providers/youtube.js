import { resolve } from 'rsvp';

export default {
  apiUrl(videoId) {
    return `//gdata.youtube.com/feeds/api/videos/${videoId}`;
  },
  embedUrl(videoId) {
    return `//www.youtube.com/embed/${videoId}`;
  },
  thumbnailUrl(videoId) {
    return resolve(`//img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
  }
};
