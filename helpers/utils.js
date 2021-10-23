import { reverse as _reverse }  from 'lodash';
import moment from 'moment';
import { isEmpty, sumBy, shuffle }  from 'lodash';

const API_URL = process.env.API_URL;
const helpers = {
  validYoutubeUrl: (url) => {
    var p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    if(url.match(p)){
        return url.match(p)[1];
    }
    return false;
  },
  validYoutubeId: (url) => {
    var p = /(.*?)(^|\/|v=)([a-z0-9_-]{11})(.*)?$/;
    if(url.match(p)){
        return url.match(p)[3];
    }
    return false;
  },
  url: (path='') => {
    return `${API_URL}${path}`;
  },
  isEmpty: (val) => {
    return isEmpty(val);
  },
  sumBy: (_object, key) => {
    return sumBy(_object, val => val[key]);
  },
  numberK: function numberK(num, txt='k') {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + txt : Math.sign(num)*Math.abs(num)
  },
  fomatDateTime: (dateTime, format='MM/DD/YYYY HH:mm:ss') => {
    return moment(dateTime).format(format);
  },
  cutWord : (str, n) => {
    if (str.length <= n) {
      return str;
    }
    var truncated = str.substr(0, n);
    if (str.charAt(n) === ' ') {
      return truncated;
    }
    return truncated.substr(0, truncated.lastIndexOf(' '));
  },
  shuffle: (arr, returnFirst = true) => {
    return arr[0];
    if(arr.length > 0) {
      return returnFirst ? shuffle(arr)[0] : shuffle(arr);
    }
    return null;
  },

  paginate: (totalItems, currentPage= 1, pageSize= 24,maxPages= 10) => {
    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);
  
    // ensure current page isn't out of range
    if (currentPage < 1) {
        currentPage = 1;
    } else if (currentPage > totalPages) {
        currentPage = totalPages;
    }
  
    let startPage, endPage;
    if (totalPages <= maxPages) {
      // total pages less than max so show all pages
      startPage = 1;
      endPage = totalPages;
    } else {
        // total pages more than max so calculate start and end pages
      let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
      let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
      if (currentPage <= maxPagesBeforeCurrentPage) {
          // current page near the start
          startPage = 1;
          endPage = maxPages;
      } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
          // current page near the end
          startPage = totalPages - maxPages + 1;
          endPage = totalPages;
      } else {
          // current page somewhere in the middle
          startPage = currentPage - maxPagesBeforeCurrentPage;
          endPage = currentPage + maxPagesAfterCurrentPage;
      }
    }
    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    // create an array of pages to ng-repeat in the pager control
    let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
    // return object with all pager properties required by the view
    return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages
    };
  },
}
export default helpers;