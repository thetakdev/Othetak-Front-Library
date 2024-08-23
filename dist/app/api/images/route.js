"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = GET;
var _server = require("next/server");
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
async function GET() {
  console.log("패스!!!", _path.default);
  try {
    const imagesDirectory = _path.default.join(process.cwd(), 'public/images');
    console.log('이미지 디렉토리:', imagesDirectory); // 디버깅용

    const filenames = _fs.default.readdirSync(imagesDirectory);
    const images = filenames.map(filename => ({
      name: filename,
      path: `/images/${filename}`
    }));
    return _server.NextResponse.json(images);
  } catch (error) {
    console.error('Error reading images directory:', error);
    return _server.NextResponse.json({
      error: 'Failed to read images directory'
    }, {
      status: 500
    });
  }
}