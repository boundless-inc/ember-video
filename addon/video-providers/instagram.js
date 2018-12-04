import { resolve } from 'rsvp';

export default {
  embedUrl(videoId) {
    return `http://instagram.com/p/${videoId}/embed`;
  },
  thumbnailUrl(videoId) {
    return resolve(`http://instagram.com/p/${videoId}/media/?size=l`);
  }
};
