const fs = require("fs");
const path = require("path");

// 이미지 파일이 위치한 디렉토리 경로
const imagesDirectory = path.join(__dirname, "public/images");

// 컴포넌트 파일을 저장할 경로
const componentsDirectory = path.join(__dirname, "src/components/images");

// index.ts 파일 경로
const indexFilePath = path.join(__dirname, "src/index.ts");

// 폴더가 존재하지 않으면 생성
if (!fs.existsSync(componentsDirectory)) {
  fs.mkdirSync(componentsDirectory, { recursive: true });
}

// index.ts 파일 내용 읽기
let indexFileContent = "";
if (fs.existsSync(indexFilePath)) {
  indexFileContent = fs.readFileSync(indexFilePath, "utf8");
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// 이미지 파일을 읽어와 React 컴포넌트 생성 및 index.ts에 추가
fs.readdir(imagesDirectory, (err, files) => {
  if (err) throw err;

  files.forEach((file) => {
    const componentName = file
      .replace(/[-_](.)/g, (match, group1) => group1.toUpperCase()) // -와 _ 다음 문자를 대문자로 변환
      .replace(/\.[^/.]+$/, "") // 파일 확장자를 제거
      .replace(/^(.)/, (match, group1) => group1.toUpperCase()) + 'IC'; // 첫 글자를 대문자로 변환

    const componentCode = `
const ${componentName} = (props: any) => {
  return <img src="/images/${file}" alt="${componentName}" {...props} />;
};

export default ${componentName};
`;

    // 생성된 컴포넌트 파일을 저장
    fs.writeFile(
      path.join(componentsDirectory, `${componentName}.tsx`),
      componentCode,
      (err) => {
        if (err) throw err;
        console.log(`${componentName}.tsx has been created`);
      }
    );

    // index.ts에 중복된 export 구문이 없을 때만 추가
    const exportStatement = `export { default as ${componentName} } from './components/images/${componentName}';\n`;
    if (!indexFileContent.includes(exportStatement.trim())) {
      fs.appendFileSync(indexFilePath, exportStatement);
      console.log(`${componentName} has been added to index.ts`);
    }
  });
});
