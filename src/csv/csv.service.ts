import { Injectable } from '@nestjs/common';
import { join } from 'path';

const fs = require('fs');
// 파일 인코딩 체크
const chardet = require('chardet');
const csv = require('csvtojson');
const iconv = require('iconv-lite');

@Injectable()
export class CsvService {
    async getCsv() {
        // 파일 경로 설정
        const filePath = join(__dirname, 'bus_2019.csv');
        // EUC-KR을 UTF-8로 인코딩
        const encoding = await chardet.detectFile(filePath);
        // 파일 읽어 오기
        let csvData = fs.readFileSync(filePath);
        // 다른형식의 언으로르 UTF-8로 디코딩
        if (encoding !== 'UTF-8') {
            csvData = iconv.decode(csvData, encoding);
        }
        // 읽어온 파일 json으로 변환
        const result = await csv({output: 'json'}).fromString(csvData);

        console.log(encoding);

        return result;
    }
}
