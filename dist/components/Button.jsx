var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from '@emotion/styled';
var Button = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, children = _a.children, onClick = _a.onClick;
    return (<StyledButton variant={variant} size={size} onClick={onClick}>
      {children}
    </StyledButton>);
};
var StyledButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* \uC2A4\uD0C0\uC77C \uC815\uC758 */\n  background-color: ", ";\n  color: ", ";\n  padding: ", ";\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  /* \uC2A4\uD0C0\uC77C \uC815\uC758 */\n  background-color: ", ";\n  color: ", ";\n  padding: ", ";\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: ", ";\n  }\n"])), function (_a) {
    var variant = _a.variant;
    return variant === 'primary' ? '#0070f3' : '#eaeaea';
}, function (_a) {
    var variant = _a.variant;
    return (variant === 'primary' ? '#fff' : '#000');
}, function (_a) {
    var size = _a.size;
    return size === 'small'
        ? '6px 12px'
        : size === 'large'
            ? '10px 20px'
            : '8px 16px';
}, function (_a) {
    var variant = _a.variant;
    return variant === 'primary' ? '#005bb5' : '#cacaca';
});
export default Button;
var templateObject_1;
