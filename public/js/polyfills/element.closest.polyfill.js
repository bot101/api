// Element.closest polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
// https://caniuse.com/#feat=element-closest

export default function() {
  if (!Element.prototype.matches)
    Element.prototype.matches =
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector;

  if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
      var el = this;
      if (!document.documentElement.contains(el)) return null;
      do {
        if (el.matches(s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    };
  }
}
