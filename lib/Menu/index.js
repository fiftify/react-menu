'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./menu.css');

var _ShapeOverlays = require('./ShapeOverlays');

var _ShapeOverlays2 = _interopRequireDefault(_ShapeOverlays);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withMenu = function withMenu(props) {
  return function (WrappedComponent) {
    return function (_React$Component) {
      _inherits(_class, _React$Component);

      function _class(props) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

        _this.state = {
          isMenuVisible: false
        };
        _this.overlay = null;
        _this.toggleMenu = _this.toggleMenu.bind(_this);
        _this.handleNavItemClick = _this.handleNavItemClick.bind(_this);
        return _this;
      }

      _createClass(_class, [{
        key: 'toggleMenu',
        value: function toggleMenu(event) {
          event && event.preventDefault();
          if (!this.overlay || this.overlay.isAnimating) {
            return false;
          }
          this.overlay.toggle();
          this.setState({ isMenuVisible: !this.state.isMenuVisible });
        }
      }, {
        key: 'handleNavItemClick',
        value: function handleNavItemClick(item) {
          var _this2 = this;

          return function (event) {
            _this2.toggleMenu(event);
            item.action(_this2.props);
          };
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          var node = _reactDom2.default.findDOMNode(this);
          this.overlay = new _ShapeOverlays2.default(node.querySelector('.shape-overlays'));
        }
      }, {
        key: 'render',
        value: function render() {
          var _this3 = this;

          var items = props.items;
          var isMenuVisible = this.state.isMenuVisible;


          return _react2.default.createElement(
            'div',
            { className: 'new-menu' },
            _react2.default.createElement(
              'div',
              { className: 'content--new-menu' },
              _react2.default.createElement(
                'div',
                {
                  className: (0, _classnames2.default)('hamburger hamburger--new-menu js-hover', { 'is-opened-navi': isMenuVisible }),
                  onClick: this.toggleMenu
                },
                _react2.default.createElement(
                  'div',
                  { className: 'hamburger__line hamburger__line--01' },
                  _react2.default.createElement('div', { className: 'hamburger__line-in hamburger__line-in--01' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'hamburger__line hamburger__line--02' },
                  _react2.default.createElement('div', { className: 'hamburger__line-in hamburger__line-in--02' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'hamburger__line hamburger__line--03' },
                  _react2.default.createElement('div', { className: 'hamburger__line-in hamburger__line-in--03' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'hamburger__line hamburger__line--cross01' },
                  _react2.default.createElement('div', { className: 'hamburger__line-in hamburger__line-in--cross01' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'hamburger__line hamburger__line--cross02' },
                  _react2.default.createElement('div', { className: 'hamburger__line-in hamburger__line-in--cross02' })
                )
              ),
              _react2.default.createElement(WrappedComponent, _extends({}, this.props, { toggleMenu: this.toggleMenu })),
              _react2.default.createElement(
                'div',
                { className: 'global-menu' },
                _react2.default.createElement(
                  'div',
                  { className: 'global-menu__wrap' },
                  items.map(function (item, i) {
                    return _react2.default.createElement(
                      'a',
                      {
                        key: i,
                        className: (0, _classnames2.default)('global-menu__item global-menu__item--new-menu', {
                          'is-opened': isMenuVisible
                        }),
                        href: '#',
                        onClick: _this3.handleNavItemClick(item)
                      },
                      item.label
                    );
                  })
                )
              ),
              _react2.default.createElement(
                'svg',
                { ref: 'test', className: 'shape-overlays', viewBox: '0 0 100 100', preserveAspectRatio: 'none' },
                _react2.default.createElement('path', { className: 'shape-overlays__path' }),
                _react2.default.createElement('path', { className: 'shape-overlays__path' }),
                _react2.default.createElement('path', { className: 'shape-overlays__path' })
              )
            )
          );
        }
      }]);

      return _class;
    }(_react2.default.Component);
  };
};

exports.default = withMenu;