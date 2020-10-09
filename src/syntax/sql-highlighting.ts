import { SyntaxType } from "./syntax-type";

const COMMENT_REGEX = /(--).*$/s;

export class SqlHighlighter {
    parse(haystack: string, fn: (start: number, end: number, type: SyntaxType) => void): void {
        let commentMatches = haystack.match(COMMENT_REGEX);
        commentMatches.forEach((value: string, index: number) => {
            fn(index, index + value.length, SyntaxType.Comment);
        })
    }
}