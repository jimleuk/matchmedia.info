import $ from 'jquery' 
import actual from 'actual'

export const getDimensions = () => ({
    '@matchMedia': {
      'width': actual('width', 'px'),
      'height': actual('height', 'px'),
      'device-width': actual('device-width', 'px'),
      'device-height': actual('device-height', 'px'),
      'resolution': `${actual('resolution', 'dpi')}dpi`,
    },
    window: {
      '$(window).width()': $(window).width(),
      'document.documentElement.clientWidth': document.documentElement.clientWidth,
      'window.innerWidth': window.innerWidth,
      'window.outerWidth': window.outerWidth,
      '$(window).height()': $(window).height(),
      'document.documentElement.clientHeight': document.documentElement.clientHeight,
      'window.innerHeight': window.innerHeight,
      'window.outerHeight': window.outerHeight,
    },
    device: {
      'window.screen.width': window.screen.width,
      'window.screen.availWidth': window.screen.availWidth,
      'window.screen.height': window.screen.height,
      'window.screen.availHeight': window.screen.availHeight,
    },
    document: {
      '$(document).width()': $(document).width(),
      'document.body.clientWidth': document.body.clientWidth,
      'document.body.offsetWidth': document.body.offsetWidth,
      'document.body.scrollWidth': document.body.scrollWidth,
      'document.documentElement.clientWidth': document.documentElement.clientWidth,
      'document.documentElement.offsetWidth': document.documentElement.offsetWidth,
      'document.documentElement.scrollWidth': document.documentElement.scrollWidth,
      '$(document).height()': $(document).height(),
      'document.body.clientHeight': document.body.clientHeight,
      'document.body.offsetHeight': document.body.offsetHeight,
      'document.body.scrollHeight': document.body.scrollHeight,
      'document.documentElement.clientHeight': document.documentElement.clientHeight,
      'document.documentElement.offsetHeight': document.documentElement.offsetHeight,
      'document.documentElement.scrollHeight': document.documentElement.scrollHeight,
    }
})